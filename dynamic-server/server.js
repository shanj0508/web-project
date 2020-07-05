var http = require("http");
var fs = require("fs");
var url = require("url");
var port = process.argv[2];

if (!port) {
  console.log("请指定端口号好不啦？\nnode server.js 8888 这样不会吗？");
  process.exit(1);
}

var server = http.createServer(function (request, response) {
  var parsedUrl = url.parse(request.url, true);
  var pathWithQuery = request.url;
  var queryString = "";
  if (pathWithQuery.indexOf("?") >= 0) {
    queryString = pathWithQuery.substring(pathWithQuery.indexOf("?"));
  }
  var path = parsedUrl.pathname;
  var query = parsedUrl.query;
  var method = request.method;

  /******** 从这里开始看，上面不要看 ************/
  const session = JSON.parse(
    fs.readFileSync("./dynamic-server/session.json").toString()
  );

  console.log("有个傻子发请求过来啦！路径（带查询参数）为：" + pathWithQuery); //读取路径+查询参数
  // console.log('Method:')
  // console.log(method) //读取请求动词：get 或post
  // console.log('request.headers')
  // console.log(request.headers) //读取请求头

  if (path === "/sign_in" && method === "POST") {
    //服务器获取JSON数据--server.js
    response.setHeader("Content-Type", "text/html;charset=utf-8");
    const userArray = JSON.parse(
      //读取用户数组
      fs.readFileSync("./dynamic-server/db/users.json")
    );
    const array = [];
    //数据分段上传：由于不确定要上传的数据大小，因此采用分段上传
    request.on("data", (chunk) => {
      //监听request的data事件，data就是上传事件
      array.push(chunk);
    });
    request.on("end", () => {
      //console.log(array); //打印结果：[<Buffer 7b 22 6e 61 6d 65 22 3a 22 31 31 31 22 2c 22 70 61 73 73 77 6f 72 64 22 3a 22 32 32 32 22 7d>]
      const string = Buffer.concat(array).toString(); //Buffer.concat()将不同的数据合成一个字符串的功能
      //console.log(string); //打印结果：{"name":"111","password":"222"}
      const obj = JSON.parse(string); //将字符串变成对象   填写的name  password
      //对userArray中每个对象查找，是否与页面的用户名和密码一致,返回匹配的第一个值
      const user = userArray.find(
        (user) => user.name === obj.name && user.password === obj.password
      );
      //如果user没有找到匹配的值，则返回undefined
      console.log("user:" + user);
      if (user === undefined) {
        response.statusCode = 400;
        response.setHeader("Content-Type", "text/json;charset=utf-8");
        response.end(`{"errorCode":531}`);
      } else {
        response.statusCode = 200;
        //response.setHeader("Set-Cookie", "logined=1; HttpOnly"); //登陆成功后设置Cookie
        // response.setHeader("Set-Cookie", `user_id=${user.id}; HttpOnly`); //登陆成功后设置Cookie
        const random = Math.random();
        // const session = JSON.parse(
        //   fs.readFileSync("./dynamic-server/session.json").toString()
        // );
        session[random] = { user_id: user.id };
        fs.writeFileSync(
          "./dynamic-server/session.json",
          JSON.stringify(session)
        );
        response.setHeader("Set-Cookie", `session_id=${random}; HttpOnly`); //登陆成功后设置Cookie
        response.end();
      }
    });
  } else if (path === "/home.html") {
    const cookie = request.headers["cookie"];
    let sessionId;
    try {
      sessionId = cookie
        .split(";")
        .filter((s) => s.indexOf("session_id=") >= 0)[0]
        .split("=")[1];
    } catch (error) {}

    if (sessionId && session[sessionId]) {
      const userId = session[sessionId].user_id;
      const userArray = JSON.parse(
        //读取用户数组
        fs.readFileSync("./dynamic-server/db/users.json")
      );
      const user = userArray.find((user) => user.id === userId);
      const homeHtml = fs
        .readFileSync("./dynamic-server/public/home.html")
        .toString();
      let string = "";
      if (user) {
        string = homeHtml
          .replace("{{loginStatus}}", "已登录")
          .replace("{{user.name}}", user.name);
      }

      response.write(string);
      response.end();
    } else {
      const homeHtml = fs
        .readFileSync("./dynamic-server/public/home.html")
        .toString();
      const string = homeHtml
        .replace("{{loginStatus}}", "未登录")
        .replace("{{user.name}}", "");
      response.write(string);
      response.end();
    }
  } else if (path === "/register" && method === "POST") {
    //服务器获取JSON数据--server.js
    response.setHeader("Content-Type", "text/html;charset=utf-8");
    const userArray = JSON.parse(
      //读取用户数组
      fs.readFileSync("./dynamic-server/db/users.json")
    );
    const array = [];
    //数据分段上传：由于不确定要上传的数据大小，因此采用分段上传
    request.on("data", (chunk) => {
      //监听request的data事件，data就是上传事件
      array.push(chunk);
    });
    request.on("end", () => {
      //console.log(array); //打印结果：[<Buffer 7b 22 6e 61 6d 65 22 3a 22 31 31 31 22 2c 22 70 61 73 73 77 6f 72 64 22 3a 22 32 32 32 22 7d>]
      const string = Buffer.concat(array).toString(); //Buffer.concat()将不同的数据合成一个字符串的功能
      //console.log(string); //打印结果：{"name":"111","password":"222"}
      const obj = JSON.parse(string); //将字符串变成对象
      console.log(obj.name);
      console.log(obj.password);
      const lastUser = userArray[userArray.length - 1];
      const newUser = {
        //判断最后一个用户是否存在，如果存在，新用户的id = 最后一个用户的id+1
        //如果不存在，新用户的id=1
        id: lastUser ? lastUser.id + 1 : 1,
        name: obj.name,
        password: obj.password,
      };
      userArray.push(newUser);
      fs.writeFileSync(
        "./dynamic-server/db/users.json",
        JSON.stringify(userArray)
      ); //userArray从对象变成字符串

      response.end();
    });
  } else {
    response.statusCode = 200; //设置响应状态码
    const filePath = path === "/" ? "/index.html" : path; //默认首页。如果path是/ 那么默认找到/index.html
    // console.log(path);
    const index = filePath.lastIndexOf("."); //lastIndexOf返回字符串中.的下标
    const suffix = filePath.substring(index); //suffix:后缀。从.开始取到后面的子字符串，即取文件后缀，例如 .html
    const fileTypes = {
      ".html": "text/html",
      ".css": "text/css",
      ".js": "text/javascript",
      ".png": "image/png",
      ".jpg": "image/jpeg",
    };
    response.setHeader(
      "Content-Type",
      `${fileTypes[suffix] || "text/html"};charset=utf-8`
    ); //设置响应头
    let content;
    try {
      //try里面的内容有可能会报错，不报错表示文件存在，正常执行下面的代码
      content = fs.readFileSync(`./dynamic-server/public${filePath}`);
    } catch (error) {
      //如果报错，表示文件不存在，catch这个错误，并执行下面的代码
      response.statusCode = 404;
      content = "文件不存在";
    }

    response.write(content); //设置响应体//response.write() 写入相应内容  括号内的字符串用反引号括起来，反引号中间的内容可换行编写
    response.end(); // response.end() 调用end，则响应发送给浏览器
  }
  /******** 代码结束，下面不要看 ************/
});

server.listen(port);
console.log(
  "监听 " +
    port +
    " 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:" +
    port
);

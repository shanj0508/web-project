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

  console.log("有个傻子发请求过来啦！路径（带查询参数）为：" + pathWithQuery); //读取路径+查询参数
  // console.log('Method:')
  // console.log(method) //读取请求动词：get 或post
  // console.log('request.headers')
  // console.log(request.headers) //读取请求头

  if (path === "/index.html") {
    response.statusCode = 200; //设置响应状态码
    response.setHeader("Content-Type", "text/html;charset=utf-8"); //设置响应头
    let string = fs.readFileSync("AJAX_1/public/index.html").toString(); //得到的内容可能不是string类型，需要toString()
    const page1 = fs.readFileSync("AJAX_1/db/page1.json").toString(); //得到的内容可能不是string类型，需要toString()
    const array = JSON.parse(page1);
    const result = array.map((item) => `<li>${item.id}</li>`).join("");
    string = string.replace("{{page1}}", `<ul id='xxx'>${result}</ul>`); //把index.html中读取的string字符串中的{{page1}}占位符内容的地方替换为数据库中拿到的page1字符串
    response.write(string); //response.write() 写入相应内容  括号内的字符串用反引号括起来，反引号中间的内容可换行编写
    //设置响应体
    response.end(); // response.end() 调用end，则响应发送给浏览器
  } else if (path === "/main.js") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/javascript;charset=utf-8");
    response.write(fs.readFileSync("AJAX_1/public/main.js"));
    response.end();
  } else if (path === "/2.js") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/javascript;charset=utf-8");
    response.write(fs.readFileSync("AJAX_1/public/2.js"));
    response.end();
  } else if (path === "/style.css") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/css;charset=utf-8");
    response.write(fs.readFileSync("AJAX_1/public/style.css"));
    response.end();
  } else if (path === "/3.html") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html;charset=utf-8");
    response.write(fs.readFileSync("AJAX_1/public/3.html"));
    response.end();
  } else if (path === "/4.xml") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/xml;charset=utf-8");
    response.write(fs.readFileSync("AJAX_1/public/4.xml"));
    response.end();
  } else if (path === "/5.json") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json;charset=utf-8"); //这里可以写为text/json或者pplication/json
    response.write(fs.readFileSync("AJAX_1/public/5.json"));
    response.end();
  } else if (path === "/page2.json") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json;charset=utf-8"); //这里可以写为text/json或者pplication/json
    response.write(fs.readFileSync("AJAX_1/db/page2.json"));
    response.end();
  } else if (path === "/page3.json") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json;charset=utf-8"); //这里可以写为text/json或者pplication/json
    response.write(fs.readFileSync("AJAX_1/db/page3.json"));
    response.end();
  } else {
    response.statusCode = 404;
    response.setHeader("Content-Type", "text/html;charset=utf-8");
    response.write(`你访问的页面不存在`);
    response.end();
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

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

  console.log("有个傻子发请求过来啦！路径（带查询参数）为：" + pathWithQuery);
  if (path === "/index.html") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html;charset=utf-8");
    response.write(fs.readFileSync("cross-domain/qq-com/public/index.html"));
    response.end();
  } else if (path === "/qq.js") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/javascript;charset=utf-8");
    response.write(fs.readFileSync("cross-domain/qq-com/public/qq.js"));
    response.end();
  } else if (path === "/friends.json") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/json;charset=utf-8");
    response.setHeader("Access-Control-Allow-Origin", "http://localhost:8888"); //cors
    response.write(fs.readFileSync("cross-domain/qq-com/public/friends.json"));
    response.end();
  } else if (path === "/friends.js") {
    console.log(request.headers["referer"]);
    if (request.headers["referer"].indexOf("http://localhost:8888") === 0) {
      response.statusCode = 200;
      response.setHeader("Content-Type", "text/javascript;charset=utf-8");
      // const string =`window['{{xxx}}']({{data}})`   qq.js文件中只有这一句，可以省略这个文件，直接写在这里
      const string = fs
        .readFileSync("cross-domain/qq-com/public/friends.js")
        .toString();
      const data = fs
        .readFileSync("cross-domain/qq-com/public/friends.json")
        .toString();
      const string2 = string
        .replace("{{data}}", data)
        .replace("{{xxx}}", query.callback);
      response.write(string2);
      response.end();
    } else {
      response.statusCode = 404;
      response.end();
    }
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

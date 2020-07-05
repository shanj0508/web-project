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

  response.statusCode = 200; //设置响应状态码

  const filePath = path === "/" ? "/index.html" : path; //默认首页。如果path是/ 那么默认找到/index.html
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
    content = fs.readFileSync(`./static-server/public${filePath}`);
  } catch (error) {
    //如果报错，表示文件不存在，catch这个错误，并执行下面的代码
    response.statusCode = 404;
    content = "文件不存在";
  }

  response.write(content); //设置响应体//response.write() 写入相应内容  括号内的字符串用反引号括起来，反引号中间的内容可换行编写
  response.end(); // response.end() 调用end，则响应发送给浏览器

  /******** 代码结束，下面不要看 ************/
});

server.listen(port);
console.log(
  "监听 " +
    port +
    " 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:" +
    port
);

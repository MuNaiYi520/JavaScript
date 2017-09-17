"use strict";

var fs = require("fs"),
  url = require("url"),
  path = require("path"),
  http = require("http");

//从命令行参数获取root目录,默认是当前目录
var root = path.resolve(process.argv[2] || ".");
//console.log(process.argv[2]);
console.log(`root:${root}`);

//创建服务器
var server = http.createServer(function(request, response) {
  //console.log(`request.url:${request.url}`);
  var pathName = url.parse(request.url).pathname;

  var filePath = path.join(root, pathName);

  fs.stat(filePath, function(err, stats) {
    if (!err && stats.isFile()) {
      console.log(`200,request.url:${request.url}`);

      response.writeHead(200);

      fs.createReadStream(filePath).pipe(response);
    } else {
      console.log(`404,request.url:${request.url}`);

      response.writeHead(404);

      response.end("404 Not Found");
    }
  });
});

server.listen(8899);

console.log("Server is running at http://localhost:8899");

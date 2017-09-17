'use strict';

//解析URL需要用户Node.js提供的url模块,使用起来也是非常简单,通过parse()将一个字符串解析
//为一个url对象
var url = require('url');
console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));

//处理本地目录需要使用Node.js提供的path模块,它可以方便的构造目录
var path = require('path');

var workDir = path.resolve('.');
console.log(`workDir:${workDir}`);

//组合完整的文件路径
var filePath = path.join(workDir, 'pub', 'index.html');
console.log(`filePath:${filePath}`);
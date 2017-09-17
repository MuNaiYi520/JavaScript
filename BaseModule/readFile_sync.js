'use strict'

var fs = require('fs');
//同步读取
//用来测试在Node.js环境下读取文本文件
var data = fs.readFileSync('sample.txt', 'utf-8');
console.log(data);
'use strict'

var fs = require('fs');
//异步读取
//用来测试在Node.js环境下读取文本文件
fs.readFile('sample.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})
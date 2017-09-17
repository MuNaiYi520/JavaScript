'use strict'

//异步读取
//用来测试在Node.js环境下读取图片
var fs = require('fs');

fs.readFile('test.jpg', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        console.log(data.length + 'bytes');
    }
})
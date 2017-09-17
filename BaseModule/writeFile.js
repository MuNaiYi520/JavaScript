'use strict';

var fs = require('fs');

var data = "这里是用来测试在Node.js环境下异步写文件的.";
fs.writeFile('sample.txt', data, function (err) {
    if (err) {
        console.log(err);
        console.log(err);
    } else {
        console.log('writeFile is ok.');
    }
})
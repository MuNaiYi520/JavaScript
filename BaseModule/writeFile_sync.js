'use strict';

var fs = require('fs');

var data = "这里是用来测试在Node.js环境下同步写文件的.";
fs.writeFileSync('sample.txt', data);

console.log(' Sync writeFile is ok.');
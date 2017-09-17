'use strict';

var fs = require('fs');

fs.stat('sample.txt', function (err, stat) {
    if (err) {
        console.log(err);
    } else {
        //是否是文件
        console.log(`isFile:${stat.isFile()}`);
        //是否是目录
        console.log(`isDirectoty:${stat.isDirectory()}`);
        if (stat.isFile()) {
            //文件大小,创建时间,修改时间
            console.log(`size:${stat.size},birthTime:${stat.birthtime},modifiedTime:${stat.mtime}`);
        }
    }
})
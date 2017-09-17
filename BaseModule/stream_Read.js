"use strict";

var fs = require("fs");
var fs = fs.createReadStream("sample.txt", "utf-8");

//data事件表示流的数据已经可以读取了
//data事件可能会有多次，每次传递的chunk是流的一部分数据。
fs.on("data", function(chunk) {
  console.log(`Data:${chunk}`);
});

//end事件表示这个流已经到末尾了,没有数据可以读取了
fs.on("end", function() {
  console.log(`End.`);
});

//error事件表示出错了
fs.on("error", function(err) {
  console.log(`ERROR:${err}`);
});

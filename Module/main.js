'use strict';
var greet = require('./hello');

var rocker = require('./rocker');

var foo = require('./foo');

var s = "MuNaiYi";

greet(s);

//rocker.name();

//当展示的模块时一个类时
// var

//当展示的模块是一个数组
//console.log(rocker);

rocker.name();
console.log(rocker.age);

console.log(`module foo a:${foo.a}`);
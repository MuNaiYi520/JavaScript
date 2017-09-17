'use strict';
//有些时候，多个异步任务是为了容错。
//比如，同时向两个URL读取用户的个人信息，
//只需要获得先返回的结果即可。这种情况下，用Promise.race()实现
var p1 = new Promise(function(resolve, reject) {
	setTimeout(resolve, 500, 'p1');
});

var p2 = new Promise(function(resolve, reject) {
	setTimeout(resolve, 600, 'p2');
});

//由于p1执行较快，Promise的then()将获得结果'P1'。
//p2仍在继续执行，但执行结果将被丢弃。
Promise.race([p1, p2]).then(function(result) {
	console.log(result);
});

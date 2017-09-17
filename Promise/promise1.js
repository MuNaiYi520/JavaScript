'use strict';

new Promise(function(resolve, reject) {
	console.log(`start new Promise ...`);
	var timeOut = Math.random() * 2;

	console.log(`set timeout to:${timeOut} seconds.`);

	setTimeout(function() {
		if (timeOut < 1) {
			console.log(`call resolve()...`);
			resolve('200 Ok');
		} else {
			console.log(`call reject()...`);
			reject(`timeOut in ${timeOut} seconds.`);
		}
	}, timeOut * 1000);
})
	.then(function(r) {
		//执行成功时,执行此函数
		console.log(`Done:${r}`);
	})
	.catch(function(reason) {
		//执行失败时,执行此函数
		console.log(`Failed:${reason}`);
	});

//Promise最大的好处就是再异步执行的流程中,把执行代码和护理结果的代码清晰地分离了

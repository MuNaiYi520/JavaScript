'use strict';
function test(resolve, reject) {
	var timeOut = Math.random() * 2;
	console.log(`set timeOut to:${timeOut} seconds.`);

	setTimeout(function() {
		if (timeOut < 1) {
			console.log(`call resolve()...`);
			resolve('200 Ok');
		} else {
			console.log(`call reject()...`);
			reject(`timeOut in ${timeOut} seconds.`);
		}
	}, timeOut * 1000);
}

new Promise(test)
	.then(function(result) {
		console.log(`成功:${result}`);
	})
	.catch(function(reason) {
		console.log(`失败:${reason}`);
	});

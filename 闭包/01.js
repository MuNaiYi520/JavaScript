//闭包
//函数作为返回值
//高阶函数除了可以接受函数作为参数外,还可以把函数作为结果值返回
function sum(arr) {
    return arr.reduce(function (x, y) {
        return x + y;
    })
}

function testSum(arr) {
    var sum = function () { 
        return arr.reduce(function (x,y) {
            return x + y;
        });
    }
}


function count() {

}


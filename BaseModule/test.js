console.log("test 开始执行....");

//将在下一轮事件循环中调用
process.nextTick(function () {
    console.log("nextTick callback!");
});

process.on("exit", function (code) {
    console.log("about to exit with code:" + code);
})
console.log("nextTick was set!");

//判断javascript执行环境
if (typeof (window) === "undefined") {
    console.log("javascript执行环境:node.js");
} else {
    console.log("javascript执行环境:brower");
}
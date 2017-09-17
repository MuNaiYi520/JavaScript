"use strict";
const webSocket = require("ws");
let ws = new webSocket("ws://localhost:3000/test");

//打开WebSocket连接后立刻发送一条消息
ws.on("open", function() {
  console.log(`[CLIENT] open()...`);
  ws.send("Hello!", err => {
    if (err) {
      console.log(`[Service] error:${err}.`);
    }
  });
});

//响应收到的信息
ws.on("message", function(message) {
  console.log(`[CLIENT] Received: ${message}`);
});

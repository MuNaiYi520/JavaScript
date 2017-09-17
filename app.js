"use strict";

//导入WebSocket模块:
const webSocket = require("ws");
//引用Server类
const webSocketService = webSocket.Server;
// 实例化:
const wss = new webSocketService({
  port: 3000
});

//在connection事件中，回调函数会传入一个WebSocket的实例，表示这个WebSocket连接。
//对于每个WebSocket连接，我们都要对它绑定某些事件方法来处理不同的事件。
//这里，我们通过响应message事件，在收到消息后再返回一个ECHO: xxx的消息给客户端。
wss.on("connection", function(ws) {
  console.log(`[Service] connection...`);
  ws.on("message", function(message) {
    console.log(`[Service] Recevied:${message}`);
    ws.send(`ECHO:${message}`, err => {
      if (err) {
        console.log(`[Service] error:${err}.`);
      }
    });
  });
});

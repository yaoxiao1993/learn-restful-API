//导入 express 功能模块，创建一个 express 应用实例名为 app
const express = require('express')
const app = express();
//app.get() 接口会响应 HTTP GET 请求，
//当访问路径与 / 相匹配的时候，则执行上述代码，并通过 res.send() 接口向客户端发送 Hello world! 字符串。
app.get('/',function(req, res){
    res.send('Hello world!');
})
//app.listen() 方法会创建一个 HTTP server 实例，用来监听来自本地 3000 端口的所有请求。
app.listen(3000, function(){
    console.log('你的服务器在3000端口裸奔！');
});
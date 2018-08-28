//导入 express 功能模块，创建一个 express 应用实例名为 app
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

//引入mongoose数据库驱动
const mongoose = require('mongoose');
//设置连接位置
mongoose.connect('mongodb://localhost:27017/movie-db',{ useNewUrlParser: true });
const db = mongoose.connection;
//引入MovieSchema
const Movie = require('../module/movie')
//使用body-parser中间件
app.use(morgan('short'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//监听连接消息
db.on('error', console.log);
//手动连接一次，回调函数打印success
db.once('open', ()=>{
    let movie = new Movie({title: 'yaoxiaoyu'});
    movie.save(function(err){
        if(err)
            console.log(err)   
    })
    console.log("success!");
});

//app.get() 接口会响应 HTTP GET 请求，
//当访问路径与 / 相匹配的时候，则执行上述代码，并通过 res.send() 接口向客户端发送 Hello world! 字符串。
app.get('/',function(req, res){
    res.send('Hello world!');
})

app.get('/api', function(req, res){
    res.json({message: 'get request!'})
});
app.post('/api', function(req,res){
    console.log(req.body)
    res.json({message: 'post request!'})
});

app.get('/movies', function(req, res) {
    Movie.find().sort({'createdAt': -1}).exec(function(err, movies) {
      if (err) return res.status(500).json({error: err.message});
      res.json({ movies: movies})
    });
  });

app.post('/movies', function(req, res) {
    if (req.body.title === '') return res.status(400).json({error: '电影标题不能为空！'});
    var movie = new Movie({title: 'yaoxiaoyu'});
    for (prop in req.body) {
      post[prop] = req.body[prop];
    }
    movie.save(function(err) {
      if (err) return res.status(500).json({error: err.message});
      res.json({
        message: '电影存储成功了！'
      });
    });
  });
//app.listen() 方法会创建一个 HTTP server 实例，用来监听来自本地 3000 端口的所有请求。
app.listen(3000, function(){
    console.log('你的服务器在3000端口裸奔！');
});
# learn-restful-API
## 1. 安装依赖
- 安装项目需要用到的依赖
```npm install```
- 下载并安装mongodb

## 2. 运行
- 开启mongodb服务(mac下brew安装的启动方式)
```brew services start mongodb```
- 进入mongo（查看数据库数据）
```mongo    ```

- 进入到js文件所在的目录,运行js文件
```node index.js```
或者``` nodemon index.js```  (这种方式可以打印出每个请求)
- 通过浏览器可以测试get请求，通过postman可以测试post和get
get:```http://localhost:3000/movies```
post:```http://localhost:3000/movies```(还需在body中填写参数)

## 3. 参考资料
mongoose 官方文档：http://www.nodeclass.com/api/mongoose.html


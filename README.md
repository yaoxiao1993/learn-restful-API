# learn-restful-API
## 1. 安装依赖
- 安装服务端框架，进入server目录下
```npm i express --save```
- 在api目录打开命令行窗口，执行：
```json-server db.json --port 3000```
- 到浏览器访问：localhost:3000/movies,看到数据说明mock数据构建成功,mock数据来源于db.json文件
- 在client文件夹安装： 
```npm i axios --save```

## 2. 运行
- 保持数据服务器开启，浏览器打开home.html(修改db.json里面的数据后要重启服务器才能生效）

## 3. 参考资料
https://github.com/typicode/json-server

//导入 mongoose 功能模块
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//调用 mongoose 提供的 Schema() 接口创建一个新的 schema，
//每个 schema 会映射为 MongoDB 数据库中的一个 collection （集合），
//一个collection类似于一个类，比如下面我们创建下面代码就创建了一个名为 MovieSchema 的 schema，
//并规定所映射的集合将包含五个字段：title, post, director, date, score,
//并且每个字段只能存储字符串类型的数据，其中 title 字段中存储的数据不能为空。

const MovieSchema = new Schema(
    {
        title:{type:String, required:true},
        post:{type:String},
        director:{type:String},
        date:{type:String},
        score:{type:String},
    },
    //选项 timestamps 的值设置为 true，则自动给所映射集合添加 createdAt 和 updatedAt 两个字段。
    {timestamps: true}
);

//虽然定义了一个 schema，但是 Mongoose 还不知道这个 schema 到底映射成数据库中哪个集合，
//所以还得把一个 schema 转换成一个 model
//这里传入的参数Movie，mongoose会自动将其跟名为 movies 的 collection 关联
module.exports = mongoose.model('Movie', MovieSchema);
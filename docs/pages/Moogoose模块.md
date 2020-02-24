### Moogoose 模块
#### Moogoose ODM 对象文档模型
- 下载mongoose
   
    ```
    npm i mongoose --save
    ```

- 引入mongoose
 
    ```
    const mongoose = require('mongoose');
    ```

- 连接数据库

    ```
    mongoose.connect("mongodb://127.0.0.1/my_test",{ useNewUrlParser: true })
    ```

- 数据库断开
   
    ```
    mongoose.disconnect();
    ```

- 创建模式结构

    ```
    var studentsSchema = mongoose.Schema({
        name: String,
        age: Number,
        gender: { // 0 为女 1为男
            type: Number,
            default: 0
        },
        address: String
    })
    ```

- 创建model集合(如果集合名字为单数，mongoose会自动添加变成复数)
    ```
    var StudentsModel = mongoose.model("student", studentsSchema);
    ```
- 创建数据 插入数据
    
    ```
    <modal>.create(
        doc[s], 
        [functions(err[错误], data[插入成功的数据]){}]
    )
    ```

    ```
    StudentsModel.create({
        name: '张三',
        age: 30,
        gender: 1,
        address: '北京'
    }, function(err) {
        if(!err) {
            console.log("数据创建成功！");
        }
    })
    ```
- 查询数据
    - find
        ```
        <modal>.find(
            conditions, // 查询条件 没有属性查所有
            projections, // 投影 需要获取或隐藏的字段 
                // 1. 对象{a: 1, b:0}; 
                // 2. 字符串 "a, -b"
            options, // 查询条件 limit skip sort
            callback // 回调函数
        )
        查询所有符合条件的文档，总会返回一个数组
        ```
    
        ```
        StudentsModel.find({
            age: {
                $lt: 25
            },
        }, "name -_id", {
            skip: 1,
            limit: 2,
            sort: {
                age: 1
            }
        }, function(err, docs) {
            if(!err) {
                console.log(docs)
            }
        })
        ```
    - findOne 查询返回的结果是一个文档
    - findById 通过ID查询，不需要ObjectId
- 修改数据
    - update
        ```
        <modal>.update(
            conditions, // 查询条件
            doc, // 替换的对象
            options, // 替换的选项 如multi
            callback // 替换的结果回掉
        )
        ```

        ```
        StudentsModel.update({
            name: '王五'
        }, {
            $set: {
                age: 99
            }
        }, function (err) {
            if(!err) {
                console.log("数据更新成功");
            }
        })
        ```
    - updateOne 只是替换一个
    - updateMany 替换多个
- 删除数据

    - remove
    - deleteOne
    - deleteMany
    
- 统计数量
    
    ```
    <modal>.countDocuments({}, function(err, count){})
    ```

    ```
    StudentsModel.countDocuments({}, function(err, data){
        if(!err) {
            console.log(data);
        }
    })
    ```
- 通过文档调用保存数据

    ```
    var StudentsModel = mongoose.model("student", studentsSchema);
    var Studetns = new StudentsModel({
        name: '韩梅梅',
        gender: 1,
        age: 29,
        address: '海口'
    })
    
    Studetns.save(function(err){
        if(!err) {
            console.log("数据插入成功");
        }
    })
    ```

- 直接修改数据直接保存

    ```
    StudentsModel.find({name: '王老五'}, function(err, docs) {
        if(err) return;
        docs[0].name = "王老六";
        docs[0].save();
    })
    ```
    ```
    StudentsModel.findOne({name: '王老六'}, function(err, doc) {
        if(err) return;
        doc.name = "王老八";
        doc.save();
    })
    ```
- 查询结果转对象 toObject()
    ```
    StudentsModel.findOne({name: '张三'}, function(err, doc) {
        if(err) return;
        doc = doc.toObject();
        delete doc.age;
        console.log(doc)
    })
    ```

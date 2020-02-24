### MongoDB 命令
#### 数据库基础操作命令
- 命令行输入mongo进入MongoDB命令交互模式进入

```
mongo
```

- 列出已有db

```
show dbs
```

- 如果my_db存在，则切换到my_db，如果不存在，则创建之

```
use my_db
```
- 显示当前db

```
db
```
- 创建集合my_col

```
db.createCollection("my_col");
```

- 列出改db下面所有的集合

```
show collections
```

```
show tables
```

- 删除集合my_col

```
db.my_col.drop()
```

- 删除当前数据库

```
db.dropDatabase();
```

### 数据库CURD操作命令

- 插入数据
    - 插入一条数据
    
    ```
    db.collections.insert({name: 'lisi'});
    db.collections.insertOne({name: '王梅梅2'});
    ```
    - 插入多条数据
    
    ```
    db.collections.insert([{name: '李白'}, {name: '杜甫'}])
    db.collections.insertMany([{name: '李白1'}, {name: '杜甫1'}]);
    ```
    
    - 保存数据也可以理解为插入
    
    ```
    db.collections.save([{name: '李白1'}, {name: '杜甫1'}]);
    ```
- 更新数据
    - 更新一条数据 
    
    ```
    db.collections.update({name: '李白1'}, {$set:{name: '岳帅'}});
    ```
    
    - 更新多条数据
    
    ```
    db.collections.update({age: 35}, {$set:{age: 36}}, {multi: true});
    ```
    
    - 使用保存数据全部替换
    
    ```
    db.collections.save({"_id" : ObjectId("5d0751ef41623d5db6cd4d44"), name: '李白'})
    ```
- 删除数据
    - 删除一条数据
    ```
    db.collections.deleteOne({name: '张三'});
    db.collections.remove({age: 36}, true);
    ```
    - 删除多条数据
    ```
    db.collections.deleteMany({age: 36});
    db.collections.remove({age: '20'});
    ```
- 查询
    ```
    db.collections.find();
    ```
    - 查询等于
    ```
    db.users.find({age: : 500});
    ```
    - 查询大于
    ```
    db.users.find({age: {$gt: 500}});
    ```
    - 查询大于等于
    ```
    db.users.find({age: {$gte: 500}});
    ```
    - 查询小于等于
    ```
    db.users.find({age: {$lte: 500}});
    ```
    - 查询小于
    ```
    db.users.find({age: {$lt: 500}});
    ```
    - 查询小于大的，大于小的（如大于10小于20）
    ```
    db.users.find({age: {$gt: 20, $lt: 30}});
    ```
    - 查询条数
    ```
    db.users.find().limit(10);
    ```
    - 跳过指定数量
    ```
    db.user.find().skip(10).limit(10);
    ```
- 删除文档中的一个属性

```
db.update({name: '张三'}, {$unset:{age: 1}})
```
- 内嵌文档
    - 插入
    ```
    db.user.update(
        {name: '李四'}, 
        {
            $set: {
                hobby: {
                    cities: ['北京', '南京'],
                    movies: ['哪吒']
                }
            }
        }
    )
    ```
    - 查询
    ```
    db.user.find({"hobby.movies": '哪吒'});
    ```
    - 向内嵌文档的数组中添加
    ```
    *会重复添加*
    db.user.update(
        {name: '张三'}, 
        {
            $push: {
                'hobby.movies': '哪吒'
            }
        }
    )
    *不会重复添加*
    db.user.update(
        {name: '张三'}, 
        {
            $addToSet: {
                'hobby.movies': '哪吒'
            }
        }
    )
    ```
    - 删除
    ```
    db.user.remove({'hobby.cities': '北京'})
    ```
- 获取文档的属性值
```
db.users.findOne({name: '杜甫'})._id;
```
```
db.users.find({name: '杜甫'})[0]._id;
```
- 获取 或 数据
```
db.emp.find({$or: [
    {"sal": {$lte: 1000}},
    {"sal": {$gte: 2500}}
]});
```
- 改变整个数据类型

    ```
    db.emp.find({mgr: {$type: 2}}).forEach(
        function(doc) {
            db.emp.update({'_id':doc._id}, {$set:{'mgr': parseInt(doc.mgr)}});
        }
    );
    ```
    - 1 Double 浮点型 
    - 2 String UTF-8字符串都可表示为字符串类型的数据 
    - 3 Object 对象，嵌套另外的文档 
    - 4 Array 值的集合或者列表可以表示成数组 
    - 5 Binary data 二进制 
    - 7 Object id 对象id是文档的12字节的唯一 ID 系统默认会自动生成 
    - 8 Boolean 布尔类型有两个值TRUE和FALSE 
    - 9 Date 日期类型存储的是从标准纪元开始的毫秒数。不存储时区 
    - 10 Null 用于表示空值或者不存在的字段 
    - 11 Regular expression 采用js 的正则表达式语法 
    - 13 JavaScript code 可以存放Javasript 代码 
    - 14 Symbol 符号 
    - 15 JavaScript code with scope 
    - 16 32-bit integer 32位整数类型 
    - 17 Timestamp 特殊语义的时间戳数据类型 
    - 18 64-bit integer 64位整数类型
- $inc 进行增减的操作
    ```
    db.emp.updateMany({sal: {$lt: 1000}}, {$inc: {sal: 400}});
    ```
- sort 可以以任意的顺序排序
    - 倒序
    ```
    db.emp.find().sort({sal: -1});
    ```
    - 正序
    ```
    db.emp.find().sort({sal: 1});
    ```
    - 多条件排序
    ```
    db.emp.find().sort({sal: 1, empo: -1});
    ```
- 映射
    显示为1，不显示为0
    ```
    db.emp.find({}, {ename: 1, _id: 0});
    ```
- 导出集合

```
mongoexport -d change_log<数据库名> -c projects<集合名> -o d:/projects.json<路径> --type json

mongoexport -d change_log -c projects -o d:/projects.json --type json
```

- 导入文件

```
mongoimport -d dbname -c colname --file path(路径)/文件名.json --type json
```


(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{211:function(n,e,t){"use strict";t.r(e);var a=t(28),o=Object(a.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h3",{attrs:{id:"mongodb-基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-基础"}},[n._v("#")]),n._v(" MongoDB 基础")]),n._v(" "),t("h4",{attrs:{id:"_1-mongodb-简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-mongodb-简介"}},[n._v("#")]),n._v(" 1 MongoDB 简介")]),n._v(" "),t("blockquote",[t("p",[n._v("MongoDB 是一种NoSQL 数据库，存储的数据对象由键值对组成。MongoDB 所有存储在集合中的数据都是 BSON 格式。BSON 是一种类似 JSON 的二进制形式的存储格式，是 Binary JSON 的简称。如下所示：")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('{\n    "_id" : ObjectId("5c89f787ca6e4e3ac1ecabkk"),\n    "_plat" : "test_plat0",\n    "update_time" : ISODate("2019-06-03T15:00:42.142Z"),\n    "create_time" : ISODate("2019-03-14T14:41:11.217Z"),\n    "creator" : "test_user",\n    "admin" : [ \n        "admin1", \n        "admin2"\n    ],$or\n    "ops" : [ \n        "ops1"\n    ],\n    "labels" : {\n        "department" : "departmentA",\n        "main_class" : "mainClassA"\n    }\n}\n')])])]),t("p",[n._v("下面对照关系型数据库介绍一些 MongoDB 里面的基本概念：")]),n._v(" "),t("table",[t("thead",[t("tr",[t("th",[n._v("关系数据库术语")]),n._v(" "),t("th",[n._v("MongoDB术语")]),n._v(" "),t("th",[n._v("说明")])])]),n._v(" "),t("tbody",[t("tr",[t("td",[n._v("database")]),n._v(" "),t("td",[n._v("database")]),n._v(" "),t("td",[n._v("数据库")])]),n._v(" "),t("tr",[t("td",[n._v("table")]),n._v(" "),t("td",[n._v("collection")]),n._v(" "),t("td",[n._v("数据库表/集合")])]),n._v(" "),t("tr",[t("td",[n._v("row")]),n._v(" "),t("td",[n._v("document")]),n._v(" "),t("td",[n._v("记录行/文档")])]),n._v(" "),t("tr",[t("td",[n._v("column")]),n._v(" "),t("td",[n._v("field")]),n._v(" "),t("td",[n._v("数据字段/域")])]),n._v(" "),t("tr",[t("td",[n._v("index")]),n._v(" "),t("td",[n._v("index")]),n._v(" "),t("td",[n._v("索引")])]),n._v(" "),t("tr",[t("td",[n._v("primary key")]),n._v(" "),t("td",[n._v("primary key")]),n._v(" "),t("td",[n._v("主键，Mongodb自动将_id字段设置为主键")])])])]),n._v(" "),t("p",[n._v("通过以下对比可以更理解 MongoDB ：")]),n._v(" "),t("table",[t("thead",[t("tr",[t("th",[n._v("id")]),n._v(" "),t("th",[n._v("姓名")]),n._v(" "),t("th",[n._v("年龄")]),n._v(" "),t("th",[n._v("性别")])])]),n._v(" "),t("tbody",[t("tr",[t("td",[n._v("1")]),n._v(" "),t("td",[n._v("张三")]),n._v(" "),t("td",[n._v("23")]),n._v(" "),t("td",[n._v("男")])]),n._v(" "),t("tr",[t("td",[n._v("2")]),n._v(" "),t("td",[n._v("李四")]),n._v(" "),t("td",[n._v("21")]),n._v(" "),t("td",[n._v("男")])])])]),n._v(" "),t("p",[n._v("上述关系型数据在 MongoDB 中的数据形式为：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('{\n    "_id" : ObjectId("5c89f787ca6e4e3ac1ehhb23"),\n    "姓名" : "张三",\n    "年龄" : 23,\n    "性别" : "男"\n}\n{\n    "_id" : ObjectId("5c89f787ca6e4e3ac1ehhb24"),\n    "姓名" : "李四",\n    "年龄" : 21,\n    "性别" : "男"\n}\n')])])]),t("h4",{attrs:{id:"_2-mongodb-基本操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-mongodb-基本操作"}},[n._v("#")]),n._v(" 2 MongoDB 基本操作")]),n._v(" "),t("blockquote",[t("p",[n._v("本节主要介绍通过命令行操作 MongoDB，以 MongoDB 安装在 CentOS 上为例进行说明。")])]),n._v(" "),t("h5",{attrs:{id:"_2-1-db、集合等基本操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-db、集合等基本操作"}},[n._v("#")]),n._v(" 2.1 db、集合等基本操作")]),n._v(" "),t("p",[n._v("DB 的查看、创建、删除，集合的查看、创建、删除等操作方式如下：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('[root] mongo          #命令行输入mongo进入MongoDB命令交互模式\n> show dbs            #列出已有db\n> use my_db           #如果my_db存在，则切换到my_db，如果不存在，则创建之\n> db                  #显示当前db\n> show dbs            #发现列表里面没有my_db，因为此时db里面没有实际数据或者集合哦\n> db.createCollection("my_col")  #创建集合my_col\n> db.my_col_new.insert({"name":"测试一下"})  #往集合my_col_new里面插入一条数据，如果集合不存在，会自动创建\n> show collections    #列出改db下面所有的集合\n> show tables         #功能跟show collections是一样的哦\n> db.my_col.drop()    #删除集合my_col\n> db.dropDatabase()   #删除当前数据库，执行之前用db命令确认一下当前数据库是不是你要删除的这个哦\n')])])]),t("h5",{attrs:{id:"_2-2-数据插入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-数据插入"}},[n._v("#")]),n._v(" 2.2 数据插入")]),n._v(" "),t("p",[n._v("插入数据有4种方法：insert、insertOne、insertMany、save，下面通过例子详细介绍。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('> db.my_col.insert({"name":"xiaoming"})  #insert可以插入一条数据\n> db.my_col.insert([{"name":"xiaoming"},{"name":"test_user"}])  #insert也可以插入多条数据\n> db.my_col.insertOne({"name":"xiaoming"})  #insertOne只能插入一条数据\n> db.my_col.insertMany([{"name":"xiaoming"}])  #insertMany可以插入一条或多条数据，但是必须以列表(list)的形式组织数据\n> db.my_col.save([{"name":"xiaoming"},{"name":"test_user"}])  #如果不指定_id，save的功能与insert一样\n> db.my_col.save({"_id":ObjectId("5d07461141623d5db6cd4d43"),"name":"xiaoming"})   #如果指定_id，mongodb就不为该条记录自动生成_id了，只有save可以指定_id，insert、insertOne、insertMany都不可以\n')])])]),t("h5",{attrs:{id:"_2-3-数据修改"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-数据修改"}},[n._v("#")]),n._v(" 2.3 数据修改")]),n._v(" "),t("p",[n._v("修改数据有2种方法：update、save，下面详细介绍。")]),n._v(" "),t("ul",[t("li",[n._v("2.3.1 update")])]),n._v(" "),t("blockquote",[t("p",[n._v("首先，看一下 update 的语法格式，请格外注意一些可选参数的值，这将直接影响你的修改结果：")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v('```\ndb.collection.update(\n   <query>,   #update的查询条件，类似sql update语句where后面的部分\n   <update>,  #update的对象和一些更新的操作符等，也可以理解为sql update语句set后面的\n   {\n     upsert: <boolean>,  #可选，这个参数的意思是，如果不存在update的记录，是否插入objNew，true为插入，默认是false，不插入\n     multi: <boolean>,   #可选，mongodb 默认是false，只更新找到的第一条记录，如果这个参数为true，就把按条件查出来多条记录全部更新\n     writeConcern: <document>  #可选，抛出异常的级别\n   }\n)\n```\n假设有这样一张学生成绩表：\n\n```\n> db.my_col.insert([{"name":"xiaoming","class":"c++", "score":60},{"name":"xiaoming","class":"python", "score":95}])\n> db.my_col.find().pretty()\n{\n        "_id" : ObjectId("5d0751ef41623d5db6cd4d44"),\n        "name" : "xiaoming",\n        "class" : "c++",\n        "score" : 60\n}\n{\n        "_id" : ObjectId("5d0751ef41623d5db6cd4d46"),\n        "name" : "xiaoming",\n        "class" : "python",\n        "score" : 95\n}\n```\nxiaoming 同学发现老师把她的 c++ 课程分数录错了，需要修改为75分：\n\n```\n> db.my_col.update({"_id":ObjectId("5d0751ef41623d5db6cd4d44")},{$set:{"score":75}})\n```\n老师发现把 xiaoming 同学的名字录错了，需要全部修改过来：\n\n```\n> db.my_col.update({"name":"xiaoming"},{$set:{"name":"xming"}}) #这样是不对的，只会修改一条记录\n> db.my_col.update({"name":"xiaoming"},{$set:{"name":"xming"}},{multi:true})  #这样才对\n```\n将 xming 的 java 课程分数改为95分，如果找不到，就插入一条记录\n```\n> db.my_col.update({"name":"xming", "class": "java"},{$set:{"score": 95}},true)\n```\n')])])]),t("ul",[t("li",[n._v("2.3.2 save")])]),n._v(" "),t("blockquote",[t("p",[n._v("save 方法通过传入的文档来替换已有文档。语法格式如下：")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("db.collection.save(\n   <document>,   #文档数据\n   {\n     writeConcern: <document> #可选，抛出的异常级别\n   }\n)\n")])])]),t("p",[n._v("还以上面那张学生成绩表为例：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('> db.my_col.save({\n         "_id" : ObjectId("5d0751ef41623d5db6cd4d44"), #指定_id，新的文档会将旧的文档覆盖\n         "name" : "xming",\n         "class" : "c++",\n         "score" : 80\n})\n')])])]),t("h5",{attrs:{id:"_2-4-数据删除"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-数据删除"}},[n._v("#")]),n._v(" 2.4 数据删除")]),n._v(" "),t("blockquote",[t("p",[n._v("数据删除可以使用 deleteOne、deleteMany、remove，下面详细介绍。")])]),n._v(" "),t("ul",[t("li",[n._v("2.4.1 deleteOne 和 deleteMany\n使用方法如下：")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('> db.my_col.deleteOne({"name":"xming"})  #删除xming的一条成绩记录\n> db.my_col.deleteMany({"name":"xming"}) #删除xming的所有成绩记录\n> db.my_col.deleteMany({})  #删除成绩表里面的所有内容\n')])])]),t("ul",[t("li",[n._v("2.4.2 remove\n首先还是来看语法格式：")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("db.collection.remove(\n   <query>,    #可选，查询条件\n   {\n     justOne: <boolean>,  #可选，设置为true或者1，表示只删除一个文档，设置为false，表示删除所有匹配的文档，默认为false\n     writeConcern: <document> #可选，抛出异常的级别\n   }\n)\n")])])]),t("p",[n._v("删除 xming 的所有成绩记录：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('> db.col.remove({"name":"xming"})\n> db.repairDatabase()  #remove方法并不会真正释放空间，需要继续执行 db.repairDatabase() 来回收磁盘空间\n> db.runCommand({ repairDatabase: 1 }) #与上一句等效，仍以执行一句即可\n')])])]),t("p",[n._v("ps：remove 现在已经过时了现在官方推荐使用 deleteOne 和 deleteMany 方法。")]),n._v(" "),t("h5",{attrs:{id:"_2-5-数据查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-数据查询"}},[n._v("#")]),n._v(" 2.5 数据查询")]),n._v(" "),t("blockquote",[t("p",[n._v("数据查询的方法有 findOne 和 find，二者参数等用法一样，但是 findOne 只返回一条匹配的数据，find 返回全部的匹配数据，下面主要介绍 find 的用法。")])]),n._v(" "),t("ul",[t("li",[n._v("2.5.1 条件操作符\n操作 sql查询写法 mongo查询写法")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('等于 select * from my_col where score = 75; db.my_col.find({"score": 75}).pretty()\n小于 select * from my_col where score < 75; db.my_col.find({"score": {$lt: 75}}).pretty()\n小于等于 select * from my_col where score <= 75; db.my_col.find({"score": {$lte: 75}}).pretty()\n大于 select * from my_col where score > 75; db.my_col.find({"score": {$gt: 75}}).pretty()\n大于等于 select * from my_col where score >= 75; db.my_col.find({"score": {$gte: 75}}).pretty()\n不等于 select * from my_col where score != 75; db.my_col.find({"score": {$ne: 75}}).pretty()\n')])])]),t("p",[n._v("ps：pretty 能让查询结果以格式化的 json 形式打印出来，便于查看")]),n._v(" "),t("ul",[t("li",[n._v("2.5.2 排序、limit 与 skip\n以分数从高到低显示学生的 c++ 课程成绩，只显示第10名到第20名的学生：")])]),n._v(" "),t("blockquote",[t("p",[n._v('db.my_col.find({"class": "c++"}).sort({"score": -1}).skip(9).limit(11).pretty()\n#sort：1为升序，-1为降序，默认升序\n#limit：显示多少条数据\n#skip：跳过多少条数据')])]),n._v(" "),t("ul",[t("li",[n._v("2.5.3 复合条件查询 and、or\nand：find 方法可以传入多个键值对，每个键值对以逗号隔开，即常规 SQL 的 AND 条件\n查询 xiaoming 同学的 c++ 课程成绩：")])]),n._v(" "),t("blockquote",[t("p",[n._v('db.my_col.find({"name": "xiaoming", "class": "c++"}).pretty()\n查询分数在75到85分之间的成绩记录：\ndb.my_col.find({"score": {$gt: 75, $lt: 85}}).pretty()')])]),n._v(" "),t("p",[n._v("or：MongoDB OR 条件语句使用了关键字 $or，语法格式如下：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("> db.col.find(\n   {\n      $or: [\n         {key1: value1}, {key2:value2}\n      ]\n   }\n).pretty()\n")])])]),t("p",[n._v("查询 xiaoming 或 zhangsan 的课程成绩：")]),n._v(" "),t("blockquote",[t("p",[n._v('db.my_col.find({$or: [{"name": "xiaoming"}, {"name": "zhangsan"}]}).pretty()')])]),n._v(" "),t("p",[n._v("and + or 复合查询：\n查询 xiaoming 的 c++ 或者 python 课程的成绩：")]),n._v(" "),t("blockquote",[t("p",[n._v('db.my_col.find({"name": "xiaoming", $or: [{"class": "c++"}, {"class": "python"}]}).pretty()')])]),n._v(" "),t("ul",[t("li",[n._v("2.5.4 包含in、不包含nin、全部all\n查询 xiaoming、zhangsan 和 lisa 的成绩：")])]),n._v(" "),t("blockquote",[t("p",[n._v('db.my_col.find({"name": {$in: ["xiaoming","zhangsan","lisa"]}}).pretty()')])]),n._v(" "),t("p",[n._v("查询除了 xiaoming、zhangsan 和 lisa 之外，其他人的成绩：")]),n._v(" "),t("blockquote",[t("p",[n._v('db.my_col.find({"name": {$nin: ["xiaoming","zhangsan","lisa"]}}).pretty()')])]),n._v(" "),t("p",[n._v("in和nin比较好理解，跟sql的用法类似，all类似于in，不同的地方是，in只需要满足列表中的一个值即可，而all需要满足列表中的全部值。比如，有下面这样一张课程表，表示每个学生修的课程：")]),n._v(" "),t("blockquote",[t("p",[n._v("db.course.find().pretty()")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('{\n        "_id" : ObjectId("5d084f1541623d5db6cd4d4c"),\n        "name" : "xiaoming",\n        "course" : [\n                "c++",\n                "python",\n                "java"\n        ]\n}\n{\n        "_id" : ObjectId("5d084f1c41623d5db6cd4d4d"),\n        "name" : "lisa",\n        "course" : [\n                "c++",\n                "python",\n                "java"\n        ]\n}\n{\n        "_id" : ObjectId("5d084f4a41623d5db6cd4d4e"),\n        "name" : "tom",\n        "course" : [\n                "c++",\n                "python"\n        ]\n}\n')])])]),t("p",[n._v("需要找出修了 c++ 和 java课程的学生：")]),n._v(" "),t("blockquote",[t("p",[n._v('db.course.find({"course": {$all: ["c++", "java"]}}).pretty() # 用 all 操作符，表示需要满足 c++ 和 java 两项')])]),n._v(" "),t("ul",[t("li",[n._v("2.5.5 判断字段是否存在 exists\n比如，有下面一张表，表示学生信息：")])]),n._v(" "),t("blockquote",[t("p",[n._v('db.stu_info.find().pretty()\n{\n"_id" : ObjectId("5d08519a41623d5db6cd4d4f"),\n"name" : "xiaoming",\n"tel" : "138xxxxxxxx"\n}\n{\n"_id" : ObjectId("5d08531641623d5db6cd4d50"),\n"name" : "lisa"\n}\n{\n"_id" : ObjectId("5d08542e41623d5db6cd4d51"),\n"name" : "tom",\n"tel" : null\n}')])]),n._v(" "),t("p",[n._v("需要找出没有 tel 字段的学生：")]),n._v(" "),t("blockquote",[t("p",[n._v('db.stu_info.find({"tel": {$exists: false}}).pretty() #字段不存在就用false，存在就用true')])]),n._v(" "),t("ul",[t("li",[n._v("2.5.6 空值处理 null\n以上面的学生信息表为例，找出 tel 为空值的学生：")])]),n._v(" "),t("blockquote",[t("p",[n._v('db.stu_info.find({"tel": null}).pretty()')])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('{\n        "_id" : ObjectId("5d08531641623d5db6cd4d50"),\n        "name" : "lisa"\n}\n{\n        "_id" : ObjectId("5d08542e41623d5db6cd4d51"),\n        "name" : "tom",\n        "tel" : null\n}\n')])])]),t("p",[n._v("这时候把 tel 字段不存在和 tel 值为 null 的情况都查出来了！如果只想找 tel 值为 null 的情况：")]),n._v(" "),t("blockquote",[t("p",[n._v('db.stu_info.find({"tel": {$in:[null], $exists:true}}).pretty()')])]),n._v(" "),t("ul",[t("li",[n._v("2.5.7 取模运算 mod\n比如，查找学生成绩取模10 等于0 的数据（即100、90、80...等等）：")])]),n._v(" "),t("blockquote",[t("p",[n._v('db.my_col.find({"score": {$mod: [10, 0]}}).pretty()')])]),n._v(" "),t("ul",[t("li",[n._v("2.5.8 正则匹配 regex\n查询学生名字以a开头的学生成绩：")])]),n._v(" "),t("blockquote",[t("p",[n._v('db.my_col.find({"name": {$regex: /^a.*/}})')])]),n._v(" "),t("ul",[t("li",[n._v("2.5.9 获取查询结果条数 count\n获取学生成绩记录的条数：")])]),n._v(" "),t("blockquote",[t("p",[n._v("db.my_col.find().count()")])]),n._v(" "),t("p",[n._v("当使用 limit 方法限制返回的记录数时，默认情况下 count 方法仍然返回全部记录条数。如果希望返回限制之后的记录数量，要使用 count(true) 或者 count(非0)：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("> db.my_col.find().count()\n4\n> db.my_col.find().limit(1).count()\n4\n> db.my_col.find().limit(1).count(true)\n1\n")])])]),t("ul",[t("li",[n._v("2.5.10 distinct\n查询课程成绩表中所有学生的名单：")])]),n._v(" "),t("blockquote",[t("p",[n._v('db.my_col.distinct("name")')])]),n._v(" "),t("h5",{attrs:{id:"_2-6-聚合aggregate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-聚合aggregate"}},[n._v("#")]),n._v(" 2.6 聚合aggregate")]),n._v(" "),t("blockquote",[t("p",[n._v("在MongoDB中，使用聚合框架可以对集合中的文档进行变换和组合，完成一些复杂的查询操作。聚合框架通过多个构件来创建一个管道(pipeline)，用于对一连串的文档进行处理。这些构件包括但不限于：")])]),n._v(" "),t("table",[t("thead",[t("tr",[t("th",[n._v("操作符")]),n._v(" "),t("th",[n._v("意义")])])]),n._v(" "),t("tbody",[t("tr",[t("td",[n._v("$match")]),n._v(" "),t("td",[n._v("筛选")])]),n._v(" "),t("tr",[t("td",[n._v("$project")]),n._v(" "),t("td",[n._v("投射，选择想要的字段或对字段进行重命名")])]),n._v(" "),t("tr",[t("td",[n._v("$group")]),n._v(" "),t("td",[n._v("分组")])]),n._v(" "),t("tr",[t("td",[n._v("$unwind")]),n._v(" "),t("td",[n._v("拆分")])]),n._v(" "),t("tr",[t("td",[n._v("$sort")]),n._v(" "),t("td",[n._v("排序")])]),n._v(" "),t("tr",[t("td",[n._v("$limit")]),n._v(" "),t("td",[n._v("限制查询条数")])]),n._v(" "),t("tr",[t("td",[n._v("$skip")]),n._v(" "),t("td",[n._v("跳过一些条数")])])])]),n._v(" "),t("p",[n._v("当需要使用多个操作符来完成文档的聚合时，我们可以传入一个数组条件，这也是aggregate的常见用法：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('> db.my_col.aggregate([\n        {$match: {"name": "xiaoming"}},   #查找 xiaoming 同学的课程成绩\n        {$project: {"_id":  0}},   #不需要_id字段\n        {$sort: {"score":  -1, "class": 1}},  #按分数降序排序；同样分数的，按课程名字升序排序\n        {$skip: 1},    #跳过一条数据\n        {$limit: 1}    #只显示一条数据\n])\n')])])]),t("blockquote",[t("p",[n._v('$match用于对文档集合进行筛选，之后就可以在筛选得到的文档子集上做聚合。"$match"可以使用所有常规的查询操作符("$gt"、"$lt"、"$in"等)。通常，在实际使用中应该尽可能将"$match"放在管道的前面位置。这样做有两个好处：一是可以快速将不需要的文档过滤掉，以减少管道的工作量；二是如果在投射和分组之前执行"$match"，查询可以使用索引。')])]),n._v(" "),t("blockquote",[t("p",[n._v("$project可以从子文档中提取字段，可以重命名字段。例如，查找学生课程成绩，不显示 _id 字段，显示姓名、课程、成绩字段，同时将 name 字段重命名为 student_name：")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('> db.my_col.aggregate([\n        {$project: {"_id": 0, "student_name": "$name", "core": 1, "class": 1}}\n])\n')])])]),t("p",[n._v("$sort、$skip、$limit 的用法比较好理解，就不多做说明。\n$group 类似于 sql 中的 group by，主要用于数据处理，比如，计算每个学生的总课程成绩：")]),n._v(" "),t("blockquote",[t("p",[n._v('db.my_col.aggregate([\n{$group: {_id: "$name",  total: {$sum: "$score"}}}\n])')])]),n._v(" "),t("p",[n._v("$sum 可以 替换成操作符 $avg、$min、$max，分别表示求平均成绩、最低成绩、最高成绩。\n$unwind 可以将数组中的每一个值拆分为单独的文档，比如有下面一条记录，记录了一篇博客以及下面的评论：")]),n._v(" "),t("blockquote",[t("p",[n._v('db.blog.findOne().pretty()\n{\n"_id":ObjectId("5359f6f6ec7452081a7873d7"),\n"title":"这是一篇博客",\n"auth":"xiaoming",\n"comments":[\n{\n"author":"lisa",\n"date":ISODate("2019-01-01T17:52:04.148Z"),\n"text":"Nice post"\n},\n{\n"author":"tom",\n"date":ISODate("2019-01-01T17:52:04.148Z"),\n"text":"I agree"\n}\n]\n}')])]),n._v(" "),t("p",[n._v("现在要找到 lisa 的评论，可以先使用 $unwind 将每条评论拆分为一个独立的文档，然后再进行 match 查询：")]),n._v(" "),t("blockquote",[t("p",[n._v('db.blog.aggregate({"$unwind":"$comments"})\n{\n"results":\n{\n"_id":ObjectId("5359f6f6ec7452081a7873d7"),\n"title":"这是一篇博客",\n"author":"xiaoming",\n"comments":{\n"author":"lisa",\n"date":ISODate("2019-01-01T17:52:04.148Z"),\n"text":"Nice post"\n}\n},\n{\n"_id":ObjectId("5359f6f6ec7452081a7873d7"),\n"title":"这是一篇博客",\n"author":"xiaoming",\n"comments":{\n"author":"tom",\n"date":ISODate("2019-01-01T17:52:04.148Z"),\n"text":"I agree"\n}\n}\n}')])]),n._v(" "),t("blockquote",[t("p",[n._v('db.blog.aggregate([\n{"$unwind":"$comments"},\n{"$match":{"comments.author":"lisa"}}\n])')])]),n._v(" "),t("h5",{attrs:{id:"_2-7-索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-索引"}},[n._v("#")]),n._v(" 2.7 索引")]),n._v(" "),t("blockquote",[t("p",[n._v("索引通常能够极大的提高查询的效率，如果没有索引，MongoDB在读取数据时必须扫描集合中的每个文件并选取那些符合查询条件的记录。这种扫描全集合的查询效率是非常低的，特别在处理大量的数据时，查询可以要花费几十秒甚至几分钟，这对网站的性能是非常致命的。索引是特殊的数据结构，索引存储在一个易于遍历读取的数据集合中，索引是对数据库表中一列或多列的值进行排序的一种结构。\n创建索引的基本语法如下：")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("db.collection.createIndex(\n    {key1: option1, key2: option2},    #key为要创建索引的字段，option为创建索引的方式：1 为升序，-1 为降序，可以对多个字段创建索引，称为复合索引\n    {\n        background: <boolean>,  #可选，建索引过程会阻塞其它数据库操作，background 设置为 true 可指定以后台方式创建索引，默认值为 false\n        unique: <boolean> #可选，建立的索引是否唯一。指定为true创建唯一索引。默认值为false\n        name: <string> #可选，索引的名称。如果未指定，MongoDB的通过连接索引的字段名和排序顺序生成一个索引名称\n        sparse: <boolean> #可选，对文档中不存在的字段数据不启用索引；这个参数需要特别注意，如果设置为true的话，在索引字段中不会查询出不包含对应字段的文档。默认值为 false\n    }\n)\n")])])]),t("p",[n._v("对学生成绩表创建索引：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('> db.my_col.createIndex({"score": 1}, {background: true})  #在后台创建\n> db.my_col.getIndexes()   #查看集合索引\n> db.my_col.totalIndexSize()  #查看集合索引大小\n> db.my_col.dropIndex("索引名称")  #删除集合指定索引\n> db.my_col.dropIndexes()  #删除集合所有索引\n')])])]),t("h4",{attrs:{id:"_3-可视化工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-可视化工具"}},[n._v("#")]),n._v(" 3 可视化工具")]),n._v(" "),t("p",[n._v("MongoDB有一款跨平台的可视化工具Robo 3T，非常简洁易用。\n下载安装地址：https://robomongo.org/download")]),n._v(" "),t("h4",{attrs:{id:"_4-参考文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-参考文档"}},[n._v("#")]),n._v(" 4 参考文档")]),n._v(" "),t("ul",[t("li",[n._v("MongoDB菜鸟教程：https://www.runoob.com/mongodb/mongodb-tutorial.html")]),n._v(" "),t("li",[n._v("MongoDB高级查询：http://cw.hubwiz.com/card/c/543b2f3cf86387171814c026/1/1/1/")]),n._v(" "),t("li",[n._v("MongoDB聚合：http://cw.hubwiz.com/card/c/548125a5f8638718f0db0792/1/1/1/")]),n._v(" "),t("li",[n._v("MongoDB官方文档：https://docs.mongodb.com/manual/introduction/")]),n._v(" "),t("li",[n._v("Robo 3T 使用教程：https://www.cnblogs.com/tugenhua0707/p/9250673.html> MongoDB 是一种NoSQL 数据库，本文主要介绍MongoDB里面的一些基本概念和操作、以及可视化工具的安装和使用。")])])])}),[],!1,null,null,null);e.default=o.exports}}]);
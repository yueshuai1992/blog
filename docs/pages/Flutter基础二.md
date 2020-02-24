### Flutter 基础（二） 
#### 1.Row
不灵水平布局

```
body: new Row(
  children: <Widget>[
    new RaisedButton(
      onPressed: (){},
      color: Colors.blueAccent,
      child: new Text('蓝色按钮'),
    ),
    new RaisedButton(
      onPressed: (){},
      color: Colors.redAccent,
      child: new Text('红色按钮'),
    ),
    new RaisedButton(
      onPressed: (){
        print('2424242');
      },
      color: Colors.greenAccent,
      child: new Text('绿色按钮'),
    )
  ],
),
```

灵活水平布局

```
Expanded (
  child: new RaisedButton(
    onPressed: (){},
    color: Colors.redAccent,
    child: new Text('红色按钮'),
  )
),
```


#### 2.Column
- main轴：如果你用column组件，那垂直就是主轴，如果你用Row组件，那水平就是主轴。
- cross轴：cross轴我们称为幅轴，是和主轴垂直的方向。比如Row组件，那垂直就是幅轴，Column组件的幅轴就是水平方向的。

```
body: Container(
  child: new Column(
    crossAxisAlignment: CrossAxisAlignment.center,
    mainAxisAlignment: MainAxisAlignment.center,
    children: <Widget>[
      new Text('这是第一行字！这是第一行字！这是第一行字！'),
      new Text('这是第二行字！'),
      new Text('这是第三行字！这是第三行字！这是第三行字！这是第三行字！')
    ],
  )
),
```

- CrossAxisAlignment.star：居左对齐。
- CrossAxisAlignment.end：居右对齐。
- CrossAxisAlignment.center：居中对齐。
#### 3.Stack层叠布局
层叠布局的 alignment 属性
- alignment属性是控制层叠的位置的，建议在两个内容进行层叠时使用。它有两个值X轴距离和Y轴距离，值是从0到1的，都是从上层容器的左上角开始算起的
- CircleAvatar组件的使用
- CircleAvatar这个经常用来作头像的，组件里边有个radius的值可以设置图片的弧度。
现在我们准备放入一个图像，然后把弧度设置成100，形成一个漂亮的圆形，代码如下：

```
new CircleAvatar(
  backgroundImage: new NetworkImage('http://jspang.com/static//myimg/blogtouxiang.jpg'),
  radius: 100.0,
),

var stack = new Stack(
  alignment: const FractionalOffset(0.5, 0.8),
  children: <Widget>[
    new CircleAvatar(
      backgroundImage: new NetworkImage('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551696714&di=3592e7cc2af8337ba2c1c7427090491f&imgtype=jpg&er=1&src=http%3A%2F%2Fdata.whicdn.com%2Fimages%2F48087360%2Flarge.png'),
      radius: 100.0,
    ),
    new Container(
      decoration: new BoxDecoration(
        color: Color.fromARGB(100, 255, 200, 100)
      ),
      child: new Text(
        '好漂亮哦！', 
        textAlign: TextAlign.center,
      ),
      padding: new EdgeInsets.all(10.0)
    )
  ],
);
```


#### 4.Positioned组件的属性
- bottom: 距离层叠组件下边的距离
- left：距离层叠组件左边的距离
- top：距离层叠组件上边的距离
- right：距离层叠组件右边的距离
- width: 层叠定位组件的宽度
- height: 层叠定位组件的高度

#### 5.卡片组件布局

```
var card = new Card(
  child: new Column(
    children: <Widget>[
      ListTile(
        title: Text(
          '北京大学', 
          style: TextStyle(
            fontWeight: FontWeight.w500
          ),
        ),
        subtitle: Text('北京市海淀区'),
        leading: new Icon(
          Icons.account_balance,
          color: Colors.blueAccent
        ),
      ),
    ],
  )
);
```


#### 6.导航和返回

```
import 'package:flutter/material.dart';

void main() {
  runApp(
    MaterialApp(
      title: "导航",
      home: new FirstScreen(),
    )
  );
}

class FirstScreen extends StatelessWidget {
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: new Text('主页'),
      ),
      body: Center(
        child: RaisedButton(
          onPressed: (){
            Navigator.push(context, new MaterialPageRoute(
              builder: (context)=>new SecondScreen()
            ));
          },
          child: Text('详情页'),
        ),
      ),
    );
  }
}

class SecondScreen extends StatelessWidget {
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: new Text('详情页')),
      body: Center(
        child: RaisedButton(
          onPressed: (){
            Navigator.pop(context);
          },
          child: new Text('返回'),
        ),
      ),
    );
  }
}
```


RaisedButton按钮组件
它有两个最基本的属性：
- child：可以放入容器，图标，文字。让你构建多彩的按钮。
- onPressed：点击事件的相应，一般会调用Navigator组件。

我们在作页面导航时，大量的使用了RaisedButton组件，这个组件的使用在实际工作中用的也比较多。

Navigator.push 和 Navigator.pop

- Navigator.push：是跳转到下一个页面，它要接受两个参数一个是上下文context，另一个是要跳转的函数。
- Navigator.pop：是返回到上一个页面，使用时传递一个context（上下文）参数，使用时要注意的是，你必须是有上级页面的，也就是说上级页面使用了Navigator.push。

```
import 'package:flutter/material.dart';
class Product {
  final String title;
  final String description;
  Product(this.title, this.description);
}
void main() {
  runApp(
    MaterialApp(
      title: '商品列表',
      home: Home(
        products: List.generate(
          100, 
          (i)=> Product('商品$i','这是一个商品详情，编号为:$i')
        )
      )
    )
  );
}
class Home extends StatelessWidget {
  final  List<Product> products;
  Home({Key key, this.products}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: new Text('列表'),
      ),
      body: ListView.builder(
        itemCount: products.length,
        itemBuilder: (context, index){
          return ListTile(title: Text(products[index].title+'  '+products[index].description),);
        },
      ),
    );
  }
}
```


#### 7. 导航参数的传递和接收
导航参数的传递

```
Navigator.push(
  context, 
  MaterialPageRoute(
    builder:(context)=>new ProductDetail(product:products[index])
  )
);
```


子页面接受参数并显示

```
class ProductDetail extends StatelessWidget {
  final Product product;
  ProductDetail({Key key ,@required this.product}):super(key:key);
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: AppBar(
        title:Text('${product.title}'),
      ),
      body:Center(child: Text('${product.description}'),)
    );
  }
}


import 'package:flutter/material.dart';
class Product {
  final String title;
  final String description;
  Product(this.title, this.description);
}
void main() {
  runApp(
    MaterialApp(
      title: '商品列表',
      home: Home(
        products: List.generate(
          100, 
          (i)=> Product('商品$i','这是一个商品详情，编号为:$i')
        )
      )
    )
  );
}
class Home extends StatelessWidget {
  final  List<Product> products;
  Home({Key key, this.products}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: new Text('列表'),
      ),
      body: ListView.builder(
        itemCount: products.length,
        itemBuilder: (context, index){
          return ListTile(
            title: Text(products[index].title+'  '+products[index].description),
            onTap: (){
              Navigator.push(context, MaterialPageRoute(
                builder: (context) {
                  return new ProductDetail(product:products[index]);
                }
              ));
            },
          );
        },
      ),
    );
  }
}
class ProductDetail extends StatelessWidget {
  final Product product;
  ProductDetail({Key key, this.product}):super(key: key);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title:Text('${product.title}'),
      ),
      body: Center(
        child: Text('${product.description}'),
      ),
    );
  }
}
```

#### 8. 异步请求和等待
直接使用async...await就可以实现

```
_navigateToXiaoJieJie(BuildContext context) async{ //async是启用异步方法
    final result = await Navigator.push(//等待
      context, 
      MaterialPageRoute(builder: (context)=> XiaoJieJie())
      );
      Scaffold.of(context).showSnackBar(SnackBar(content:Text('$result')));
  }
}
```

SnackBar的使用

```
Scaffold.of(context).showSnackBar(SnackBar(content:Text('$result')));
```


返回数据的方式
Navigator.pop(context,'xxxx');  //xxx就是返回的参数


```
import 'package:flutter/material.dart';

void main(List<String> args) {
  runApp(
    MaterialApp(
      title: "数据传递",
      home: FirstPage()
    )
  );
}

class FirstPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('数据传递'),
      ),
      body: Center(
        child: RouterButton(),
      ),
    );
  }
}

class RouterButton extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return RaisedButton(
      child: Text('GO 数据传送'),
      onPressed: (){
        _navagatorTo(context);
      },
    );
  }

  _navagatorTo(BuildContext context) async{
    final result = await Navigator.push(
      context, 
      MaterialPageRoute(
        builder: (context)=> secondPage()
      )
    );
    Scaffold.of(context).showSnackBar(
      SnackBar(content:Text('$result'))
    );
  }
}

class secondPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('第二个页面'),
      ),
      body: Center(
        child: Column(
          children: <Widget>[
            RaisedButton(
              child: Text('传送一个123'),
              onPressed: (){
                Navigator.pop(context, '123456');
              },
            ),
            RaisedButton(
              child: Text('传送一个456'),
              onPressed: (){
                Navigator.pop(context, '456789');
              },
            ),
          ],
        ),
      ),
    );
  }
}
```



9. 静态资源和项目图片的处理
pubspec.yaml 文件
assets:
    - images/blogtouxiang.jpg

在项目根目录下新建了一个images文件夹
使用项目图片资源
import 'package:flutter/material.dart';
void main()=>runApp(MyApp());
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Image.asset('images/blogtouxiang.jpg'),
    );
  }
}

#### 10. 配置APP的图标
项目根目录/android/app/src/main/res/

- mdpi (中) ~160dpi
- hdpi （高） ~240dip
- xhdpi （超高） ~320dip
- xxhdpi （超超高） ~480dip
- xxxhdpi （超超超高） ~640dip

AndroidManifest.xml 文件
项目根目录/android/app/src/main/AndroidManifest.xml

android:label="flutter_app"   //配置APP的名称，支持中文
android:icon="@mipmap/ic_launcher" //APP图标的文件名称
#### 11.生成 keystore
keytool -genkey -v -keystore ~/key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias key

有了这个key.jks文件后，可以到项目目录下的android文件夹下，创建一个名为key.properties的文件，并打开粘贴下面的代码。


```
storePassword=<password from previous step>    //输入上一步创建KEY时输入的 密钥库 密码
keyPassword=<password from previous step>    //输入上一步创建KEY时输入的 密钥 密码
keyAlias=key
storeFile=<E:/key.jks>    //key.jks的存放路径
```

我的文件最后是这样的：

```
storePassword=123123
keyPassword=123123
keyAlias=key
storeFile=/Users/mac/flutterKey.jks
```

#### 12.配置key注册
key生成好后，需要在build.gradle文件中进行配置。这个过程其实很简单，就是粘贴复制一些东西，你是不需要知道这些文件的具体用处的。
第一项：
进入项目目录的/android/app/build.gradle文件，在android{这一行前面,加入如下代码：

```
def keystorePropertiesFile = rootProject.file("key.properties")
def keystoreProperties = new Properties()
keystoreProperties.load(new FileInputStream(keystorePropertiesFile))

把如下代码进行替换
buildTypes {
    release {
        signingConfig signingConfigs.debug
    }
}

替换成的代码：
signingConfigs {
    release {
        keyAlias keystoreProperties['keyAlias']
        keyPassword keystoreProperties['keyPassword']
        storeFile file(keystoreProperties['storeFile'])
        storePassword keystoreProperties['storePassword']
    }
}
buildTypes {
    release {
        signingConfig signingConfigs.release
    }
}
```


#### 13. 生成apk
直接在终端中输入：

```
flutter build apk
```


注意：密码输入的不能用空格查看signing-config.json这个文件
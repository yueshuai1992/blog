### Flutter 基础（一） 
#### 1. 地址
- https://github.com/kangshaojun
- https://www.jianshu.com/p/cda416e2fc0d
- https://www.jianshu.com/p/b50a92afbef1

#### 2. lib/main.bat

```
import 'package:flutter/material.dart';

//主函数（入口函数），下面我会简单说说Dart的函数
void main() =>runApp(MyApp());
// 声明MyApp类
class MyApp extends StatelessWidget{
  //重写build方法
  @override
  Widget build(BuildContext context){
    //返回一个Material风格的组件
   return MaterialApp(
      title:'Welcome to Flutteraa',
      home:Scaffold(
        //创建一个Bar，并添加文本
        appBar:AppBar(
          title:Text('Welcome to Flutter'),
        ),
        //在主体的中间区域，添加一个hello world 的文本
        body:Center(
          child:Text('Hello World'),
        ),
      ),
    );
  }
}
```
- r 键：点击后热加载，也就算是重新加载吧。
- p 键：显示网格，这个可以很好的掌握布局情况，工作中很有用。
- o 键：切换android和ios的预览模式。
- q 键：退出调试预览模式。
#### 3. TextAlign属性
TextAlign属性就是文本的对齐方式，它的属性值有如下几个（详细请看视频中讲解）：

- center: 文本以居中形式对齐,这个也算比较常用的了。
- left:左对齐，经常使用，让文本居左进行对齐，效果和start一样。
- right :右对齐，使用频率也不算高。
- start:以开始位置进行对齐，类似于左对齐。
- end: 以为本结尾处进行对齐，不常用。有点类似右对齐.

总结起来，也就算三个对齐方式，left(左对齐)、center（居中对齐）、right（右对齐）。我们来看一下具体代码：

```
child:Text(
  'Hello JSPang  ,非常喜欢前端，并且愿意为此奋斗一生。我希望可以出1000集免费教程。',
  textAlign:TextAlign.left,
)
```


#### 4. maxLines属性
设置最多显示的行数，比如我们现在只显示1行，类似一个新闻列表的题目。代码如下：

```
child:Text(
  'Hello JSPang  ,非常喜欢前端，并且愿意为此奋斗一生。我希望可以出1000集免费教程。',
  textAlign:TextAlign.left,
  maxLines: 1,
)
```
设置好后，文字只能显示出1行了。
#### 5. overflow属性
- overflow属性是用来设置文本溢出时，如何处理,它有下面几个常用的值供我们选择。
- clip：直接切断，剩下的文字就没有了，感觉不太友好，体验性不好。
- ellipsis:在后边显示省略号，体验性较好，这个在工作中经常使用。
- fade: 溢出的部分会进行一个渐变消失的效果，当然是上线的渐变，不是左右的哦。

#### 6. style属性

https://docs.flutter.io/flutter/painting/TextStyle-class.html

#### 7. alignment属性
- bottomCenter:下部居中对齐。
- botomLeft: 下部左对齐。
- bottomRight：下部右对齐。
- center：纵横双向居中对齐。
- centerLeft：纵向居中横向居左对齐。
- centerRight：纵向居中横向居右对齐。
- topLeft：顶部左侧对齐。
- topCenter：顶部居中对齐。
- topRight： 顶部居左对齐。

```
import 'package:flutter/material.dart';
void main () => runApp(MyApp());
class MyApp extends StatelessWidget{
  @override
  Widget build(BuildContext context ){
      return MaterialApp(
        title:'Text widget',
        home:Scaffold(
          body:Center(
           child:Container(
             child:new Text('Hello JSPang',style: TextStyle(fontSize: 40.0),),
             alignment: Alignment.center,
           ),
          ),
        ),
      );
  }
}
```


设置宽、高和颜色属性
设置宽、高和颜色属性是相对容易的，只要在属性名称后面加入浮点型数字就可以了，比如要设置宽是500，高是400，颜色为亮蓝色。代码如下：

```
child:Container(
  child:new Text('Hello JSPang',style: TextStyle(fontSize: 40.0),),
  alignment: Alignment.center,
  width:500.0,
  height:400.0,
  color: Colors.lightBlue,
),
```


#### 8. padding属性
padding的属性就是一个内边距，它和你使用的前端技术CSS里的padding表现形式一样，指的是Container边缘和child内容的距离。先来看一个内边距为10的例子。具体代码如下(我们还是接着上节课的代码来写)：

```
child:Container(
  child:new Text('Hello JSPang',style: TextStyle(fontSize: 40.0),),
  alignment: Alignment.topLeft,
  width:500.0,
  height:400.0,
  color: Colors.lightBlue,
  padding:const EdgeInsets.all(10.0),
),


padding:const EdgeInsets.all(10.0),
```


这句的意思是设置Container的内边距是10，左右上下全部为10，这看起来非常容易。那我们再加大一点难度。如果上边距为30，左边距为10，这时候EdgeInsets.all()就满足不了我们了。
EdgeInsets.fromLTRB(value1,value2,value3,value4)

我们用EdgeInsets.fromLTRB(value1,value2,value3,value4) 可以满足我们的需求，LTRB分别代表左、上、右、下。
那我们设置上边距为30，左边距为10，就可以用下面的代码来编写。
padding:const EdgeInsets.fromLTRB(10.0,30.0,0.0,0.0),
#### 9. margin属性
会了padding属性的设置，margin就变的非常容易了，因为方法基本上一样。不过margin是外边距，只的是container和外部元素的距离。
现在要把container的外边距设置为10个单位，代码如下:

```
child:Container(
  child:new Text('Hello JSPang',style: TextStyle(fontSize: 40.0),),
  alignment: Alignment.topLeft,
  width:500.0,
  height:400.0,
  color: Colors.lightBlue,
  padding:const EdgeInsets.fromLTRB(10.0,30.0,0.0,0.0),
  margin: const EdgeInsets.all(10.0),
),
```

#### 10. decoration属性
decoration是 container 的修饰器，主要的功能是设置背景和边框。
比如你需要给背景加入一个渐变，这时候需要使用BoxDecoration这个类，代码如下（需要注意的是如果你设置了decoration，就不要再设置color属性了，因为这样会冲突）。

```
child:Container(
  child:new Text('Hello JSPang',style: TextStyle(fontSize: 40.0),),
  alignment: Alignment.topLeft,
  width:500.0,
  height:400.0,
  padding:const EdgeInsets.fromLTRB(10.0,30.0,0.0,0.0),
  margin: const EdgeInsets.all(10.0),
  decoration:new BoxDecoration(
    gradient:const LinearGradient(
      colors:[Colors.lightBlue,Colors.greenAccent,Colors.purple]
    ),
    border: Border.all(width: 5.0, color: Colors.red)
  ),
),
```


上面的代码去掉了color的设置，这时候container的背景就变成了渐变颜色
border:Border.all(width:2.0,color:Colors.red)


#### 11. Image图片组件的使用
- Image.asset:加载资源图片，就是加载项目资源目录中的图片,加入图片后会增大打包的包体体积，用的是相对路径。
- Image.network:网络资源图片，意思就是你需要加入一段http://xxxx.xxx的这样的网络路径地址。
- Image.file:加载本地图片，就是加载本地文件中的图片，这个是一个绝对路径，跟包体无关。
- Image.memory: 加载Uint8List资源图片,这个我目前用的不是很多，所以没什么发言权。

#### 12. fit属性的设置
- BoxFit.fill:全图显示，图片会被拉伸，并充满父容器。
- BoxFit.contain:全图显示，显示原比例，可能会有空隙。
- BoxFit.cover：显示可能拉伸，可能裁切，充满（图片要充满整个容器，还不变形）。
- BoxFit.fitWidth：宽度充满（横向充满），显示可能拉伸，可能裁切。
- BoxFit.fitHeight ：高度充满（竖向充满）,显示可能拉伸，可能裁切。
- BoxFit.scaleDown：效果和contain差不多，但是此属性不允许显示超过源图片大小，可小不可大。

```
child:new Image.network(
  'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=653666270,723497068&fm=26&gp=0.jpg',
  scale:2.0,
  fit: BoxFit.cover,
),
```

#### 13. 图片的混合模式
图片混合模式（colorBlendMode）和color属性配合使用，能让图片改变颜色，里边的模式非常的多，产生的效果也是非常丰富的。

```
child:new Image.network(
  'http://jspang.com/static/myimg/blogtouxiang.jpg',
    color: Colors.greenAccent,
    colorBlendMode: BlendMode.darken,
),
```
- color：是要混合的颜色，如果你只设置color是没有意义的。
- colorBlendMode:是混合模式，相当于我们如何混合。
#### 14. repeat图片重复
- ImageRepeat.repeat : 横向和纵向都进行重复，直到铺满整个画布。
- ImageRepeat.repeatX: 横向重复，纵向不重复。
- ImageRepeat.repeatY：纵向重复，横向不重复。
来个全部重复的代码。

```
child:new Image.network(
  'http://jspang.com/static/myimg/blogtouxiang.jpg',
   repeat: ImageRepeat.repeat,
),
```


#### 15. ListView的声明

```
body: new ListView(
  children:<Widget>[
    new ListTile(
      leading:new Icon(Icons.access_time),
      title:new Text('access_time')
    )
  ]
),
```


#### 16. 图片列表的使用
上节课学习了Image Widget，在这里我们就在列表中加入图片来试一下。我们插入4幅图片，然后看一下效果，代码如下：

```
body: new ListView(
  children:<Widget>[
   new Image.network(
       'http://jspang.com/static/upload/20181111/G-wj-ZQuocWlYOHM6MT2Hbh5.jpg'
   ),
   new Image.network(
       'http://jspang.com/static/upload/20181109/1bHNoNGpZjyriCNcvqdKo3s6.jpg'
   ),
  ]
),
```


#### 17. 制作横向列表
这个我们先来看效果，然后再具体讲解使用方法:

```
import 'package:flutter/material.dart';
void main () => runApp(MyApp());
class MyApp extends StatelessWidget{
  @override
  Widget build(BuildContext context ){
      return MaterialApp(
        title:'Text widget',
        home:Scaffold(
          body:Center(
          child:Container(
            height:200.0,
            child:new ListView(
              scrollDirection: Axis.horizontal,
              children: <Widget>[
                new Container(
                  width:180.0,
                  color: Colors.lightBlue,
                ), new Container(
                  width:180.0,
                  color: Colors.amber,
                ), new Container(
                  width:180.0,
                  color: Colors.deepOrange,
                ),new Container(
                  width:180.0,
                  color: Colors.deepPurpleAccent,
                ),
              ],
            )
          ),
          ),
        ),
      );
  }
}
```


我们先是加入了Center组件，作用是让我们的横向列表可以居中到屏幕的中间位置，然后在center组件的下面加入了Container容器组件，并设置了容器组件的高是200，在容器组件里我们加入了ListView组件，然后设置了组件的scrollDirection属性
scrollDirection属性
- ListView组件的scrollDirection属性只有两个值，一个是横向滚动，一个是纵向滚动。默认的就是垂直滚动，所以如果是垂直滚动，我们一般都不进行设置。
- Axis.horizontal:横向滚动或者叫水平方向滚动。
- Axis.vertical:纵向滚动或者叫垂直方向滚动。
#### 18. Dart List类型的使用
List是Dart的集合类型之一,其实你可以把它简单理解为数组（反正我是这么认为的），其他语言也都有这个类型。它的声明有几种方式：

```
var myList = List(): 非固定长度的声明。
var myList = List(2): 固定长度的声明。
var myList= List<String>():固定类型的声明方式。
var myList = [1,2,3]: 对List直接赋值。
```

那我们这里使用的是一个List传递，然后直接用List中的generate方法进行生产List里的元素。最后的结果是生产了一个带值的List变量。代码如下：

```
void main () => runApp(MyApp(
  items: new List<String>.generate(1000, (i)=> "Item $i")
));
```

说明:再main函数的runApp中调用了MyApp类，再使用类的使用传递了一个items参数,并使用generate生成器对items进行赋值。
generate方法传递两个参数，第一个参数是生成的个数，第二个是方法。
接受参数
我们已经传递了参数，那MyApp这个类是需要接收的。

```
final List<String> items;
 MyApp({Key key, @required this.items}):super(key:key);
```


这是一个构造函数，除了Key，我们增加了一个必传参数，这里的@required意思就必传。:super如果父类没有无名无参数的默认构造函数，则子类必须手动调用一个父类构造函数。
这样我们就可以接收一个传递过来的参数了，当然我们要事先进行声明。
动态列表 ListView.builder()

```
import 'package:flutter/material.dart';
void main () => runApp(MyApp(
  items: new List<String>.generate(1000, (i)=> "Item $i")
));
class MyApp extends StatelessWidget{
  final List<String> items;
  MyApp({Key key, @required this.items}):super(key:key);
  @override
  Widget build(BuildContext context ){
      return MaterialApp(
        title:'ListView widget',
        home:Scaffold(
          body:new ListView.builder(
            itemCount:items.length,
            itemBuilder:(context,index){
              return new ListTile(
                title:new Text('${items[index]}'),
              );
            }
          )
        ),
      );
  }
}
```


GridView网格列表组件

```
body: GridView.count(
    padding: const EdgeInsets.all(20.0),
    crossAxisCount: 3,
    crossAxisSpacing: 10.0,
    children: <Widget>[
      const Text('I am Jamse'),
      const Text('I love WEB'),
      const Text('JavaScript'),
      const Text('Dart'),
      const Text('Flutter')
    ],
)
```
- padding:表示内边距，这个小伙伴们应该很熟悉。
- crossAxisSpacing:网格间的空当，相当于每个网格之间的间距。
- crossAxisCount:网格的列数，相当于一行放置的网格数量。

```
body: GridView.count(
    padding: const EdgeInsets.all(20.0),
    crossAxisCount: 3,
    crossAxisSpacing: 10.0,
    mainAxisSpacing: 10.0,
    childAspectRatio: 0.7,
    children: <Widget>[
      new Image.network('http://img5.mtime.cn/mt/2018/10/22/104316.77318635_180X260X4.jpg',fit: BoxFit.cover),
      new Image.network('http://img5.mtime.cn/mt/2018/10/10/112514.30587089_180X260X4.jpg',fit: BoxFit.cover),
      new Image.network('http://img5.mtime.cn/mt/2018/11/13/093605.61422332_180X260X4.jpg',fit: BoxFit.cover),
      new Image.network('http://img5.mtime.cn/mt/2018/11/07/092515.55805319_180X260X4.jpg',fit: BoxFit.cover),
      new Image.network('http://img5.mtime.cn/mt/2018/11/21/090246.16772408_135X190X4.jpg',fit: BoxFit.cover),
      new Image.network('http://img5.mtime.cn/mt/2018/11/17/162028.94879602_135X190X4.jpg',fit: BoxFit.cover),
      new Image.network('http://img5.mtime.cn/mt/2018/11/19/165350.52237320_135X190X4.jpg',fit: BoxFit.cover),
      new Image.network('http://img5.mtime.cn/mt/2018/11/16/115256.24365160_180X260X4.jpg',fit: BoxFit.cover),
      new Image.network('http://img5.mtime.cn/mt/2018/11/20/141608.71613590_135X190X4.jpg',fit: BoxFit.cover)
    ],
)
```


childAspectRatio:宽高比，这个值的意思是宽是高的多少倍，如果宽是高的2倍，那我们就写2.0，如果高是宽的2倍，我们就写0.5。
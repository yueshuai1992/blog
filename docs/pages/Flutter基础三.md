### Flutter 基础（三） 
#### 1. 底部导航

```
import 'package:flutter/material.dart';
import 'home_screen.dart';
import 'email_screen.dart';
import 'pages_screen.dart';
import 'airplay_screen.dart';

class BottomNavigation extends StatefulWidget {
  final Widget child;

  BottomNavigation({Key key, this.child}) : super(key: key);

  _BottomNavigationState createState() => _BottomNavigationState();
}

class _BottomNavigationState extends State<BottomNavigation> {

  final _BottomNavigationColor = Colors.blueGrey;
  final _BottomNavigationActiveColor = Colors.blueAccent;
  int _currentIndex = 0;
  var appBarTitles = ['首页', '邮件', '发现', '我的'];
  List<Widget> list = List();
  @override
  void initState() {
    // TODO: implement initState
    list..add(HomeScreen())..add(EmailScreen())..add(PageScreen())..add(AirplayScreen());
    super.initState();
  }
  
  Text getTableTitle(int curIndex) {
    if(curIndex == _currentIndex) {
      return Text(
        appBarTitles[curIndex],
        style: TextStyle(
          color: _BottomNavigationActiveColor
        ),
      );
    }
    return Text(
      appBarTitles[curIndex],
      style: TextStyle(
        color: _BottomNavigationColor
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: list[_currentIndex],
      bottomNavigationBar: BottomNavigationBar(
        items: [
          BottomNavigationBarItem(
            icon: Icon(
              Icons.home,
              color: _BottomNavigationColor
            ),
            activeIcon: Icon(
              Icons.airplay,
              color: _BottomNavigationActiveColor,
            ),
            title: getTableTitle(0)
          ),
          BottomNavigationBarItem(
            icon: Icon(
              Icons.email,
              color: _BottomNavigationColor,
            ),
            activeIcon: Icon(
              Icons.airplay,
              color: _BottomNavigationActiveColor,
            ),
            title: getTableTitle(1)
          ),
          BottomNavigationBarItem(
            icon: Icon(
              Icons.pages,
              color: _BottomNavigationColor,
            ),
            activeIcon: Icon(
              Icons.airplay,
              color: _BottomNavigationActiveColor,
            ),
            title: getTableTitle(2)
          ),
          BottomNavigationBarItem(
            icon: Icon(
              Icons.airplay,
              color: _BottomNavigationColor,
            ),
            activeIcon: Icon(
              Icons.airplay,
              color: _BottomNavigationActiveColor,
            ),
            title: getTableTitle(3)
          )
        ],
        currentIndex: _currentIndex,
        onTap: (int index) {
          setState(() {
            _currentIndex = index;
          });
        },
        type: BottomNavigationBarType.fixed,
      ),
    );
  }
}
```


#### 2.不规则底部工具栏
自定义主题样本：primarySwatch ：现在支持18种主题样本了。

```
theme: ThemeData(
  primarySwatch: Colors.lightBlue,
),
```

**floatingActionButton**

floatingActionButton工作中我们通常简称它为“FAB”，也许只是我们公司这样称呼，从字面理解可以看出，它是“可交互的浮动按钮”

- onPressed ：点击相应事件，最常用的一个属性。
- tooltip：长按显示的提示文字，因为一般只放一个图标在上面，防止用户不知道，当我们点击长按时就会出现一段文字性解释。非常友好，不妨碍整体布局。
- child ：放置子元素，一般放置Icon Widget。
- 
写完这些代码已经有了一个悬浮的按钮，但这个悬浮按钮还没有和低栏进行融合，这时候需要一个属性。

```
floatingActionButtonLocation: FloatingActionButtonLocation.centerDocked,
```

**BottomAppBar Widget**
BottomAppBar 是 底部工具栏的意思，这个要比BottomNavigationBar widget灵活很多，可以放置文字和图标，当然也可以放置容器。

BottomAppBar的常用属性:

- color:这个不用多说，底部工具栏的颜色。
- shape：设置底栏的形状，一般使用这个都是为了和floatingActionButton融合，所以使用的值都是CircularNotchedRectangle(),有缺口的圆形矩形。
- child ： 里边可以放置大部分Widget，让我们随心所欲的设计底栏。

```
import 'package:flutter/material.dart';
import 'each_view.dart';

class BottomAppBarExample extends StatefulWidget {

  _BottomAppBarExampleState createState() => _BottomAppBarExampleState();

}

class _BottomAppBarExampleState extends State<BottomAppBarExample> {

  List<Widget> _eachView;
  int _index = 0; 
  @override
  void initState() {
    super.initState();
    _eachView = List();
    _eachView..add(EachView('Home'))..add(EachView('Me'));
    // TODO: implement initState
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: _eachView[_index],
      floatingActionButton: FloatingActionButton(
        onPressed: (){
          Navigator.push(context, MaterialPageRoute(builder: (BuildContext context){
            return EachView('New pages');
          }));
        },
        tooltip: 'FAB Button',
        backgroundColor: Colors.red,
        child: Icon(
          Icons.add,
          color: Colors.white
        ),
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.centerDocked,
      bottomNavigationBar: BottomAppBar(
        color: Colors.red,
        shape: CircularNotchedRectangle(),
        child: Row(
          mainAxisSize: MainAxisSize.max,
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: <Widget>[
            IconButton(
              icon: Icon(Icons.home),
              color:Colors.white,
              onPressed: () {
                setState(() {
                  _index = 0;
                });
              },
            ),
            IconButton(
              icon: Icon(Icons.airport_shuttle),
              color:Colors.white,
              onPressed: () {
                setState(() {
                  _index = 1;
                });
              },
            )
          ],
        ),
      ),
    );
  }
}
```


#### 3. 酷炫的路由动画
AppBar Widger的 elevation 属性：这个值是AppBar 滚动时的融合程度，一般有滚动时默认是4.0，现在我们设置成0.0，就是和也main完全融合了。
main.dart

```
import 'package:flutter/material.dart';
import 'custom_router.dart';

void main(List<String> args) {
  runApp(
    MyApp()
  );
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Fullter demo',
      theme: ThemeData(
        primarySwatch: Colors.blue
      ),
      home: FirstPage(),
    );
  }
}

class FirstPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.blue,
      appBar: AppBar(
        title: Text('First Page', style:TextStyle(fontSize: 16.0)),
        elevation: 0.0,
      ),
      body: Center(
        child: MaterialButton(
          child: Icon(
            Icons.navigate_next,
            color: Colors.white,
            size: 64.0,
          ),
          onPressed: (){
            Navigator.push(context, CustomRouter(SecondPage()));
          },
        )
      ),
    );
  }
}

class SecondPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.pink,
      appBar: AppBar(
        title: Text('Second Page'),
        elevation: 0.0,
        backgroundColor: Colors.pink,
      ),
      body: Center(
        child: MaterialButton(
          child: Icon(
            Icons.navigate_before,
            color: Colors.white,
            size: 64.0,
          ),
          onPressed: (){
            Navigator.pop(context);
          },
        ),
      )
    );
  }
}
```

custom_router

```
import 'package:flutter/material.dart';

class CustomRouter extends PageRouteBuilder {
  final Widget widget;
  CustomRouter(this.widget):super(
    transitionDuration: Duration(seconds: 1),
    pageBuilder: (
      BuildContext context,
      Animation<double> animation1,
      Animation<double> animation2){
        return widget;
    },
    transitionsBuilder:(
      BuildContext context,
      Animation<double> animation1,
      Animation<double> animation2,
      Widget child){
        return FadeTransition(
          opacity: Tween(begin:0.0,end :1.0).animate(CurvedAnimation(
              parent:animation1,
              curve:Curves.fastOutSlowIn
          )),
          child: child,
        );
    }  
  );
}
```


缩放路由动画

```
return ScaleTransition(
  scale:Tween(begin:0.0,end:1.0).animate(CurvedAnimation(
    parent:animation1,
    curve: Curves.fastOutSlowIn
    )),
    child:child
);
```


旋转+缩放路由动画

```
return RotationTransition(
  turns:Tween(begin:0.0,end:1.0)
  .animate(CurvedAnimation(
    parent: animation1,
    curve: Curves.fastOutSlowIn
  )),
  child:ScaleTransition(
    scale:Tween(begin: 0.0,end:1.0)
    .animate(CurvedAnimation(
        parent: animation1,
        curve:Curves.fastOutSlowIn
    )),
    child: child,
  )
);
```


左右滑动路由动画

```
return SlideTransition(
  position: Tween<Offset>(
    begin: Offset(-1.0, 0.0),
    end:Offset(0.0, 0.0)
  )
  .animate(CurvedAnimation(
    parent: animation1,
    curve: Curves.fastOutSlowIn
  )),
  child: child,
);
```


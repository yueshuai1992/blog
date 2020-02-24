### Egret 基础

1. 直接继承DisplayObject的类都属于非容器。
2. 继承自DisplayObjectContainer的类都属于容器。

#### 命令行

egret create  project_name 创建项目

Egret create room-go  --type eui 创建eui项目

egret build 构建项目

egret startserver -a 启动服务（自动编译）

egret info 获取版本信息

egret publish 发布（生成bin-replease包）

egret publish --target wxgame 发布微信版本包

#### 打开性能面板

```
data-show-fps="true" data-show-log="true"
```

- draw: 这里参数描述的是当前页面渲染时候drawcall的次数
- cost：包含四个参数，EnterFrame阶段的开销，引擎updateTranform开销，引擎draw开销，html5 cavans开销
- fps: 当前画面帧频

#### 配置打开的容器

2.5之前配置egretProperties.json,在文件中使用
 
2.5之后设置 data-entry-class="Main"

#### 目录结构
- src 目录，存放我们的代码。我们编写的代码都放在src目录下面。
- bin-debug 目录，项目编译和运行的debug目录，一般我们不要修改该目录下的内容。
- libs 目录，这里面存放我们的库文件，包括 Egret 核心库和其他扩展库。当然以后添加了第三方库的话也会放在这里。
- resource 目录，这里放置我们的资源文件，这里面有一个default.res.json 配置文件，用来配置资源。
- template 目录，这里是项目调试过程中所需的目录，一般我们不需要修改该目录下的内容。
- egretProperties.json 项目的配置文件，一般我们会用到里面的modules 字段来配置项目的模块。
- index.html 项目访问的入口文件，我们可以在这里面配置项目的旋转缩放模式背景颜色等。
- favicon.ico 一个ico。

#### index.html

```
<div style="margin: auto;width: 100%;height: 100%;" class="egret-player"
     data-entry-class="Main"
     data-orientation="auto"
     data-scale-mode="showAll"
     data-resolution-mode="retina"
     data-frame-rate="30"
     data-content-width="480"
     data-content-height="800"
     data-show-paint-rect="false"
     data-multi-fingered="2"
     data-show-fps="false" data-show-log="false"
     data-log-filter="" data-show-fps-style="x:0,y:0,size:30,textColor:0x00c200,bgAlpha:0.9"> </div>
```
- data-entry-class=”Main” 设置项目的入口文件，表示项目的入口类，默认为Main,如果需要自定义的话需要在项目中先创建类，然后在这里配置类的名字。
- data-orientation=”auto” 设置旋转模式。
- data-scale-mode=”showAll” 设置缩放模式。
- data-frame-rate=”30” 这里是运行的帧率。
- data-content-width=”480” 和 data-content-height=”800” 用来设置舞台的设计宽和高
- data-show-paint-rect=”false” 设置显示脏矩形的重绘区域。
- data-multi-fingered=”2” 设置多指触摸
- data-show-fps=”false” data-show-log=”false” 这里设置显示帧率和log，只有在调试时会显示，发布的版本会去掉。
- data-log-filter=”” 设置一个正则表达式过滤条件，日志文本匹配这个正则表达式的时候才显示这条日志。如 data-log-filter="^egret" 表示仅显示以 egret 开头的日志。
- data-show-fps-style=”x:0,y:0,size:30,textColor:0x00c200,bgAlpha:0.9” 这里设置fps面板的样式。目前支持默认的这几种设置，修改其值即可，比如修改面板位置可以设置x和y,改变大小可以设置size,改变文字颜色textColor，改变背景面板的透明度bgAlpha。

#### 基本类结构


```
class DisplayObject extends egret.DisplayObjectContainer {
    constructor(parameters) {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage() {
        // 实例化egret.Sprite()
        let spr: egret.Sprite = new egret.Sprite();
        // 设置填充颜色
        spr.graphics.beginFill(0xff0000);
        // 画正方形
        spr.graphics.drawRect(100, 100, 200, 200);
        // 绘画结束
        spr.graphics.endFill();
        spr.x = 100;
        spr.y = 200;
        this.addChild(spr);
    }
}
```
`eg: spr.scaleX = 0.5;`
- alpha：透明度 
- width：宽度
- height：高度
- rotation：旋转角度
- scaleX：横向缩放 
- scaleY：纵向缩放
- skewX：横向斜切
- skewY：纵向斜切
- visible：是否可见 // spr.visible = true|false;
- x：X轴坐标值
- y：Y轴坐标值

#### 核心显示类

类 | 描述
---|---
DisplayObject|显示对象基类，所有显示对象均继承自此类
Bitmap|位图，用来显示图片
Shape|用来显示矢量图，可以使用其中的方法绘制矢量图形
DisplayObjectContainer|显示对象容器接口，所有显示对象容器均实现此接口
Sprite|轻量级显示容器
Stage|舞台类
TextField|文本类
TextInput|输入文本类

#### 遮罩 Mask
可以通过将一个显示对象用作遮罩来创建一个孔洞，透过该孔洞使另一个显示对象的内容可见。

```
private onAddToStage() {
    let shp: egret.Shape = new egret.Shape();
    shp.graphics.beginFill(0xff00ff);
    shp.graphics.drawRect(100, 100, 200, 200);
    shp.graphics.endFill();
    this.addChild(shp);
    
    let shp2: egret.Shape = new egret.Shape();
    shp2.graphics.beginFill(0x00ff00);
    shp2.graphics.drawCircle(0, 0, 50);
    shp2.graphics.endFill();
    shp2.x = 100;
    shp2.y = 100;
    this.addChild(shp2);
    // 其左上角由 x 和 y 参数指定，并具有指定的 width 和 height 参数
    let rect: egret.Rectangle = new egret.Rectangle(0, 0, 130, 150);
    shp2.mask = rect; 
}
```

#### 检查碰撞
要测试的此对象的 x 坐标，要测试的此对象的 y 坐标，==true为检查对象，false为检查边框==
```
private onAddToStage() {
    // 重绘过程
    this.drawText();
    let shap: egret.Shape = new egret.Shape();
    shap.graphics.beginFill(0xf0f0f0);
    shap.graphics.drawRect(30, 40, 100, 100);
    shap.graphics.endFill();
    this.addChild(shap);
    /**
     * @param x — 要测试的此对象的 x 坐标。
     * @param y — 要测试的此对象的 y 坐标。
     * @param shapeFlag — 是检查对象 (true) 的实际像素，还是检查边框 (false) 的实际像素。
     */
    let isHit: boolean = shap.hitTestPoint(20, 30);
    this.info.text += isHit;
}
```
#### 自定义显示对象类

自定义显示对象类需要继承DisplayObject的具体子类

**MyGrid.ts**
```
class MyGrid extends egret.Shape {
    constructor() {
        super();
        this.drawGrid();
    }
    private drawGrid() {
        this.graphics.beginFill(0xfff00);
        this.graphics.drawRect(0, 0, 100, 100);
        this.graphics.endFill();

        this.graphics.beginFill(0x0f0f00);
        this.graphics.drawRect(100, 0, 100, 100);
        this.graphics.endFill();

        this.graphics.beginFill(0x0f0f00);
        this.graphics.drawRect(0, 100, 100, 100);
        this.graphics.endFill();

        this.graphics.beginFill(0xfff00);
        this.graphics.drawRect(100, 100, 100, 100);
        this.graphics.endFill();
    }
}
```
**Grid.ts**
```
class Grid extends egret.DisplayObjectContainer {
    constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    
    private onAddToStage() {
        let g: MyGrid = new MyGrid();
        this.addChild(g);
    }
}
```

#### 锚点
每一个显示对象都包含一个锚点,该锚点默认位于显示对象的左上角。
当设置一个显示对象的坐标位置时,我们会以锚点为参照改变显示对象绘图位置

```
class Anchor extends egret.DisplayObjectContainer {
    constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage() {
        let box: egret.Shape = new egret.Shape();
        box.graphics.beginFill(0x423234);
        box.graphics.drawRect(0, 0, 100, 100);
        box.graphics.endFill();
        box.x = 300;
        box.y = 200;
        this.addChild(box);

        box.anchorOffsetX = 100;
        box.anchorOffsetY = 60;
    }
}
```

#### 显示容器的概念与实现
DisplayObjectContainer 封装了一些显示列表中常用的功能。在后面的内容中，我们将详细介绍显示列表的操作。这些常用操作主要分为四类：
- 添加、删除子对象
- 访问子对象
- 检测子对象
- 设置叠放次序

Sprite|轻量级显示容器

Sprite仅仅是继承 DisplayObjectContainer。同时添加了一个Graphics功能

#### 添加与删除显示对象

在Egret中建立显示对象和渲染显示对象是两个过程。建立显示对象后,对象会处于内存中,但不会参与渲染过程,只有把显示对象放到显示列表后,显示对象才会参与渲染过程。如果想将某个显示对象从渲染过程中删除,只需要将其移除显示列表即可

顺序：
- 舞台（容器）
    - 文档类（容器）
        - spr （容器）


```
class AddView extends egret.DisplayObjectContainer {
    constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {
        let box: egret.Sprite = new egret.Sprite();
        box.graphics.beginFill(0xff0000);
        box.graphics.drawRect(0, 0, 200, 200);
        box.graphics.endFill();
        // 该对象存在
        this.addChild(box);
        // 参与添加渲染
    }
}
```

##### 删除显示对象

```
this.removeChild(box);
```
- 显示对象独立于显示列表
- 相对坐标系
- 多次添加显示对象到显示列表
> 同一个显示对象无论被代码加入显示列表多少次，在屏幕上只绘制一次。
如果一个显示对象A被添加到了B这个容器中，然后A又被添加到了C容器中。那么在第二次执行 C.addChild(A) 的时候，A自动的从B容器中被删除，然后添加到C容器中。
- 删除操作的注意点

```
if( spr.parent )
{
    spr.parent.removeChild( spr );
}
```

##### 深度管理
每一个容器都会有一个自己的深度管理功能，这个深度管理就好像我们排队一样

1. 获取容器的数量
    
```
容器.numChildren
```
2. 添加/删除指定深度的对象

添加
```
容器.addChild(); // 在末尾添加
容器.addChildAt( 显示对象, 深度值 ) // 在某个位置添加
```
删除元素
```
容器.removeChildAt(0); // 删除某个位置的元素
容器.removeChildren(); // 全部删除
```
3. 交换不同深度对象
```
容器.swapChildren( 显示对象, 显示对象 ) // 交换对象1 和 对象2 的位置
容器.swapChildrenAt( 深度值, 深度值 ) // 交换对象根据值
```

4. 重设子对象深度

```
容器.setChildIndex( 显示对象, 新的深度值 );
```
##### 访问容器子对象
通过深度值获取子对象(推荐使用)
```
容器.getChildAt( 深度值 );
let _box: egret.DisplayObject = box.getChildAt(1);
```
通过Name属性获取
```
容器.getChildAt(name)
let _box1: egret.DisplayObject = box.getChildByName('box1');
```
eg:
```
private onAddToStage() {
    let box: egret.Sprite = new egret.Sprite();
    this.addChild(box);

    let box1: egret.Sprite = new egret.Sprite();
    box1.graphics.beginFill(0xff00ff);
    box1.graphics.drawRect(20, 20, 200, 200);
    box1.graphics.endFill();
    box1.name = 'box1';
    box.addChild(box1);

    let box2: egret.Sprite = new egret.Sprite();
    box2.graphics.beginFill(0x00ffff);
    box2.graphics.drawRect(20, 20, 200, 200);
    box2.graphics.endFill();
    box2.y = 300;
    box.addChild(box2);

    let _box2: egret.DisplayObject = box.getChildAt(1);
    _box2.x = 300;
    let _box1: egret.DisplayObject = box.getChildByName('box1');
    _box1.x = 250;
}
```

#### 开启webgl渲染
在index.html中
```
egret.runEgret({renderMode:"webgl"});
```

#### 事件处理机制的原理
事件机制包含4个步骤：注册侦听器，发送事件，侦听事件，移除侦听器。这四个步骤是按照顺序来执行的。

自定义事件
```
/**
 * constructor
 * type指定我们事件的类型，在“约会”的例子中，我们的type事件类型为“DATE”。我们经常使用的事件类型有“ADDED”、“COMPLETE”等。\
 * bubbles是指定事件是否参与事件流的冒泡阶段，关于事件流，会在后面的小节中介绍。
 * cancelable表示是否要取消Event对象。
 */
public constructor(type:string, bubbles:boolean=false, cancelable:boolean=false) {
    super(type,bubbles,cancelable);
}
```
事件侦听器
- ype表示事件类型。
- listener就是用来处理事件的侦听器。
- thisObject比较特殊，一般我们填写this。因为TypeScript与JavaScript的this作用域不同，其this指向也会不同
- useCapture 事件冒泡、捕获
- priority 该属性为一个number类型，当数字越大，则优先级越大
```
public addEventListener(type:string, listener:Function, thisObject:any, useCapture:boolean = false, priority:number = 0)
```
注册侦听器
```
事件发送者.addEventListener(事件类型, 侦听器, this);
```
移除侦听器
```
事件发送者.removeEventListener(事件类型, 侦听器, this);
```
检测侦听器

```
事件发送者.hasEventListener(事件类型);
```
TouchEvent的启动开关

```
显示对象实例.touchEnabled = false;
```
触摸事件

```
box.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
```

一个点击的流程一般会触发3个 touch 事件：TouchBegin 触摸开始，TouchEnd 触摸结束，TouchTap 点击。


```
class TouchEventTest extends egret.DisplayObjectContainer {
    private eventText: egret.TextField;

    constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {
        this.drawText();
        let box: egret.Sprite = new egret.Sprite();
        box.graphics.beginFill(0xff00ff);
        box.graphics.drawRect(100, 100, 200, 200);
        box.graphics.endFill();
        this.addChild(box);

        box.touchEnabled = true;
        box.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTaps, this, true);
    }

    private onTouch() {
        this.eventText.text += "\n点击了box";
    }

    private onTouchTap() {
        this.eventText.text += "\n容器冒泡侦听\n---------";
    }

    private onTouchTaps() {
        this.eventText.text += "\n容器捕获侦听\n---------";
    }

    private drawText() {
        this.eventText = new egret.TextField();
        this.eventText.text = '事件文字'
        this.eventText.size = 28;
        this.eventText.textColor = 0x7722ff;
        this.addChild(this.eventText);
    }
}
```

Egret发布小游戏报错：p2 is not defined：
https://xmanyou.com/egretfa-bu-xiao-you-xi-bao-cuo-p2-is-not-defined/
白鹭H5游戏移植到微信小游戏笔记：
https://xmanyou.com/egret-wxgame-migration/
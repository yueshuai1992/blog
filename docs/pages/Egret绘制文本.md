### Egret 绘制文本

```
class TextTest extends egret.DisplayObjectContainer {
    constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    private onAddToStage() {
        let message: egret.TextField = new egret.TextField();
        message.text = '这\n是\n文\n本\n！\n！\n！\n'
        message.textColor = 0xff00ff;
        message.size = 40;
        console.log(message.width, message.height)
        this.addChild(message);
    }
}
```

##### 设置内容
```
对象.text = 内容
```
##### 设置颜色
```
对象.textColor = 0xffffff
```
##### 设置字体
```
对象.fontFamily = "KaiTi";
```
##### 设置宽
```
对象.width = 200;
```
##### 设置高
```
对象.height = 200;
```
##### 设置布局
- 对象.textAlign = egret.HorizontalAlign.CENTER; // 设置水平居中
- 对象.textAlign = egret.HorizontalAlign.RIGHT; // 设置水平居右
- 对象.textAlign = egret.HorizontalAlign.LEFT; // 设置水平居左
- 对象.verticalAlign = egret.VerticalAlign.BOTTOM; // 垂直靠下
- 对象.verticalAlign = egret.VerticalAlign.MIDDLE; // 垂直居中
- 对象.verticalAlign = egret.VerticalAlign.TOP; // 垂直靠上

##### 设置描边
```
对象.strokeColor = 0xff00ff;
对象.stroke = 2;
```

##### 设置倾斜加粗

```
//设置粗体与斜体
对象.bold = true;
对象.italic = true;
```
##### 多种样式文本混合

```
对象.textFlow = <Array<egret.ITextElement>>[
    { text: 'Egret', style: { "textColor": 0x336699, "size": 60, stroke: 2, strokeColor: 0x6699cc } },
    { text: "里说一句话不能包含各种", style: { "fontFamily": "楷体" } }, 
    { text: "五", style: { "textColor": 0xff0000 } }
]
```
```
对象.textFlow = (new egret.HtmlTextParser).parser(
    '没有任何格式初始文本，' +
    '<font color="#0000ff" size="30" fontFamily="Verdana">Verdana blue large</font>' +
    '<font color="#ff7f50" size="10">珊瑚色<b>局部加粗</b>小字体</font>' +
    '<i>斜体</i>'
);
```
#####  文本超链接
注意：`tx.touchEnabled = true;`
方法一：
```
class TextHref extends egret.DisplayObjectContainer {
    constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.drawText, this);
    }
    private drawText() {
        var tx:egret.TextField = new egret.TextField;
        tx.textFlow = new Array<egret.ITextElement>(
            {'text': '这是超链接', 'style': {'href': 'event: text event triggered'}}
        )
        tx.touchEnabled = true;
        tx.addEventListener( egret.TextEvent.LINK, function( evt:egret.TextEvent ){
            location.href = 'https://www.baidu.com'
        }, this );
        tx.x = 10;
        tx.y = 90;
        this.addChild(tx);
    }
}
```
方法二： 直接使用URL

```
class TextHref extends egret.DisplayObjectContainer {
    constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.drawText, this);
    }
    private drawText() {
        var tx:egret.TextField = new egret.TextField();
        tx.textFlow = <Array<egret.ITextElement>>[
            {'text': '这是超链接', 'style': {'href': 'http://www.baidu.com'}}
        ]
        tx.touchEnabled = true;
        tx.x = 10;
        tx.y = 90;
        this.addChild(tx);
    }
}
```
##### 输入文本

```
txInput.type = egret.TextFieldType.INPUT;
//设置输入文本的样式为文本
text.inputType = egret.TextFieldInputType.TEXT;
// pass.inputType = egret.TextFieldInputType.PASSWORD;
// tel.inputType = egret.TextFieldInputType.TEL;
```

```
var text:egret.TextField = new egret.TextField();
text.type = egret.TextFieldType.INPUT;
//设置输入文本的样式为文本
text.inputType = egret.TextFieldInputType.TEXT;
text.text = "输入文本:";
text.width = 300;
this.addChild(text);
var pass:egret.TextField = new egret.TextField();
pass.type = egret.TextFieldType.INPUT;
//设置输入文本显示为密码
pass.inputType = egret.TextFieldInputType.PASSWORD;
//设置密码显示
pass.displayAsPassword = true;
pass.text = "输入密码:";
pass.y = 100;
pass.width = 300;
this.addChild(pass);
var tel:egret.TextField = new egret.TextField();
tel.type = egret.TextFieldType.INPUT;
//设置输入电话号样式
tel.inputType = egret.TextFieldInputType.TEL;
tel.text = "输入电话号:"
tel.y = 200;
tel.width = 300;
this.addChild(tel);
```
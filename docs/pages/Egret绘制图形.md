
### Egret 绘制图形 

#### 绘制矩形

```
private drawRect(color: number=0xffffff, x: number=0, y: number=0, width: number=100, height: number=100): egret.Sprite{
    let box: egret.Sprite = new egret.Sprite();
    // 描边（第一个参数是宽度，第二个参数是颜色，第三个是透明度）
    box.graphics.lineStyle(5, 0x0000ff);
    // 设置填充色（第一个参数是颜色，第二个是透明度(可以省略)）
    box.graphics.beginFill(color, 0.8);
    // 绘制矩形x: 横坐标；y: 纵坐标；width: 宽度；height: 高度；
    box.graphics.drawRect(x, y, width, height);
    // 结束绘制
    box.graphics.endFill();
    return box;
}
```

#### 绘制圆形

```
private drawCirle(color: number=0xffffff, x: number=0, y: number=0, r: number=10): egret.Sprite {
    let cirle: egret.Sprite = new egret.Sprite();
    // 设置填充色（第一个参数是颜色，第二个是透明度(可以省略)）
    cirle.graphics.beginFill(color);
    // 描边（第一个参数是宽度，第二个参数是颜色，第三个是透明度）
    cirle.graphics.lineStyle(5, 0x0000ff, 0.4);
    // 绘制矩形x: 横坐标；y: 纵坐标；r: 半径
    cirle.graphics.drawCircle(x, y, r);
    cirle.graphics.endFill();
    return cirle;
}
```

#### 绘制直线

```
private drawLine(): egret.Sprite {
    let line: egret.Sprite = new egret.Sprite();
    // 描边（第一个参数是宽度，第二个参数是颜色，第三个是透明度）
    line.graphics.lineStyle(3, 0xff00ff);
    line.graphics.moveTo(68, 84);
    line.graphics.lineTo(167, 76);
    line.graphics.lineTo(221, 118);
    line.graphics.lineTo(290, 162);
    line.graphics.lineTo(297, 228);
    line.graphics.lineTo(412, 250);
    line.graphics.lineTo(443, 174);
    line.graphics.endFill();
    return line
}
```

#### 绘制曲线
二次贝塞尔曲线

```
private drawCurve(): egret.Sprite {
    let curve: egret.Sprite = new egret.Sprite();
    curve.graphics.lineStyle(3, 0x0f0ff0);
    // 起始点的坐标
    curve.graphics.moveTo(50, 50);
    // 第一个点的坐标，第二个点的坐标
    curve.graphics.curveTo(100, 100, 200, 50);
    curve.graphics.endFill();
    return curve;
}
```


#### 绘制圆弧

```
private drawArc(): egret.Sprite {
    let arc: egret.Sprite = new egret.Sprite();
    arc.graphics.lineStyle(3, 0xf0f0f0);
    arc.graphics.beginFill(0xff00f0);
    // 横坐标 纵坐标 半径 起始角度 结束角度 顺时针/逆时针
    arc.graphics.drawArc(400, 400, 40, 0, Math.PI, true);
    arc.graphics.endFill();
    return arc
}
```

#### 清除绘制

```
容器.graphics.clear();
```

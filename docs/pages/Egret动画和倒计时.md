### Egret 动画和倒计时

### Tween缓动动画

动画示例地址：
http://edn.egret.com/cn/article/index/id/53


```
class MyTweenAnim extends egret.DisplayObjectContainer {
    constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    private onAddToStage() {
        let box: egret.Shape = new egret.Shape();
        box.graphics.beginFill(0xff00ff);
        box.graphics.drawCircle(50, 50, 50);
        box.graphics.endFill();
        this.addChild(box);

        let tw = egret.Tween.get(box,{loop: true});
        tw.to( {x:250}, 500, egret.Ease.getElasticIn ).call( function(){ console.log( "右上角" ) } ).wait( 100 )
        .to( {y:250}, 500 ).call( function(){ console.log( "右下角" ) } ).wait( 100 )
        .to( {x:50}, 500 ).call( function(){ console.log( "左下角" ) } ).wait( 100 )
        .to( {y:50}, 500 ).call( function(){ console.log( "左上角" ) } ).wait( 100 );
    }
}
```
- Tween.get 的第二个参数是可选的，这是一个对象参数，支持的属性有两个
- loop 布尔值，用于指定是否循环该缓动定义。true 为循环， false 为不循环，默认是不循环 (false) 。
- call 在某个缓动过程结束时，可以用 call 产生一个回调，直接将回调函数作为参数传给call就可以了。
- wait 用于多个缓动连续设定中设置中间的等待时间，也是以毫秒为单位。

### timer

- 2个属性: delay(每次间隔的时间),repeatCount(执行的次数)
- 3个方法: start 开始 reset 重置 stop 停止
- 2个事件: TimerEvent.TIMER 计时过程中触发 TimerEvent.TIMER_COMPLETE 计时结束后触发
```
class MyTimer extends egret.DisplayObjectContainer {
    constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    /**
     * 1. 2个属性: delay(每次间隔的时间),repeatCount(执行的次数)
     * 2. 3个方法: start 开始 reset 重置 stop 停止
     * 3. 2个事件: TimerEvent.TIMER 计时过程中触发 TimerEvent.TIMER_COMPLETE 计时结束后触发
     */
    private onAddToStage(event: egret.Event) {
        let timer: egret.Timer = new egret.Timer(1000, 5);
        timer.addEventListener(egret.TimerEvent.TIMER, this.timerfun, this);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComfun, this);
        timer.start();
    }

    private timerfun() {
        console.log("计时")
        console.log(new Date().getTime())
    }

    private timerComfun() {
        console.log("计时结束")
    }
}
```
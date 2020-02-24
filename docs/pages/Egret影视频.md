### Egret 影视频 

### 音频

1、通过Sound加装音频。
```
var sound:egret.Sound = new egret.Sound();
sound.addEventListener(egret.Event.COMPLETE, function loadOver(event:egret.Event) {
  sound.play();
}, this);
sound.addEventListener(egret.IOErrorEvent.IO_ERROR, function loadError(event:egret.IOErrorEvent) {
  console.log("loaded error!");
}, this);
sound.load("resource/sound/sound.mp3");
```
2、通过 URLLoader 加装音频
```
var loader:egret.URLLoader = new egret.URLLoader();
loader.addEventListener(egret.Event.COMPLETE, function loadOver(event:egret.Event) {
  var sound:egret.Sound = loader.data;
  sound.play();
}, this);
loader.dataFormat = egret.URLLoaderDataFormat.SOUND;
loader.load(new egret.URLRequest("resource/sound/sound.mp3"));
```
3、通过 res 加载获取

```
class SoundTest extends egret.DisplayObjectContainer {
    constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
    }
    private onAddToStage(event: egret.Event) {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.soundLoad, this);
        this.resourceLoad();
    }
    private async resourceLoad() {
        try {
            await RES.loadConfig("resource/default.res.json", "resource/");
            await RES.loadGroup("audios");
        } catch (err) {
            
        }
    }
    private soundLoad() {
        let sound: egret.Sound = RES.getRes('shortSound');
        sound.play(0,1);
    }
}
```
##### 播放

play 的2个参数。

```
startTime：声音开始播放的位置，默认为0。
loops：声音播放的次数，小于等于0均为无限循环播放，大于0按照对应的值播放次数

sound.play(0,1);
```

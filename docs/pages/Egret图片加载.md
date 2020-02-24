### Egret 图片加载
#### 图片对象类
##### 1. 得到一个位图对象
```
private img:egret.Bitmap = new egret.Bitmap();
```

##### 2. 指定纹理的方式是设置 Bitmap 中的 texture 属性

```
img.texture = RES.getRes("图片ID");
```

##### 3. default.res.json文件说明

{
    "resources":
    [
        {"name":"bgImage","type":"image","url":"assets/bg.jpg"},
        {"name":"egretIcon","type":"image","url":"assets/egret_icon.png"},
        {"name":"description","type":"json","url":"config/description.json"}
    ],
    "groups":
    [
        {"name":"preload","keys":"bgImage,egretIcon"}
    ]
}

- name：对应资源的唯一ID编号。
- type：资源类型
- url：当前资源的路径

##### 4. 使用异步加载
```
private async loadResource() {
    try {
        await RES.loadConfig("resource/default.res.json", "resource/");
        await RES.loadGroup("preload", 0);
    }
    catch (e) {
        console.error(e);
    }
}
```
- 加载完成
    
```
RES.addEventListener( RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this );
```

- 预加载

```
RES.addEventListener( RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this );
```

- 加载失败

```
RES.addEventListener( RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadErr, this );
```
##### 5. 获取资源的几种方式

```
private onGroupComplete(){
    let img:egret.Bitmap = new egret.Bitmap();
    img.texture = RES.getRes("bg_jpg");
    this.addChild(img);
}
```
同步加载
```
RES.getRes(name:string):any
```
异步加载

```
RES.getResAsync(name:string,compFunc:Function,thisObject:any):void
```
网络加载

```
RES.getResByUrl(url:string,compFunc:Function,thisObject:any,type:string=””):void
```

#### 九宫格
![image](http://edn.egret.com/cn/data/upload/ueditor/20150527/556564e1e68d5.png)
```
var rect:egret.Rectangle = new egret.Rectangle(30,31,40,41);
img2.scale9Grid =rect;
```
- 30：区域1 的宽度值。
- 31：区域1 的高度值
- 40：区域2 的宽度值
- 41：区域4 的高度值


#### 填充方式

- 第一种是拉伸图像以填充区域(默认是第一种)
- 第二种是重复图像以填充区域

```
对象.fillMode = egret.BitmapFillMode.REPEAT;
```
```
class FillModeTest extends egret.DisplayObjectContainer {
    constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
    }

    private onAddToStage() {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.imgLoad, this);
        this.resourceLoad();
    }

    private async resourceLoad() {
        await RES.loadConfig("resource/default.res.json", "resource/");
        await RES.loadGroup("up_d");
    }

    private imgLoad() {
        let img: egret.Bitmap = new egret.Bitmap();
        img.texture = RES.getRes('news_detail_up_d');
        img.fillMode = egret.BitmapFillMode.REPEAT;
        img.width *= 2;
        img.height *= 3;
        this.addChild(img);
    }
}
```

### 获取图片集

- 使用`TexturePacker`软件导出 json和合并完的图片。
- 将导出的文件放入到assets文件夹下
- 配置文件

```
{
    "resources":[
            {"name":"dogs","type":"sheet","url":"assets/dogs.json"}
    ],
    "groups":[
            {"name":"preload","keys":"dogs"}
    ]
}
```
- 代码使用

```
class BitMapsTest extends egret.DisplayObjectContainer {
    constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage() {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.imgLoad, this)
        this.resourceLoad();
    }

    private async resourceLoad() {
        try {
            await RES.loadConfig("resource/default.res.json", "resource/");
            await RES.loadGroup("icons");
        } catch (error) {
            
        }
    }

    private imgLoad() {
        let imgs: egret.SpriteSheet = RES.getRes("mom_json"),
            img: egret.Bitmap = new egret.Bitmap();
        img.texture = imgs.getTexture('sign-check-icon')
        this.addChild(img);
    }
}
```
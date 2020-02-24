### WEEX 基础
#### 一、开发环境配置

##### **1.** 安装 **node** ：下载地址：[**https://nodejs.org/en/download/**](https://nodejs.org/en/download/)

##### **2.** 安装 **Java** 的环境： 下载地址：[**http://www.java.com/zh\_CN/**](http://www.java.com/zh_CN/)

##### **3.** 安装 **weex-toolkit**


```
npm install weex-toolkit -g
```


查看版本：
```
weex -v
```


##### **4.** 安装全局的 **webpack**


```
npm install webpack -g
```


##### **5.** 安装 **android-studio**

==在安装过程中，你需要记录 一下SDK的安装位置==


```
(C:\Users\Administrator\AppData\Local\Android\sdk)
```
，安装好后，我们要配置环境变量量。安装时你最好关闭杀毒软件或者360卫 士这样的软件，因为他会组织android-studio 一些
关键位置的写 入，导致安装后出现未知错误。

**配置环境变量量：**

打开环境变量路径：控制面板-系统和安全-系统-高级系统设置-环境变量。

新建：ANDROID_HOME 并把我们刚才赋值的sdk路径作为值插入。

添加platform-tools和tools到path下（这个看视频吧，每个人的路径不一样，结果也不一样）。

AndroidStudio配置：

在AndroidStudio的欢迎界 面，你需要点击右下 方的Configure进 行行 老老版本的SDK tool配置，

步骤：Configure-SDKManager-SDK Tools-勾选show Package Details -勾选23.0.2
然后进入安装。

然后进 入安装。

##### **6.** 建 立 **weex** 项 目 目录


```
weex create helloWeex
```


输 入完这条命令时，如果你没有安装weexpack，他会提醒你进 行行安装，这个weexpack也可以 自 己单独安装。


```
npm install weexpack -g
```

cd到项 目 目录下，然后使 用npm install安装依赖包了了。

##### **7.** 添加 **Android** 应用支持

这 里里我们添加Android的 支持。


```
weex platform add android
```


##### **8.** 在 **Android Studio**里运行**weex**

然后选择你 用weex创建的项 目下的platforms/android 目录，打开项 目。这时候坑就来了了，会报好多错误，但是你不不要惊慌，双击安装就好。

**AVD** 虚拟机的安装

等待错误和loading条消失以后，就可以配置虚拟机了，选择菜单栏里的Tools-Android-AVD Manager 进行配置。

配置虚拟机是注意（BIOS报错）F1或F2区找到CPU虚拟机开启 一下就好了了

##### **9.weex** 常用命令和热更更新

```
npm run dev
```
我们在开始项 目编写时，第 一个要在命令 行行输 入的命令就是这个，这个命令输 入后，会给我们进 行行实时的压缩混淆操作（也叫编译操作）， 生

成dist 目录下的index.js 文件和index.web.js 文件。

```
npm run server
```
虽然可以 用Android Studio进 行行看效果，但是我们还是需要 一个web端来 支持我们开发预览的，这时候我们可以启 用npm run server 来解决问题，他会给我们在浏览器 中打开我们的vue 页 面（但是需要注意的是，你现在看到的并不不是程序的最终样式和结果）。


```
npm run build
```
在运 行行webpack时，发现npm run build  里里的命令执 行行的就是webpack命令，那我们改造 一下,我们在代码中加上–watch。

 
```
"scripts": {
    "build": "webpack --watch",
    "build_plugin": "webpack --config ./tools/webpack.config.plugin.js --color",
    "dev": "weex-builder src dist -w",
    "serve": "webpack-dev-server --config webpack.dev.js -p --open"
}
```


 **自动热更更新**

webpack-dev-server模式，只要在地址栏上加上这个，就可以实现热更更新了了。如果你还不不了了解webpack可以先看看我以前的课程。现在可以关掉npm run dev 这个窗 口了了，我们只通过npm run build和npm run serve就可以实现开发热更更新预览了了。

##### **10.Android Studio** 开发设置

- 1.我们先打开我们的Android Studio，启动AVD。把我们在 工程项 目 里里的dist/index.js 文件内容，复制到Android Studio下的==app/assets/dist/index.js==中
- 2.保存后，点击工具栏上的⚡（闪电）符号进行更新。就可以预览到原生的真实效果了。
- 3.如何修改图标
> 现在你看到的app图标还是weex自带的图标，修改这个图片很简单。他存放在Android Studio 工程目录下的app/res/mipmap/ic_launcher.png文件夹中。可以根据这些图片的大小更换需要的图片。
- 4.打包成Apk
> 打包操作很简单，只要点击菜单栏中的Build/build Apk 就可以了。打包完成后在Android Studio右下角会有提示，并可以点击查看我们打包成功的Apk。打包好后，可以拷贝到andorid手机上进行安装了。

##### **11.** 用 **weex init** 命令搭建开发环境

个人总结使用weex init

- 1.初始化项目
```
weex init xxxx
```
- 2.启动服务
```
npm run serve
```
- 3.打包构建
```
npm run build
```

==第二步和第三不尽量不要反了，会报错==

#### 二、项目开发
##### 1.布局的不同
- a.flex布局;
- b.不支持百分数
- c.长度单位只支持px
- d.模版里（template）最外层标签只能用`<div>`标签来表示，其他标签都会报错，这是weex里的一个小坑，需要你注意。
- e.在写Css样式时，必须使用类名或者ID进行设置，其他选择器不起作用

##### **2.**** Text**组件

- **a.** 在 **weex** 中使 用 文本，必须 用 **text** 组件

- **b.text** 组件提供 一个 **lines** 的样式,超出显示省略略号

##### **3.**** Input**组件
- a.我们在weex中<input>标签必须写成闭合形式,例如<input/>。如果不闭合在手机或者模拟器中是渲染不出来的，会一直显示加载。
- b.在开发中你使用网页预览时，由于是模拟的客户端，所以会出现很多奇怪的错误，建议在网页端预览后到虚拟机进行预览。
    * 在网页端预览时是不能进入输入框的，但是不要紧，在浏览器中就可以识别了。
    * 输入过长时，会出现布局错乱，这也是假象，不要在意。

##### **4.** 内建模块

要使 用内建模块，必须先要引 入。

- a.toast(options)会在一个小浮层里展示关于某个操作的简单反馈

```
var modal = weex.equireModule('modal');
message {string}：展示的内容
duration {number}：展示的持续时间（以秒为单位）
var modal = weex.requireModule('modal')
modal.toast({
    message: 'This is a toast',
    duration: 0.3
})
```

- b.alert(options,callback)警告框

    *   message {string}：警告框内显示的文字信息
    
        *   okTitle {string}：确定按钮上显示的文字信息，默认是“OK”
        
        *   duration: 时间设置
    
    *   callback {Function}：用户操作完成后的回调

- c.confirm(options, callback)确认框

    *   options {object}：confirm 选项
    
        *   message {string}：确认框内显示的文字信息
        
        *   okTitle {string}：确认按钮上显示的文字信息，默认是 OK
        
        *   cancelTitle {string}：取消按钮上显示的文字信息，默认是 Cancel

    *   callback {function(result)}：用户操作完成后的回调，回调函数的参数 result 是确定按钮上的文字信息字符串

- d.prompt(option, callback)提示框
    - options {object}：prompt 选项
        - message {string}：提示框内要显示的文字信息
        - okTitle {string}：确认按钮上显示的文字信息，默认是 OK
        - cancelTitle {string}：取消按钮上显示的文字信息，默认是 Cancel
    - callback {function (ret)}：用户操作完成后的回调，回调函数的参数 ret 格式形如 { result: 'OK', data: 'hello world' }，如下：
    - result {string}：用户按下的按钮上的文字信息
    - data {string}：用户输入的文字信息

- e.clipboard 剪贴板

==只是支持文本拷贝==

首先要引入 clipboard 模块 

```
const clipboard = weex.requireModule('clipboard');
```

复制：

```
clipboard.setString('复制的字符串');
```

粘贴： 

```
clipboard.getStirng(ret=>{
    console.log(ret.data,ret.result);
})
```

ret.data 是粘贴的数据
ret.result 是返回是否粘贴成功

- **f.WXEnvironment** 环境 **weex** 没有 **window screen**

1. weexVersion: WeexSDK 的版本。
1. appName: 应用的名称。
1. appVersion: 应用的版本。
1. platform: 运行平台，可能的值是 Web 、Android 、iOS 之一。
1. osName: 系统的名称。
1. osVersion: 系统版本。
1. deviceWidth: 设备宽度。
1. deviceHeight: 设备高度。
 

##### **5.Image** 和 **video** 组件

- image的属性
    - placeholder：占位图的 URL，当由 src 表示的图片下载完成并展示后将被删除。
    - resize： 
        - contain：缩放图片以完全装入`<image>`区域，可能背景区部分空白。
        - cover：缩放图片以完全覆盖`<image>`区域，可能图片部分看不见。
        - stretch：默认值. 按照`<image>`区域的宽高比例缩放图片。
    - src：要显示图片的 URL，该属性是 `<image>`组件的强制属性。
>     这里需要注意的是，这是一个双标签组件，但是在两个`<image>` 中间不能放入其它任何东西

- video的属性
==`<text>` 是唯一合法的子组件。==
    - src {string}：内嵌的视频指向的URL
    - play-status {string}：可选值为 play | pause，用来控制视频的播放状态，play 或者 pause，默认值是 pause。
    - auto-play {boolean}：可选值为 true | false，当页面加载初始化完成后，用来控制视频是否立即播放，默认值是 false。
    - start：当 playback 的状态是 Playing 时触发
    - pause：当 playback 的状态是 Paused 时触发
    - finish：当 playback 的状态是 Finished 时触发
    - fail：当 playback 状态是 Failed 时触发

##### **6.list** 和 **cell** 组件

`<list>`就相当于我们在html中的ul标签

`<cell>`就相当于我们在html中的li标签

> 需要注意的是并不需要给`<list>`和`<cell>`增加额外的css样式，而是把样式都写在`<div>`中，如果样式加在list或者cell上会出现比如margin不起作用的问题；

##### **7.** 上拉加载和下拉刷新`<loading><refresh>`

- a.在浏览器中操作测试的时候，要使用8081的手机模式下测试，不要使用Weex Preview来测试，否则会没有效果；
- b.loading的显示隐藏是使用display属性，设置show和hide字符串来实现；
 	其中有一个事件叫loading事件

    ```
    <loading class="loading" @loading="loadingFun" :display="showLoading">
      	 <text>正在加载中！</text>
    </loading>
    ```

- c.refresh
    - refresh:下拉刷新时触发，
    - pullingdown：精准下拉，可以获得下拉高度，前后两次滑动距离等详细参数。

    ```
    <refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing">
            <text class="indicator">Refreshing ...</text>
    </refresh>
    ```


##### **8.** 数据请求

a.使用steam

```
const stream = weex.requireModule('stream');
```

b.fetch(options, callback[,progressCallback])
- method {string}：HTTP 方法 GET 或是 POST
- url {string}：请求的 URL
- headers {Object}：HTTP 请求头
- type {string}：响应类型, json,text 或是 jsonp {在原生实现中其实与 json 相同)
- body {string}：HTTP 请求体。
- 注意：
- body 参数仅支持 string 类型的参数，请勿直接传递 JSON，必须先将其转为字符串。
- GET 请求不支持 body 方式传递参数，请使用 url 传参

##### **9.slider** 和 **indicator** 组件说明

a. slider
- auto-play {boolean}：可选值为 true/false，默认的是 false。
该值决定是否自动播放轮播。重置 loadmore 相关的 UI，值不一样就会重置。
- interval {number}：值为毫秒数，此值设定 slider 切换时间间隔。当 auto-play 值为 true 时生效。
- infinite {boolean}：循环播放，可选值为 true/false，默认的是 true。
- offset-x-accuracy {number}0.11+：控制onscroll事件触发的频率，默认值为10，表示两次onscroll事件之间Slider Page至少滚动了10px。注意，将该值设置为较小的数值会提高滚动事件采样的精度，但同时也会降低页面的性能。

b.indicator 组件通常用于显示轮播图指示器效果，必须充当 `<slider>` 组件的子组件使用
- item-color {color}：indicator指示点未被选中时的颜色，默认值为 #CCCCCC
- item-selected-color {color}：indicator指示点被选中时的颜色，默认值为 #444444
- item-size {number}：指示点的半径，默认为 5px

==需要注意的是 indicator 必须是用定位position:absolute;否则在模拟器上显示不出来==；

##### **10.a** 组件说明

```
<a class="button" href="http://192.168.1.8:8080/slider.js">
    <text class="text">跳转轮播图</text>
</a>
```

##### 11.`<web>`组件

**src** 属性：此属性指定嵌 入的web页面url。

三个钩子函数：

1. pagestart:`<web>`组件开始加载时此事件触发。
1. pagefinish:`<web>`组件完成加载时此事件触发。
1. error：如果`<web>`组件出现错误，会发送此事件消息。

#### 四、 **weex-ui**

github地址：weex-ui [https://github.com/alibaba/weex-ui](https://github.com/alibaba/weex-ui)

官网：
[https://alibaba.github.io/weex-ui/#/cn/](https://alibaba.github.io/weex-ui/#/cn/)

实例：
[https://github.com/tw93/weex-ui-demo](https://github.com/tw93/weex-ui-demo)

参考网址：[http://jspang.com/2017/07/12/weex/#14](http://jspang.com/2017/07/12/weex/#14)
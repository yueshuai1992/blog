### WEEX 坑
##### 1.修改默认的菜单
修改文件app\src\main\res\values\styles.xml中的内容
修改为:

```
<style name="AppTheme" parent="Theme.AppCompat.Light.NoActionBar">
    <!-- Customize your theme here. -->
    <item name="colorPrimary">@color/colorPrimary</item>
    <item name="colorPrimaryDark">@color/colorPrimaryDark</item>
    <item name="colorAccent">@color/colorAccent</item>
</style>
```

##### 2.修改默认的顶部色条（状态栏）
> 修改文件app\src\main\res\values\colors.xml：
> 详细查看：http://www.aoaoyi.com/archives/623.html

##### 3.在使用alert,confirm,prompt的callback其实在模拟器中是有值的；但是在浏览器中没有值。

##### 4.所有的组件必须设置大小，否则是不会显示的。

##### 5.布局兼容性：
宽：750px=100%         高：1250px =100%

##### 6.如果报错是[Vue warn]: Cannot find element: #root，那么你就要在 index.vue 中加上  

```
<div id="root"> </div>
```

##### 7.执行weex ./src/index.vue   浏览器显示Weex Preview查看

##### 8.border,margin,padding,等这些属性一定要分开设置

##### 9.weex默认的overflow:hidden; 设置其他的overflow 也不起作用；

##### 10.weex scroll组建 loadmore事件在安卓机上不起作用需要设置loadmoreoffset="1"  值可以随意

##### 11.weex的层级要使用transform: translateZ(100);

##### 12.weex的stream模块的fetch方法在弱网环境下容易请求失败
- 原因在与weex sdk默认设置的时间是3s
- 在stream.fetch()传入timeout请求超时时间为20秒

##### 13.weex使用v-if语法时需要注意在v-if里面的判断内容不加上(),在android部分机型中无法识别
解决方案：使用v-if中加上()

##### 14.weex使用css样式不要这样命名如div，div1，div2，这样做在切换样式时会出现样式混乱的情况
解决方案：不使用1，2，3，这样顺序命名

##### 15. 解决iOS快照问题，默认screenShot =  true,    为快照，如果不需要快照，只是需要在url中加上该参数设置为false,
例如：
[话题频道|weex|https://m.immomo.com/f/mws-dist/pick_topic/pages/video.js?	
_bid=1592&tid=11335&screenShot=false|contacts_profile]";
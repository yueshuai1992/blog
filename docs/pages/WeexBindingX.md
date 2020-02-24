### WEEX BindingX
##### 1. 由客户端同学集成bindingx 到客户端中
##### 2. 前端的使用如下：
- 安装npm依赖

```
$ npm install weex-bindingx --save
```

- 在JS代码中引入BindingX模块

```
import bindingx from "weex-bindingx/lib/index.weex.js";
```

##### 3. 使用
- 获取节点

```
let box = getEl(this.$refs.box);
```

- 绑定事件
    - bindingx.bind({参数},回调函数)
    - 写法：

    ```
    bindingx.bind({
        anchor: box, // anchor指的是事件的触发者，如果是eventType是"orientation"或"timing",则不用填
        eventType: "pan", // 事件类型
        props:  [
            {
            element:  '' ",  // 要改变的视图的引用或者id
            property: "transform.translateX", // 要改变的属性
            expression:  {}  //表达式
            ......
            }
        ]
    },  e=>{
        //回调的状态（比如开始touch  结束touch）通过状态来判断。
        if(e.state ==='end'){
            this.x +=  e.daltaX; // 相对于起始触点的横移（右为负左为正）
            this.y +=  e.deltaY; // 相对于起始触点的纵移（上为负下为正）
        }
    })
    ```

##### 4. API接口定义
###### 1. prepare(params)  传入的是一个对象
    1. 开启绑定，此方法仅用于eventType为pan的情况。其他类型的eventType可不调用此方法。
    2. 参数解析
    ```
    bindingx.prepare({
        anchor: box,  //  anchor指的是事件的触发者
        eventType: "pan"  //  事件类型
    })
    ```
    3. 没有返回值 目前仅手势pan 需要prepare
    
###### 2. bind(params,callback)   （主角）
- 第一个参数是Object
    - eventType 事件类型
    - exitExpression 边界条件
        - transformed (String):  转化后的表达式
        - origin (String): 原始表达式
    - props  运行时参数列表（Array）
        - element(String): 作用的元素(View)
        - property(String): 作用的属性
        - expression(String): 运行时的表达式
        - transformed(String): 转化后的表达式
        - origin(String): 原始表达式
        - config: 额外配置
        - perspective(Int): 透视。用于调整camera位置。
        - transformOrigin(String): 轴心。格式为(left|right|center top|bottom|center)。比如 left center。
        - anchor: 锚点(可选, 目前仅pan/scroll需要指定锚点)		
- 第二个参数是callback
> state 运行时的状态回调,通常包括start|end|exit
- 返回值
    - token: 用于unbind，eventType为pan/scroll时即anchor，timing/orientation时系统生成。(Object类型)
> 注: 对于pan/scroll类型，token即anchor，对同一个anchor多次bind，则会覆盖

###### 3. unbind(params) 解绑指定的ExpressionBinding实例。
- 入参类型: 接收一个参数，类型为Object
- 入参详细说明:
    - params:(Object)
    - token: 由bind方法返回的特定ExpressionBinding实例. (必选)
    - eventType: 事件类型(如pan). (必选)
- 返回值: 无

###### 4. unbindAll()  解绑所有的ExpressionBinding实例
- 入参类型: 无
- 返回值: 无

###### 5. supportFeatures() 返回当前组件支持的EventType列表
- 入参类型: 无
- 返回值:(Array) 支持的EventType列表
- 返回值:(Array) 支持的EventType列表

###### 6. getComputedStyle(ref)返回目标视图的相关属性。
- 入参类型: 接收一个参数，为视图的引用。
- 入参详细说明:
- ref: 视图的引用
- 返回值: Object类型，返回视图的属性集合。属性包括: 
- translateX/translateY/rotateX/rotateY/rotateZ/scaleX/scaleY/opacity/background-color/color。

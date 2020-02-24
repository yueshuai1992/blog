(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{229:function(e,t,a){"use strict";a.r(t);var n=a(28),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h3",{attrs:{id:"weex-bindingx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#weex-bindingx"}},[e._v("#")]),e._v(" WEEX BindingX")]),e._v(" "),a("h5",{attrs:{id:"_1-由客户端同学集成bindingx-到客户端中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-由客户端同学集成bindingx-到客户端中"}},[e._v("#")]),e._v(" 1. 由客户端同学集成bindingx 到客户端中")]),e._v(" "),a("h5",{attrs:{id:"_2-前端的使用如下："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-前端的使用如下："}},[e._v("#")]),e._v(" 2. 前端的使用如下：")]),e._v(" "),a("ul",[a("li",[e._v("安装npm依赖")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ npm install weex-bindingx --save\n")])])]),a("ul",[a("li",[e._v("在JS代码中引入BindingX模块")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('import bindingx from "weex-bindingx/lib/index.weex.js";\n')])])]),a("h5",{attrs:{id:"_3-使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-使用"}},[e._v("#")]),e._v(" 3. 使用")]),e._v(" "),a("ul",[a("li",[e._v("获取节点")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("let box = getEl(this.$refs.box);\n")])])]),a("ul",[a("li",[a("p",[e._v("绑定事件")]),e._v(" "),a("ul",[a("li",[e._v("bindingx.bind({参数},回调函数)")]),e._v(" "),a("li",[e._v("写法：")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('bindingx.bind({\n    anchor: box, // anchor指的是事件的触发者，如果是eventType是"orientation"或"timing",则不用填\n    eventType: "pan", // 事件类型\n    props:  [\n        {\n        element:  \'\' ",  // 要改变的视图的引用或者id\n        property: "transform.translateX", // 要改变的属性\n        expression:  {}  //表达式\n        ......\n        }\n    ]\n},  e=>{\n    //回调的状态（比如开始touch  结束touch）通过状态来判断。\n    if(e.state ===\'end\'){\n        this.x +=  e.daltaX; // 相对于起始触点的横移（右为负左为正）\n        this.y +=  e.deltaY; // 相对于起始触点的纵移（上为负下为正）\n    }\n})\n')])])])])]),e._v(" "),a("h5",{attrs:{id:"_4-api接口定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-api接口定义"}},[e._v("#")]),e._v(" 4. API接口定义")]),e._v(" "),a("h6",{attrs:{id:"_1-prepare-params-传入的是一个对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-prepare-params-传入的是一个对象"}},[e._v("#")]),e._v(" 1. prepare(params)  传入的是一个对象")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('1. 开启绑定，此方法仅用于eventType为pan的情况。其他类型的eventType可不调用此方法。\n2. 参数解析\n```\nbindingx.prepare({\n    anchor: box,  //  anchor指的是事件的触发者\n    eventType: "pan"  //  事件类型\n})\n```\n3. 没有返回值 目前仅手势pan 需要prepare\n')])])]),a("h6",{attrs:{id:"_2-bind-params-callback-（主角）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-bind-params-callback-（主角）"}},[e._v("#")]),e._v(" 2. bind(params,callback)   （主角）")]),e._v(" "),a("ul",[a("li",[e._v("第一个参数是Object\n"),a("ul",[a("li",[e._v("eventType 事件类型")]),e._v(" "),a("li",[e._v("exitExpression 边界条件\n"),a("ul",[a("li",[e._v("transformed (String):  转化后的表达式")]),e._v(" "),a("li",[e._v("origin (String): 原始表达式")])])]),e._v(" "),a("li",[e._v("props  运行时参数列表（Array）\n"),a("ul",[a("li",[e._v("element(String): 作用的元素(View)")]),e._v(" "),a("li",[e._v("property(String): 作用的属性")]),e._v(" "),a("li",[e._v("expression(String): 运行时的表达式")]),e._v(" "),a("li",[e._v("transformed(String): 转化后的表达式")]),e._v(" "),a("li",[e._v("origin(String): 原始表达式")]),e._v(" "),a("li",[e._v("config: 额外配置")]),e._v(" "),a("li",[e._v("perspective(Int): 透视。用于调整camera位置。")]),e._v(" "),a("li",[e._v("transformOrigin(String): 轴心。格式为(left|right|center top|bottom|center)。比如 left center。")]),e._v(" "),a("li",[e._v("anchor: 锚点(可选, 目前仅pan/scroll需要指定锚点)")])])])])]),e._v(" "),a("li",[e._v("第二个参数是callback")])]),e._v(" "),a("blockquote",[a("p",[e._v("state 运行时的状态回调,通常包括start|end|exit")])]),e._v(" "),a("ul",[a("li",[e._v("返回值\n"),a("ul",[a("li",[e._v("token: 用于unbind，eventType为pan/scroll时即anchor，timing/orientation时系统生成。(Object类型)")])])])]),e._v(" "),a("blockquote",[a("p",[e._v("注: 对于pan/scroll类型，token即anchor，对同一个anchor多次bind，则会覆盖")])]),e._v(" "),a("h6",{attrs:{id:"_3-unbind-params-解绑指定的expressionbinding实例。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-unbind-params-解绑指定的expressionbinding实例。"}},[e._v("#")]),e._v(" 3. unbind(params) 解绑指定的ExpressionBinding实例。")]),e._v(" "),a("ul",[a("li",[e._v("入参类型: 接收一个参数，类型为Object")]),e._v(" "),a("li",[e._v("入参详细说明:\n"),a("ul",[a("li",[e._v("params:(Object)")]),e._v(" "),a("li",[e._v("token: 由bind方法返回的特定ExpressionBinding实例. (必选)")]),e._v(" "),a("li",[e._v("eventType: 事件类型(如pan). (必选)")])])]),e._v(" "),a("li",[e._v("返回值: 无")])]),e._v(" "),a("h6",{attrs:{id:"_4-unbindall-解绑所有的expressionbinding实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-unbindall-解绑所有的expressionbinding实例"}},[e._v("#")]),e._v(" 4. unbindAll()  解绑所有的ExpressionBinding实例")]),e._v(" "),a("ul",[a("li",[e._v("入参类型: 无")]),e._v(" "),a("li",[e._v("返回值: 无")])]),e._v(" "),a("h6",{attrs:{id:"_5-supportfeatures-返回当前组件支持的eventtype列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-supportfeatures-返回当前组件支持的eventtype列表"}},[e._v("#")]),e._v(" 5. supportFeatures() 返回当前组件支持的EventType列表")]),e._v(" "),a("ul",[a("li",[e._v("入参类型: 无")]),e._v(" "),a("li",[e._v("返回值:(Array) 支持的EventType列表")]),e._v(" "),a("li",[e._v("返回值:(Array) 支持的EventType列表")])]),e._v(" "),a("h6",{attrs:{id:"_6-getcomputedstyle-ref-返回目标视图的相关属性。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-getcomputedstyle-ref-返回目标视图的相关属性。"}},[e._v("#")]),e._v(" 6. getComputedStyle(ref)返回目标视图的相关属性。")]),e._v(" "),a("ul",[a("li",[e._v("入参类型: 接收一个参数，为视图的引用。")]),e._v(" "),a("li",[e._v("入参详细说明:")]),e._v(" "),a("li",[e._v("ref: 视图的引用")]),e._v(" "),a("li",[e._v("返回值: Object类型，返回视图的属性集合。属性包括:")]),e._v(" "),a("li",[e._v("translateX/translateY/rotateX/rotateY/rotateZ/scaleX/scaleY/opacity/background-color/color。")])])])}),[],!1,null,null,null);t.default=r.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{222:function(v,_,t){"use strict";t.r(_);var a=t(28),s=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h3",{attrs:{id:"js-设计模式定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js-设计模式定义"}},[v._v("#")]),v._v(" JS 设计模式定义")]),v._v(" "),t("h4",{attrs:{id:"一：理解工厂模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一：理解工厂模式"}},[v._v("#")]),v._v(" 一：理解工厂模式")]),v._v(" "),t("blockquote",[t("p",[v._v("工厂模式类似于现实生活中的工厂可以产生大量相似的商品，去做同样的事情，实现同样的效果;这时候需要使用工厂模式。")])]),v._v(" "),t("ul",[t("li",[v._v("优点：能解决多个相似的问题。")]),v._v(" "),t("li",[v._v("缺点：不能知道对象识别的问题(对象的类型不知道)。")])]),v._v(" "),t("blockquote",[t("p",[v._v("复杂的工厂模式定义是：将其成员对象的实列化推迟到子类中，子类可以重写父类接口方法以便创建的时候指定自己的对象类型。")])]),v._v(" "),t("ul",[t("li",[v._v("父类只对创建过程中的一般性问题进行处理，这些处理会被子类继承，子类之间是相互独立的，具体的业务逻辑会放在子类中进行编写。")]),v._v(" "),t("li",[v._v("父类就变成了一个抽象类，但是父类可以执行子类中相同类似的方法，具体的业务逻辑需要放在子类中去实现；比如我现在开几个自行车店，那么每个店都有几种型号的自行车出售。")])]),v._v(" "),t("h4",{attrs:{id:"二：理解单体模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二：理解单体模式"}},[v._v("#")]),v._v(" 二：理解单体模式")]),v._v(" "),t("blockquote",[t("p",[v._v("单体模式提供了一种将代码组织为一个逻辑单元的手段，这个逻辑单元中的代码可以通过单一变量进行访问。")])]),v._v(" "),t("p",[v._v("单体模式的优点是：")]),v._v(" "),t("ul",[t("li",[v._v("可以用来划分命名空间，减少全局变量的数量。")]),v._v(" "),t("li",[v._v("使用单体模式可以使代码组织的更为一致，使代码容易阅读和维护。")]),v._v(" "),t("li",[v._v("可以被实例化，且实例化一次。")])]),v._v(" "),t("h4",{attrs:{id:"三：理解模块模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三：理解模块模式"}},[v._v("#")]),v._v(" 三：理解模块模式")]),v._v(" "),t("p",[v._v("我们通过单体模式理解了是以对象字面量的方式来创建单体模式的")]),v._v(" "),t("h4",{attrs:{id:"四：理解代理模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四：理解代理模式"}},[v._v("#")]),v._v(" 四：理解代理模式")]),v._v(" "),t("blockquote",[t("p",[v._v("代理是一个对象，它可以用来控制对本体对象的访问，它与本体对象实现了同样的接口，代理对象会把所有的调用方法传递给本体对象的；代理模式最基本的形式是对访问进行控制，而本体对象则负责执行所分派的那个对象的函数或者类，简单的来讲本地对象注重的去执行页面上的代码，代理则控制本地对象何时被实例化，何时被使用；我们在上面的单体模式中使用过一些代理模式，就是使用代理模式实现单体模式的实例化，其他的事情就交给本体对象去处理；")])]),v._v(" "),t("p",[v._v("代理的优点：")]),v._v(" "),t("ul",[t("li",[v._v("代理对象可以代替本体被实例化，并使其可以被远程访问；")]),v._v(" "),t("li",[v._v("它还可以把本体实例化推迟到真正需要的时候；对于实例化比较费时的本体对象，或者因为尺寸比较大以至于不用时不适于保存在内存中的本体，我们可以推迟实例化该对象；")])]),v._v(" "),t("h4",{attrs:{id:"五：理解职责链模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五：理解职责链模式"}},[v._v("#")]),v._v(" 五：理解职责链模式")]),v._v(" "),t("blockquote",[t("p",[v._v("优点是：消除请求的发送者与接收者之间的耦合。")])]),v._v(" "),t("p",[v._v("职责连是由多个不同的对象组成的，发送者是发送请求的对象，而接收者则是链中那些接收这种请求并且对其进行处理或传递的对象。请求本身有时候也可以是一个对象，它封装了和操作有关的所有数据，基本实现流程如下：")]),v._v(" "),t("ol",[t("li",[v._v("发送者知道链中的第一个接收者，它向这个接收者发送该请求。")]),v._v(" "),t("li",[v._v("每一个接收者都对请求进行分析，然后要么处理它，要么它往下传递。")]),v._v(" "),t("li",[v._v("每一个接收者知道其他的对象只有一个，即它在链中的下家(successor)。")]),v._v(" "),t("li",[v._v("如果没有任何接收者处理请求，那么请求会从链中离开。")])]),v._v(" "),t("h4",{attrs:{id:"六：命令模式的理解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#六：命令模式的理解"}},[v._v("#")]),v._v(" 六：命令模式的理解")]),v._v(" "),t("blockquote",[t("p",[v._v("命令模式中的命令指的是一个执行某些特定事情的指令。")])]),v._v(" "),t("p",[v._v("命令模式使用的场景有：有时候需要向某些对象发送请求，但是并不知道请求的接收者是谁，也不知道请求的操作是什么，此时希望用一种松耦合的方式来设计程序代码;使得请求发送者和请求接受者消除彼此代码中的耦合关系。")]),v._v(" "),t("p",[v._v("我们先来列举生活中的一个列子来说明下命令模式：比如我们经常会在天猫上购买东西，然后下订单，下单后我就想收到货，并且希望货物是真的，对于用户来讲它并关心下单后卖家怎么发货，当然卖家发货也有时间的，比如24小时内发货等，用户更不关心快递是给谁派送，当然有的人会关心是什么快递送货的; 对于用户来说，只要在规定的时间内发货，且一般能在相当的时间内收到货就可以，当然命令模式也有撤销命令和重做命令，比如我们下单后，我突然不想买了，我在发货之前可以取消订单，也可以重新下单（也就是重做命令）;比如我的衣服尺码拍错了，我取消该订单，重新拍一个大码的。")]),v._v(" "),t("h4",{attrs:{id:"七：模板方法模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#七：模板方法模式"}},[v._v("#")]),v._v(" 七：模板方法模式")]),v._v(" "),t("blockquote",[t("p",[v._v("模板方法模式由二部分组成，第一部分是抽象父类，第二部分是具体实现的子类，一般的情况下是抽象父类封装了子类的算法框架，包括实现一些公共方法及封装子类中所有方法的执行顺序，子类可以继承这个父类，并且可以在子类中重写父类的方法，从而实现自己的业务逻辑。")])]),v._v(" "),t("h4",{attrs:{id:"八：理解javascript中的策略模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#八：理解javascript中的策略模式"}},[v._v("#")]),v._v(" 八：理解javascript中的策略模式")]),v._v(" "),t("p",[v._v("理解javascript中的策略模式")]),v._v(" "),t("blockquote",[t("p",[v._v("策略模式的定义是：定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换。")])]),v._v(" "),t("p",[v._v("使用策略模式的优点如下：\n优点：")]),v._v(" "),t("ol",[t("li",[v._v("策略模式利用组合，委托等技术和思想，有效的避免很多if条件语句。")]),v._v(" "),t("li",[v._v("策略模式提供了开放-封闭原则，使代码更容易理解和扩展。")]),v._v(" "),t("li",[v._v("策略模式中的代码可以复用。")])])])}),[],!1,null,null,null);_.default=s.exports}}]);
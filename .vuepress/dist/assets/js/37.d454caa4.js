(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{225:function(n,e,a){"use strict";a.r(e);var s=a(28),t=Object(s.a)({},(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h3",{attrs:{id:"typescript-类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typescript-类"}},[n._v("#")]),n._v(" TypeScript 类")]),n._v(" "),a("h4",{attrs:{id:"基础用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础用法"}},[n._v("#")]),n._v(" 基础用法")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("class People {\n    name: string;\n    age: number;\n    constructor(name: string, age: number) {\n        this.name = name;\n        this.age = age;\n    }\n    print() {\n        return `${this.name}: ${this.age}`\n    }\n}\nlet p = new People('Jamse', 30);\n")])])]),a("h4",{attrs:{id:"类的继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类的继承"}},[n._v("#")]),n._v(" 类的继承")]),n._v(" "),a("p",[n._v("派生类（子类）Doctor继承与基类（超类）People，通过super() 去复用父类的构造函数。")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("class People {\n    name: string;\n    age: number;\n    constructor(name: string, age: number) {\n        this.name = name;\n        this.age = age;\n    }\n    print() {\n        return `${this.name}: ${this.age}`\n    }\n}\n\nclass Doctor extends People {\n    school: string;\n    constructor(name: string, age: number, school: string, ) {\n        super(name, age);\n        this.school = school;\n    }\n    print() {\n        return `${this.name}: ${this.age}: ${this.school}`\n    }\n}\n\nlet p = new Doctor('李四', 20, 'middleSchool');\nconsole.log(p.print());\n")])])]),a("h4",{attrs:{id:"公共，私有与受保护的修饰符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#公共，私有与受保护的修饰符"}},[n._v("#")]),n._v(" 公共，私有与受保护的修饰符")]),n._v(" "),a("p",[a("strong",[n._v("public | private")]),n._v(":\n以下代码中，public 为公共属性或方法（默认），父类子类都可以访问，private为私有属性或方法，只能在定义类中使用，子类中无法使用。")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("class Dog {\n    public name: string;\n    private age: number;\n    constructor(name: string, age: number) {\n        this.name = name;\n        this.age = age;\n    }\n    sayName() {\n        console.log(`${this.name}:${this.age}`)\n    }\n}\n\nclass SmallDog extends Dog {\n    address: string;\n    constructor(name: string, age: number, address: string) {\n        super(name, age);\n        this.address = address;\n    }\n    sayName() {\n        /*  */// 这里是访问不了age的 属性“age”为私有属性，只能在类“Dog”中访问\n        //console.log(`${this.name}:${this.age}:${this.address}`) \n    }\n}\n\nlet sd: Dog = new SmallDog('lucky', 3, 'huoying');\nsd.sayName();\n")])])]),a("p",[a("strong",[n._v("protected")]),n._v(": protected受保护的属性和方法只能在子类或父类中使用，不能在类外部调用。")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("class Dog {\n    public name: string;\n    protected age: number;\n    constructor(name: string, age: number) {\n        this.name = name;\n        this.age = age;\n    }\n    sayName() {\n        console.log(`${this.name}:${this.age}`)\n    }\n}\n\nclass SmallDog extends Dog {\n    address: string;\n    constructor(name: string, age: number, address: string) {\n        super(name, age);\n        this.address = address;\n    }\n    sayName() {\n        console.log(`${this.name}:${this.age}:${this.address}`) \n    }\n}\n\nlet sd: Dog = new SmallDog('lucky', 3, 'huoying');\nsd.name = 'wangwu'\n// 属性“age”受保护，只能在类“Dog”及其子类中访问\n// sd.age = 20;\nsd.sayName();\n")])])]),a("h4",{attrs:{id:"readonly修饰符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#readonly修饰符"}},[n._v("#")]),n._v(" readonly修饰符")]),n._v(" "),a("p",[n._v("readonly关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("class Dog {\n    public name: string;\n    protected age: number;\n    readonly attr: string = '动物';\n    constructor(name: string, age: number) {\n        this.name = name;\n        this.age = age;\n    }\n    sayName() {\n        // 只读属性是赋值不了的\n        // this.attr = '222'\n        console.log(`${this.name}:${this.age}`)\n    }\n}\n")])])]),a("h4",{attrs:{id:"存取器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存取器"}},[n._v("#")]),n._v(" 存取器")]),n._v(" "),a("p",[n._v("set 和 get 截取对对象成员的访问。 它能帮助你有效的控制对对象成员的访问")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("et passcode: string = '123131313';\nclass Circle {\n    private _fullName: string = '';\n    \n    set fullName(newName : string) {\n        if(passcode) {\n            this._fullName = newName;\n        }else{\n            console.log('ERROR!');\n        }\n    }\n    \n    get fullName() : string {\n        return this._fullName\n    }\n\n    sayName() {\n        console.log(`${this._fullName}`)\n    }\n}\n\nlet C = new Circle();\nC.fullName = 'bob';\nC.sayName(); // bob\n")])])])])}),[],!1,null,null,null);e.default=t.exports}}]);
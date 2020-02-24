### TypeScript 基础
##### 安装typescript
    npm i typescript -g
##### 初始化tsconfig.json
    tsc -init
###### 解决模块的声明文件问题
    npm i @types/node -D
##### 编译ts文件
    tsc -p tsconfig.json
##### 定义
    var str:string = 'hello world';
    console.log(str);
##### 数据类型

- Undefined :
- Number:数值类型;
- string : 字符串类型;
- Boolean: 布尔类型；
- enum：枚举类型；
- any : 任意类型，一个牛X的类型；
- void：没有任何类型；
- Array : 数组类型;
- Tuple : 元祖类型；
- Null ：空类型。

##### 数组
第一种：
```
let lists: number[] = [1, 2, 3];
```
第二种：
```
let lists: Array<number> = [];
```
##### 元组
```
let x: [string, number];
x = ['hello', 10];
```

##### 枚举类型
定义一些带名字的常量

    enum PERSION {man="男人",woman="女人",mid="中性"};
    console.log(PERSION.mid)
    // 自增长
    enum NUM {top=1,bottom,left,right};
    console.log(NUM.right)

##### 函数定义

注意返回值的类型，注意传入参数的类型。

```
function serarchGirle(age: number):string {
    return 'This is ' + age + '岁女孩！！！'
}

var age:number = 18;

var result:string = serarchGirle(age);

console.log(result)
```
- 有可选参数的函数(使用?号)

```
function serarchGirle(age: number, stature?: string): string {
    let str:string = '';
    str = `这是一个${age}岁的小姐姐`;
    if (typeof stature !== 'undefined') str += stature;
    return str;
}

let age: number = 20;
let result: string = serarchGirle(age, '大长腿');

console.log(result)
```
- 有默认参数的函数

```
function serarchGirle(age: number=20, stature?: string): string {}
```
- 有剩余参数的函数

```
function searchXiaoJieJie3(...xuqiu:string[]):string{}
```
##### 函数的三种定义方式

- 函数声明法
```
function add(num1: number, num2: number): number {
    return num1 + num2;
}
```
- 函数表达式法

```
let add2 = function (num1: number, num2: number): number {
    return num1 + num2
}
```
- 箭头函数法

```
let add3 = (num2: number, num1: number): number => {
    return num1 + num2;
}
```


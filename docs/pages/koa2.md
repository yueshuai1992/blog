### Koa2
#### 1. 搭建环境
###### 新建文件夹
    mkdir  koa2
###### 注意不要使用koa  否则你下载不了包。
###### 初始化package.json
    npm init -y
###### 安装生产环境的koa
    npm install --save koa
#### 2.第一个demo
    const Koa = require('koa');
    const app = new Koa();
    
    app.use(async(ctx)=>{
        ctx.body = 'hello koa2'
    })

    app.listen(3000);
    console.log('server start')
#### 3. koa 的get 请求
######     koa2 中的get获取到的request有俩种，一种是query，另一种是querystring;
- query 是一个json对象
- querystring 是一个json字符串
######     获取方式有两种： 
- 通过ctx.request
- 通过ctx直接获取
>
    const Koa = require('koa');
    const app = new Koa();
    app.use(async(ctx)=>{
        let url =ctx.url;
        //从request中获取GET请求
        let request =ctx.request;
        let req_query = request.query;
        let req_querystring = request.querystring;
        //从上下文中直接获取
        let ctx_query = ctx.query;
        let ctx_querystring = ctx.querystring;
        ctx.body={
            url,
            req_query,
            req_querystring,
            ctx_query,
            ctx_querystring
        }
    });
    app.listen(3000,()=>{
        console.log('[demo] server is starting at port 3000');
    });
#### 4.koa的POST 请求
###### Koa2中提供了ctx.method属性，可以轻松的得到请求的类型
    app.use(async (ctx) => {
        if (ctx.url === '/' && ctx.method === 'GET') {
            ctx.body = `
                <html>
                    <form method="POST" action="/">
                        <p>用户名</p>
                        <input name="userName"/><br/>
                        <p>年龄</p>
                        <input name="age"/><br/>
                        <button type="submit">提价</button>
                    </form
                </html
            `
        } else if (ctx.url === '/' && ctx.method === 'POST') {
            ctx.body = "接收到了POST请求！！"
        } else {
            ctx.body = "404!!"
        }
    })

#### 5.使用koa-bodyparser获取request数据
###### 首先要下载koa-bodyparser组件
    npm install koa-bodyparser --save
###### 必须得使用bodyparser才生效
    const bodyParser = require('koa-bodyparser');
    app.use(bodyParser());
###### 使用demo （ctx.request.body）
    const Koa = require('koa');
    const bodyParser = require('koa-bodyparser');
    const app = new Koa();
    
    app.use(bodyParser());
    
    app.use(async (ctx) => {
        if (ctx.url === '/' && ctx.method === 'GET') {
            ctx.body = `
                <html>
                    <form method="POST" action="/">
                        <p>用户名</p>
                        <input name="userName"/><br/>
                        <p>年龄</p>
                        <input name="age"/><br/>
                        <button type="submit">提价</button>
                    </form
                </html
            `
        } else if (ctx.url === '/' && ctx.method === 'POST') {
            let bodyQuery = ctx.request.body;
            ctx.body = bodyQuery;
        } else {
            ctx.body = "404!!"
        }
    })
    
    app.listen(3000,()=>{
        console.log('node start server port 3000')
    })
#### 6.原生路由实现
    使用 let iconv = require('iconv-lite'); 进行字体的转码
     data = iconv.decode(data, 'utf-8');
###### Demo
    const Koa = require('koa');
    const fs = require('fs');
    const iconv = require('iconv-lite');
    const app = new Koa();
    
    function render(page) {
        return new Promise((resolve, reject) => {
            let pageUrl = `./page/${page}`;
            fs.readFile(pageUrl, "binary", (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    data = iconv.decode(data, 'utf-8');
                    resolve(data);
                }
            })
        })
    }
    
    async function route(url) {
        let html = '404.html'
        switch (url) {
            case '/':
                html = 'index.html';
                break;
            case '/news':
                html = 'news.html';
                break;
            case '/content':
                html = 'content.html';
                break;
            case '/strange':
                html = 'strange.html';
                break;
            default:
                break;
        }
        let page = await render(html);
        return page
    }
    
    app.use(async(ctx) => {
        let url = ctx.request.url;
        let html = await route(url);
        ctx.body = html;
    })
    
    app.listen(3000, () => {
        console.log('node server at port 3000!')
    })
#### 7.koa-router
- koa-router 是生产环境中使用
> npm install koa-router --save
- router 使用
> const koaRouter = require('router');

> const router = new koaRouter();
- 配置路由
>   router.get('/', async(ctx, next) => {
        ctx.body = 'Hello World!!!!'
    })
- 路由使用
> app
    .use(router.routes())
    .use(router.allowedMethods());

###### Demo
    const Koa = require('koa');
    const koaRouter = require('koa-router');
    
    const app = new Koa();
    const router = new koaRouter();
    
    router.get('/', async(ctx, next) => {
        ctx.body = 'Hello World!!!!'
    })
    
    app
        .use(router.routes())
        .use(router.allowedMethods());
    
    app.listen(3000, () => {
        console.log('node server at port 3000')
    })
#### 8.koa-router 的层级
###### 设置前缀
    const router = new Router({
        prefix:'/jspang'
    })
###### 设置多级路由
    const Koa = require('koa');
    const koaRouter = require('koa-router');
    
    const app = new Koa();
    
    let home = new koaRouter();
    home.get('/home', async(ctx) => {
        ctx.body = "Home home";
    }).get('/todo', async(ctx) => {
        ctx.body = 'Home ToDo';
    })
    
    let page = new koaRouter();
    page.get('/home', async(ctx) => {
        ctx.body = "Page home";
    }).get('/todo', async(ctx) => {
        ctx.body = 'Page ToDo';
    })
    
    let router = new koaRouter();
    router.use('/index', home.routes(), home.allowedMethods());
    router.use('/page', page.routes(), page.allowedMethods());
    
    app.use(router.routes()).use(router.allowedMethods());
    
    app.listen(3000, () => {
        console.log('node server at port 3000')
    })
#### 9.koa 中使用cookie
- ctx.cookies.get(name,[optins]):读取上下文请求中的cookie。
- ctx.cookies.set(name,value,[options])：在上下文中写入cookie。
###### 写入Cookie操作
- domain：写入cookie所在的域名
- path：写入cookie所在的路径
- maxAge：Cookie最大有效时长
- expires：cookie失效时间
- httpOnly:是否只用http请求中获得
- overwirte：是否允许重写
###### demo
    const Koa = require('koa');
    const app = new Koa();
    
    app.use(async(ctx) => {
        if (ctx.request.url === '/index') {
            ctx.cookies.set(
                'name',
                'yueshuai', {
                    domain: '127.0.0.1', // 写cookie所在的域名
                    path: '/index', // 写cookie所在的路径
                    maxAge: 1000 * 60 * 60 * 24, // cookie有效时长
                    expires: new Date('2018-12-31'), // cookie失效时间
                    httpOnly: false, // 是否只用于http请求中获取
                    overwrite: false // 是否允许重写
                }
            )
            ctx.body = 'cookie set ok';
        } else {
            let message = ctx.cookies.get('name');
            if (message) {
                ctx.body = ctx.cookies.get('name');
            } else {
                ctx.body = "cookie get none";
            }
        }
    })
    
    app.listen(3000, () => {
        console.log('node server start at port 3000')
    })

#### 10.koa-static静态资源中间件
###### 安装 koa-static
> 	npm install --save koa-static

```
const Koa = require('koa'),
    router = require('koa-router'),
    static = require('koa-static');

let app = new Koa();

app.use(static(__dirname+'/static'));

app.listen('3000');

console.log('服务器启动成功~')
```

#### 11.中间件处理

###### 应用级中间件
```
app.use(async (ctx, next)=> {
    console.log('这个是中间件！！！')
    await next();
    console.log('匹配完成后再次执行中间件！！')
})
```
###### 路由级中间件
```
router.get('/news', async(ctx,next)=>{
    console.log('路由级中间件');
    await next();
})
router.get('/news', async(ctx)=>{
    ctx.body = '这是一个新闻！'
})
```
##### 错误处理中间件

**先执行app.use 再匹配路由**
```
app.use(async (ctx, next)=>{
    console.log('这是一个中间件');
    
    await next();

    if(ctx.status === 404) {
        ctx.body = '404 ERROR'
    }else {
        console.log(ctx.url)
    }
})
```
#### 11.ejs 模版使用
```
npm i koa-views ejs --save
```
```
// app.use(view(__dirname,{extension: 'ejs'}))
// 方法一  这样配的模板名是html
app.use(views('page', { map: { html: 'ejs' } }));
// 方法二  可以指定后缀名
app.use(views('page',{
    extension: 'html'
}))

```
```
await ctx.render('index');
```
###### 渲染
```
router.get('/', async (ctx, next) => {
    // 使用ejs数据
    await ctx.render('news', {
        title: 'Hello ejs!!!'
    });
})
```
###### ejs使用
1. 循环数据

```
<ul>
    <%for(var i=0; i<lists.length; i++){%>
        <li><%=lists[i]%></li>
    <%}%>
</ul>
```

2. 判断语句
```
<%if(number === 10) {%>  
    <div>是10</div>  
<%}else{%>
    <div>不是10</div>
<%}%>
```
3. 引入模板

```
<%- include header.ejs %>
```

4. 绑定数据

```
<%=h%>
```
###### 公共数据(所有路由的数据都可以使用)
```
app.use(async (ctx, next)=>{
    ctx.state = {
        name: '王五'
    }
    await next();
})
```
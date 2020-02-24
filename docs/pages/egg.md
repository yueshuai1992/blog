### Egg.js
- 创建egg的环境

    ```
    sudo npm i egg-init -g
    ```
- 创建文件夹

    ```
    mkdir egg-example && cd egg-example
    ```
    
- 初始化模板
       
    ```
    egg-init --type=simple
    ```
    或
    ```
    npm init egg --type=simple
    ```

- 安装依赖

    ```
    npm install
    ```

- 启动

    ```
    npm run dev
    ```

- 创建路由
    - 建议分开router 创建routers文件夹，将路由文件放入放到特定文件
    - 编写路由 如：home.js
        ```
        'use strict';
        
        /**
         * @param {Egg.Application} app - egg application
         */
        module.exports = app => {
          const { router, controller } = app;
          router.get('/hot', controller.home.findHot);
          router.get('/heart', controller.home.findHeart);
        };
        ```
    - 引用路由加使用 如：router.js
        ```
        'use strict';
        
        var homeRouter = require('./routers/home.js');
        
        /**
         * @param {Egg.Application} app - egg application
         */
        module.exports = app => {
          const { router, controller } = app;
          router.get('/', controller.home.index);
          homeRouter(app);
        };
        ```
    
- 创建Service
    -  创建service文件夹
    -  创建单个的service文件
    -  引入文件
        ```
        const Service = require('egg').Service;
        ```
    - 添加service方法+导出
        ```
        class HomeService extends Service {
            async findHot() {
                const lists = [
                    {
                        name: '张三',
                        age: 20,
                        address: '南京'
                    }
                ]
        
                return lists;
            }
        }
        
        module.exports = HomeService;
        ```

- 创建Controller
    -  创建controller文件
    -  引入service使用
        ```
        'use strict';
        
        const Controller = require('egg').Controller;
        
        class HomeController extends Controller {
          async findHot() {
            this.ctx.body = await this.service.home.findHot();
          }
        }
        
        module.exports = HomeController;
        ```
- 格式化参数中间件
    - 创建 params 文件
        ```
        /**
         * 获取请求参数中间件
         * 可以使用ctx.params获取get或post请求参数
         */
        
        module.exports = options => {
            return async function params(ctx, next) {
                ctx.params = {
                    ...ctx.query,
                    ...ctx.request.body
                }
                await next();
            };
        };
        ```
    - 在/config/config.default.js里注入中间件
        ```
        'use strict';
        module.exports = appInfo => {
          const config = exports = {};
        // 注入中间件
          config.middleware = [
            'params',
          ];
          return config;
        };
        ```
    - 使用
        ```
        async findOne() {
            const {
                ctx
            } = this;
            let {
                id
            } = ctx.params;
            return {
                message: '获取单个用户' + id,
                code: 200
            }
        }
        ```

- post 不能访问的问题
    
    打开config.default.js 中禁用 csrf
    
    ```
    const config = exports = {
        security: {
          csrf: {
            enable: false,
          },
        }
    };
    ```

- 连接数据库
    ```
    npm i egg-mongoose --save
    ```
    - 加载插件app/config/plugin.js
        ```
        'use strict';
        module.exports = {
          // enable plugins 
          mongoose: {
            enable: true,
            package: 'egg-mongoose',
          },
        };
        ```
    - 配置MongoDB 的连接, 修改app/config/config.default.js
        ```
        config.mongoose = {
            client: {
              url: 'mongodb://127.0.0.1/react-native-demo',
              options: {},
            },
        };
        ```
- 创建model文件夹
    - 创建model文件
    ```
    'use strict';
    module.exports = app => {
      const mongoose = app.mongoose;
      const Schema = mongoose.Schema;
    
      const UserSchema = new Schema({
        userName: { type: String },
        password: { type: String },
      });
    
      return mongoose.model('User', UserSchema);
    };
    ```
    - 在service层使用
    ```
    await this.ctx.model.User.find();
    ```
- egg 跨域
    - 安装egg-cors
    ```
    npm i egg-cors -S
    ```
    - 在config/plugin.js声明
    ```
    exports.cors = {
        enable: true,
        package: 'egg-cors',
    };
    ```
    - 在config/config.default.js配置
    ```
    //跨域配置
    config.security = {
        csrf: {
          enable: false,
          ignoreJSON: true
        },
        domainWhiteList: ['http://www.baidu.com', 'http://localhost:8080'], //配置白名单
    };
      
    config.cors = {
        // origin: '*', //允许所有跨域访问，注释掉则允许上面 白名单 访问
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
    };
    ```

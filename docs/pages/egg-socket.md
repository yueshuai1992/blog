### Egg-Socket
- 安装

```
$ npm i egg-socket.io --save
```
- 开启插件：plugin.js

```
io: {
    enable: true,
    package: 'egg-socket.io',
}
```

- 配置插件
```
// {app_root}/config/config.${env}.js
exports.io = {
  init: { }, // passed to engine.io
  namespace: {
    '/': {
      connectionMiddleware: [],
      packetMiddleware: [],
    },
    '/example': {
      connectionMiddleware: [],
      packetMiddleware: [],
    },
  },
};
```
- 在app下新建文件夹 io 同时新建 middleware contorller

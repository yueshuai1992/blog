module.exports = {
    title: '岳帅的博客',
    description: '岳帅的个人技术博客，包括前端基础、Vue、Weex、Flutter...',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
      ['link', { rel: 'icon', href: '/logo.png' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/', // 这是部署到github相关的配置
    markdown: {
      lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '前端技术', link: '/pages/' },
            { text: '个人文章', items: [
                { text: 'GitHub', link: 'https://github.com/yueshuai1992' },
            ]}
        ],
        sidebar: [
            {
                title: 'TypeScript',
                collapsable: true, //是否展开
                children: [
                    'pages/',
                    'pages/接口',
                    'pages/泛型',
                    'pages/类'
                ]
            },
            {
                title: 'JS设计模式',
                collapsable: true, //是否展开
                children: [
                    'pages/JS设计模式定义',
                    'pages/JS工厂模式',
                    'pages/JS享元模式',
                    'pages/JS通用单例模式',
                    'pages/JS惰性单例',
                    'pages/JS策略模式'
                ]
            },
            {
                title: 'MongoDB',
                collapsable: true,
                children: [
                    'pages/MongoDB命令',
                    'pages/MongoDB基础',
                    'pages/Moogoose模块'
                ]
            },
            {
                title: 'Node',
                collapsable: true,
                children: [
                    'pages/koa2',
                    'pages/egg',
                    'pages/egg-socket'
                ]
            },
            {
                title: 'Weex',
                collapsable: true,
                children: [
                    'pages/Weex原生组件开发',
                    'pages/Weex基础',
                    'pages/Weex坑',
                    'pages/WeexBindingX'
                ]
            },
            {
                title: 'Flutter',
                collapsable: true,
                children: [
                    'pages/Flutter基础一',
                    'pages/Flutter基础二',
                    'pages/Flutter基础三',
                    'pages/Flutter面试题',
                    'pages/Dart面试题',
                ]
            },
            {
                title: 'Egret',
                collapsable: true,
                children: [
                    'pages/Egret基础',
                    'pages/Egret绘制文本',
                    'pages/Egret绘制图形',
                    'pages/Egret影视频',
                    'pages/Egret图片加载',
                    'pages/Egret动画和倒计时'
                ]
            },
        ]
    }
  };
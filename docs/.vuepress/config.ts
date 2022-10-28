import { defineUserConfig, defaultTheme } from 'vuepress';
const { docsearchPlugin } = require('@vuepress/plugin-docsearch');
const { shikiPlugin } = require('@vuepress/plugin-shiki');

export default defineUserConfig({
  // 语言
  lang: 'zh-CN',
  // 标题
  title: '你好,世界',
  // 描述
  // description: '莫忘少年凌云志,曾许天下第一流',
  // 修改完后打开
  open: false,
  //导航栏icon
  head: [['link', { rel: 'icon', href: 'https://vuejs.org/images/logo.png' }]],
  plugins: [
    docsearchPlugin({
      placeholder: '搜索文档',
      translations: {
        button: {
          buttonText: '搜索',
        },
      },
    }),
    shikiPlugin({
      theme: 'one-dark-pro',
    }),
  ],
  theme: defaultTheme({
    //深色模式
    colorModeSwitch: true,
    // LOGO
    logo: 'https://vuejs.org/images/logo.png',
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '基础',
        link: '/base',
        children: [
          {
            text: 'HTML',
            link: '/base/html',
          },
          {
            text: 'CSS',
            link: '/base/css',
          },
          {
            text: 'JavaScript',
            link: '/base/JavaScript',
          },
          {
            text: 'Git',
            link: '/base/Git',
          },
          {
            text: 'Node',
            link: '/base/Node/Node',
          },
          {
            text: 'WebPack',
            link: '/base/WebPack',
          },
          {
            text: 'Vue',
            link: '/base/Vue',
          },
          {
            text: 'Vue3(2022)',
            link: '/base/Vue3',
          },
          {
            text: '小程序',
            link: '/base/Applets',
          },
          {
            text: 'React',
            link: '/base/React',
          },
          {
            text: 'ThreeJS',
            link: '/base/ThreeJs',
          },
        ],
      },
      {
        text: '高级',
        children: [
          {
            text: '算法',
            // link: '/algorithm',
            children: [
              {
                text: '冒泡',
                link: '/algorithm/bubble',
              },
              {
                text: '快速',
                link: '/algorithm/fast',
              },
            ],
          },
          {
            text: '设计模式',
            // link: '/design',
            children: [
              {
                text: '工厂',
                link: '/design/factory',
              },
              {
                text: '单例',
                link: '/design/singleton',
              },
            ],
          },
        ],
      },
      {
        text: '个人项目',
        children: [
          {
            text: '后台管理',
            link: '/Project/Backstage/Network/Mock.md',
          },
        ],
      },
      {
        text: '部署',
        children: [
          {
            text: '前端',
            link: '/Deploy/Front/README.md',
          },
          {
            text: '后端',
            link: '/Deploy/Rear/README.md',
          },
        ],
      },
      {
        text: 'InterFace',
        link: '/interview',
        children: [
          {
            text: 'HTML',
            link: '/interview/HTML',
          },
          {
            text: 'CSS',
            link: '/interview/CSS',
          },
          {
            text: 'JavaScript',
            link: '/interview/JavaScript',
          },
          {
            text: '计算机网络',
            link: '/interview/Network',
          },
          {
            text: '记录',
            link: '/interview/Record',
          },
          {
            text: '箭指',
            link: '/interview/TheSwordRefersToTheOffer',
          },
          {
            text: '算法',
            link: '/interview/algorithm',
          },
          {
            text: '智力题',
            link: '/interview/puzzle',
          },

          {
            text: 'Git',
            link: '/interview/Tool',
          },
          {
            text: '操作系统',
            link: '/interview/OperatingSystem',
          },
        ],
      },
      {
        text: '前端体系',
        link: '/System/Tool',
        children: [
          {
            text: '工具',
            link: '/System/Tool',
          },
          {
            text: 'HTML',
            link: '/System/HTML',
          },
        ],
      },
    ],
    sidebar: {
      '/Project/Backstage': [
        {
          text: '网络请求',
          children: [
            '/Project/Backstage/Network/Mock.md',
            '/Project/Backstage/Network/Axios.md',
            '/Project/Backstage/Network/testRequest.md',
          ],
        },
        {
          text: '主题与国际化',
          children: [
            '/Project/Backstage/Color/baseColor.md',
            '/Project/Backstage/Color/themeColor.md',
            '/Project/Backstage/Color/language.md',
            '/Project/Backstage/Color/responsive.md',
          ],
        },
      ],
      '/base/Node': [
        {
          text: 'Node',
          children: ['/base/Node/Node.md'],
        },
        {
          text: 'Express',
          children: ['/base/Node/Express.md'],
        },
        {
          text: 'Koa',
          children: ['/base/Node/Koa.md'],
        },
      ],
    },
  }),
});

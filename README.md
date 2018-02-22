Vue + Express 前后端脚手架
=========================================


## 关键词

- Vue (vue-router + vuex)
- Express
- Nodemon
- Webpack
- Npm


## 文件目录

```
.
├── LICENSE
├── README.md
├── nodemon.json
├── package.json
├── src
│   ├── client
│   │   ├── App.vue
│   │   ├── components
│   │   │   └── Hello.vue
│   │   │── static
│   │   │── router
│   │   │── store
│   │   │── views
│   │   └── index.js
│   └── server
│       ├── index.js
│       ├── config
│       ├── controller
│       ├── model
│       ├── router
│       ├── public
│       │   └── favicon.ico
│       └── views
│             └── index.html
├── build
│   ├── build.js
│   ├── clicheck-version.js
│   ├── dev-client.js
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config
     ├── dev.env.js
     ├── index.js
     └── prod.env.js
```

## 用法

1. 安装依赖包

   `npm install`

2. 运行开发环境

   `npm run dev 或者 npm start` 

3. build前端代码

    `npm run build`
    
    生成后的代码会在根目录的dist目录下。
    此时可专门写一个生产环境启动express的脚本。
    服务端接口写在controller文件夹内，在router文件夹index.js注册即可

- 浏览器访问：http://localhost:4000/

## 参考资料
- [vue-express-dev-boilerplate](https://github.com/Konata9/vue-express-dev-boilerplate)
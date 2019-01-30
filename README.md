# koa2-mongodb-boilerplate

自用简洁版后台样板工程框架：Koa2 为基础，数据库为 MongoDB（Mongoose）。项目使用 nodemon 监听后端文件变化，不用每次重启服务器。需要有 mongoDB，默认 mongoDB 路径为：`mongodb://localhost:27017/knowledgeBase`。自带 mocha 和 chai 用来做单元测试。

引用的 Koa 中间件：

- koa-bodyparser: 处理 post 请求
- koa-router: 封装路由
- log4js: 处理日志

## 安装

```shell
# Clone 本项目然后安装项目依赖即可
git clone git@github.com:Konata9/koa2-mongodb-boilerplate.git

npm i
```

## 使用

```shell
# 运行开发模式，默认监听 10101 端口
npm run dev
```

## 测试接口

有两个接口可以测试（使用 Postman)

```
// 插入 user post 方法
/**
  {
    "username": "kizunaai",
    "password": 123456
  }
**/
http://localhost:10101/api/users/create

// 获取列表, get 方法
http://localhost:10101/api/users/list
```

## 文件目录

```
your project folder
|-- src // 代码文件夹
  |-- config // 配置文件夹
    |-- index.js // 端口，DB 路径
  |-- constants // 常量文件夹
    |-- index.js
  |-- logs // 自动生成的 log 文件夹
    |-- access // 服务器启动日志
    |-- errors // 错误日志
    |-- response // 请求日志
  |-- Schemas // 存放 db 和 schema
    |-- db.js // mongoDB 链接文件
    |-- UserInfo.js // User 的 Schema
  |-- services // 存放服务逻辑
    |-- login.js // 登录逻辑
  |-- routers // 存放路由
    |-- index.js // 路由管理文件
    |-- login.js // 对应服务逻辑的路由
  |-- utils // 工具库文件夹
    |-- log4js.js // 日志设定配置文件
  |-- app.js // 入口文件
|-- test // 测试文件夹
|-- .gitignore
|-- package.json
|-- package-lock.json
|-- README.md
```

## Dependencies 列表

```json
  "dependencies": {
    "koa": "^2.6.2",
    "koa-bodyparser": "^4.2.1",
    "koa-router": "^7.4.0",
    "log4js": "^4.0.1",
    "mongodb": "^3.1.13",
    "mongoose": "^5.4.7"
  },
  "devDependencies": {
    "chai": "^4.2.0",
    "mocha": "^5.2.0",
    "nodemon": "^1.18.9"
  }
```

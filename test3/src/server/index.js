// node 后端服务器
// const userApi = require('./api/userApi')
// const fs = require('fs')
// const path = require('path')
// const userApi = require('./demo')
// const bodyParser = require('body-parser')
// const express = require('express')
// const router = require('express-router')
const Koa = require('koa2')
// const router = require('koa-router')()
const bodyParser = require('koa-bodyparser')
const app = new Koa()

app.use(bodyParser())
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: false}))
// 后端api路由
app.use(require('./router').routes())
// app.use('/api', userApi)
// 监听端口
app.listen(3000)
console.log('success listen at port:3000......')

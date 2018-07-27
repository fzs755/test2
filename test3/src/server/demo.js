const router = require('koa-router')() // 引入路由函数
const userModel = require('./db/mysql') // 引入数据库方法

router.get('/', async (ctx, next) => {
  'use strict'
  ctx.redirect('/index')
})
// 路由中间间，页面路由到／，就是端口号的时候，（网址），页面指引到／index
router.get('/index', async (ctx, next) => {
  'use strict'
  let html = `
    <h1>请你使用post来获取json</h1>
    <form action='/api' method='post'>
    <input type='text' name='name' >
    <input type='text' name='ages'>
    <button type='submit'>提交</button>
    </form>
    `
  ctx.body = html
})
// 在index的路由的时候返回一段html，（实际开发中，不会这样做的） 页面是一个表单，模拟我们的前端或者移动
// 操作动作，（记住，这是动作。后面的redux中是很重要的一部分）提交数据到／api的路由中

router.post('/api', async (ctx, next) => {
  // let apps = ctx.request.body
  console.log(ctx.request.body)
  ctx.body = 11111
})
// 页面路由到api的时候，
//  ctx.redirect.body及时之前提交表单的数据
// ctx.body就是页面的返回体，之前说过了，这里赋值是什么，就返回什么。

router.get('/hez', async (ctx, next) => { // 访问／hez，验证链接数据库
  let bodys = '11111'
  await userModel.findData()
    .then(result => {
      bodys = JSON.parse(JSON.stringify(result))
    })
  ctx.body = bodys
})
module.exports = router
// 将页面暴露出去

const router = require('koa-router')() // 路由
const mysql = require('mysql')
const userModel = require('./db/default') // 数据库方法
var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  port: '3306',
  database: 'test1'
})

router.get('/', async (ctx, next) => {
  ctx.redirect('/index')
})
router.get('/index', async (ctx, next) => {
  let html = `
    <h1> 老子吃火锅，你吃火锅底料 --gai </h1>
   `
  ctx.body = html
})
router.get('/api', async (ctx, next) => {
  let resd = ''
  await userModel.findAllPost()
    .then(result => {
      resd = JSON.parse(JSON.stringify(result))
      // console.log(resd)
    })
  ctx.body = resd
})
router.post('/addUser', async (ctx, next) => {
  let addsql = 'insert into `user`(name,age) values(?,?)'
  // let data
  try {
    await conn.query(addsql, [ctx.request.body.username, ctx.request.body.age])
  } catch (err) {
    ctx.body = {message: err.message}
    ctx.status = err.status || 500
  }
  ctx.body = 'ok'
})
router.post('/changeUser', async (ctx, next) => {
  let changesql = 'update user set age=? where name=?'
  // let data
  try {
    await conn.query(changesql, [ctx.request.body.age1, ctx.request.body.username1], ['434'])
  } catch (err) {
    ctx.body = {message: err.message}
    ctx.status = err.status || 500
  }
  ctx.body = 'ok'
})
/* router.get('/compareUser', async (ctx, next) => {
  // let respond = ''
  await userModel.finAge(ctx.request.body.username3)
    .then(result => {
      console.log(result)
      if (result.length) {
        try {
          throw Error('用户存在')
        } catch (error) {
          ctx.body = {
            console.log(error)
          }
        }
      }
    })
    .catch(err => {
    console.log(err)
  })
  .then(result => {
      respond = JSON.parse(JSON.stringify(result))
    })
}) */
module.exports = router

var router = require('koa-router')()
var userModel = require('../../lib/mysql.js')
var md5 = require('md5')

router.post('/signin', async (ctx, next) => {
  console.log(ctx.request.body)
  var name = ctx.request.body.username
  var pass = ctx.request.body.pass

  await userModel.findDataByName(name)
    .then(result => {
      var res = JSON.parse(JSON.stringify(result))
      if (name === res[0]['name'] && (md5(pass + 'asd&$BH&*') === res[0]['pass'])) {
        console.log('登录成功')
        ctx.body = {
          code: 1
        }
        ctx.session.user = res[0]['name']
        ctx.session.id = res[0]['id']
        ctx.session.avator = res[0]['avator']
      } else if (md5(pass + 'asd&$BH&*') !== res[0]['pass']) {
        ctx.body = {
          code: 2 // 密码错误
        }
      }
    }).catch(err => {
      ctx.body = {
        code: 3 // 账号不存在
      }
      console.log('用户名或密码错误!', err)
    })
})

module.exports = router

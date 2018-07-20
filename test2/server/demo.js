var mysql = require('mysql')
var express = require('express')
var router = express.Router()

var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  port: '3306',
  database: 'test1'
})

conn.connect()

/* var sql = 'select * from user'
conn.query(sql, function (err, result) {
  if (err) {
    console.log('[select error]-', err.message)
    return
  }
  console.log('............select..........')
  console.log(result)
  console.log('...................\n\n')
}) */
var jsonWrite = function (res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    })
  } else {
    res.json(ret)
  }
}

router.post('/addUser', (req, res) => {
  var addsql = 'insert into `user`(name,age) values(?,?)'
  var params = req.body
  conn.query(addsql, [params.username, params.age], function (err, result) {
    if (err) {
      console.log('[insert error-', err.message)
      return
    }
    if (result) {
      console.log('............select..........')
      console.log('insert into:', result)
      // console.log('...................\n\n')
      // jsonWrite(res, result)
    }
  })
})
router.post('/changeUser', (req, res) => {
  var params = req.body
  var changesql = 'update user set age=? where name=?'
  conn.query(changesql, [params.age1, params.username1], function (err, result) {
    if (err) {
      console.log('[insert error-', err.message)
      return
    }
    if (result) {
      console.log('............select..........')
      console.log('change:', result)
    }
  })
})
router.post('/delUser', (req, res) => {
  var params = req.body
  var delsql = 'delete from user where name=? and age=?'
  conn.query(delsql, [params.username2, params.age2], function (err, result) {
    if (err) {
      console.log('[insert error-', err.message)
      return
    }
    if (result) {
      console.log('............select..........')
      console.log('del:', result)
    }
  })
})
router.get('/compareUser', (req, res) => {
  var params = req.body
  var comparesql = 'select * from user where name=?'
  conn.query(comparesql, [params.username3], function (err, result) {
    if (err) {
      console.log('could not find the user')
      return
    }
    if (result) {
      console.log('............select..........')
      console.log('find:', result)
      jsonWrite(res, result)
    }
  })
})
// conn.end()

module.exports = router

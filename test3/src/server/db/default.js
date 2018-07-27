// 数据库配置
const config = {
  port: 3000,
  database: {
    DATABASE: 'test1', // 数据库
    USERNAME: 'root', // 用户
    PASSWORD: '123456', // 密码
    PORT: '3306', // 端口
    HOST: 'localhost' // 网址ip
  }
}
module.exports = config
const mysql = require('mysql')
// const config = require('./default')
var pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE
})

let query = function (sql, values) {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) {
        resolve(err)
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err)
          } else {
            resolve(rows)
          }
          connection.release()
        })
      }
    })
  })
}
// 查询t1数据库
let findAllPost = function () {
  let _sql = `
    SELECT * FROM user
   `
  return query(_sql)
}
let findAge = function (name) {
  let _sql = `
    select age from user where name='${name}'
  `
  return query(_sql)
}
module.exports = {
  findAllPost,
  findAge
}

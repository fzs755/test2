// sql语句
var sqlMap = {
  // 用户
  user: {
    add: 'insert into user(name, age) values (?, ?)',
    sql_name: '$sql.user.select_name',
    sql_password: '$sql.user.select_password'
  }
}
module.exports = sqlMap

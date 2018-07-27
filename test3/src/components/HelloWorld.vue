<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form>
      <input type="text" name="userName" v-model="username"> <br>
      <input type="text" name="age" v-model="age"> <br>
      <a href="javascript:;" @click="addUser">提交</a>
      <p></p>
      <input type="text" name="userName" v-model="username1"> <br>
      <input type="text" name="age" v-model="age1"> <br>
      <a href="javascript:;" @click="changeUser">修改密码</a>
      <p></p>
      <input type="text" name="userName" v-model="username2"> <br>
      <input type="text" name="age" v-model="age2"> <br>
      <a href="javascript:;" @click="delUser">删除用户</a>
      <p></p>
      <input type="text" name="userName" v-model="username3"> <br>
      <input type="text" name="age" v-model="age3"> <br>
      <a href="javascript:;" @click="compareUser">确认</a>
    </form>
  </div>
</template>
<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username: '',
      username1: '',
      username2: '',
      username3: '',
      age: '',
      age1: '',
      age2: '',
      age3: ''
    }
  },
  methods: {
    addUser () {
      var name = this.username
      var age = this.age
      this.$http.post('/api/addUser', {
        username: name,
        age: age
      }, {}).then((response) => {
        console.log(response)
      })
    },
    changeUser () {
      var name1 = this.username1
      var age1 = this.age1
      this.$http.post('api/changeUser', {
        username1: name1,
        age1: age1
      }, {}).then((response) => {
        console.log(response)
      })
    },
    /* delUser () {
      var name2 = this.username2
      var age2 = this.age2
      this.$http.post('api/user/delUser', {
        username2: name2,
        age2: age2
      }, {}).then((response) => {
        console.log(response)
      })
    }, */
    compareUser () {
      var name3 = this.username3
      var age3 = this.age3
      this.$http.post('api/compareUser', {
        username3: name3,
        age3: age3
      }, {}).then((response) => {
        alert(response)
      })
    }
  }
}
</script>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form>
      <input type="text" name="userName" v-model="username"> <br>
      <input type="text" name="age" v-model="age"> <br>
      <a href="javascript:;" @click="addUser">提交</a>
      <input type="text" name="userName" v-model="username1"> <br>
      <a href="javascript:;" @click="delUser">删除</a>
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
      age: ''
    }
  },
  methods: {
    addUser () {
      var name = this.username
      var age = this.age
      this.$http.post('/api/user/addUser', {
        username: name,
        age: age
      }, {}).then((response) => {
        console.log(response)
      })
    },
    delUser () {
      var name = this.username1
      this.$http.delete()
    }
  }
}
</script>

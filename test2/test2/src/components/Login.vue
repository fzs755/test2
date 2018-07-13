<template>
  <div>
    <h1>{{ msg }}</h1>
    <form>
      <input type="text" name="userName" v-model="username"> <br>
      <input type="text" name="avatar" v-model="avatar"> <br>
      <a href="javascript:;" @click="addUser">登录</a>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      logined: false,
      username:'',
      avatar:'',
      exlogineduser: {
      name: '',
      avatar: '',
      username: ''
      }
    }
  },
  methods: {
    LOGIN (state) {
      state.logined = true
      let user = JSON.parse(sessionStorage.getItem('user'))
      state.logineduser.name = user.name
      state.logineduser.avatar = user.avatar
      state.logineduser.username = user.username
    },
    LOGOUT (state) {
      state.logined = true
      state.logineduser.name = ''
      state.logineduser.avatar = ''
      state.logineduser.username = ''
    },
    login (context) {
      context.commit('LOGIN')
    },
    logout (context) {
      context.commit('LOGOUT')
    }
  }
}
</script>

<template>
  <div class="login-wrap">
    <el-form label-position="top" label-width="80px" :model="formdata" class="login-form">
      <h2>用户登录</h2>
      <el-form-item label="用户名">
        <el-input v-model="formdata.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formdata.password"></el-input>
      </el-form-item>
        <el-button type="primary" class="login-btn" @click.prevent = 'handleLogin'>登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formdata: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    // 登录请求
    async handleLogin () {
      // 让异步代码ajax看起来像同步代码
      const res = await this.$http.get('login', {params: {
        username: this.formdata.username,
        password: this.formdata.password
      }
      })
      // this.$http.post('login', this.formdata)
      // .then(res => {
      // console.log(res)
      // const {
      //   data,
      //   meta: { msg, status }
      // } = res.data
      const { data, meta: { msg, status } } = res.data
      // 登录成功
      if (status === 200) {
        // 0.保存token值
        localStorage.setItem('token', data.token)
        // 1.跳转home
        this.$router.push({name: 'home'})
        this.$message.success(msg)
      } else {
        this.$message.error(msg)
      }
      // 2.提示成功
      // 不成功
      // }
      // )
    }
  }
}
</script>

<style>
.login-wrap {
  height: 100%;
  background-color: #324152;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-wrap .login-form {
  width: 400px;
  background-color: #fff;
  padding: 30px;
  border-radius: 5px;
}
.login-wrap .login-form .login-btn {
  width: 100%;
}
</style>

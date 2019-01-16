<template>
    <div class="border rounded p-4 bg-base elevation-4 text-left" @keyup.enter="onSubmit">
        <v-input v-model.trim="form.username" size="lg" class="mt-3" name="username" prefix="user" block autofocus placeholder="UM账号"></v-input>
        <v-input v-model.trim="form.password" size="lg" class="mt-3" type="password" name="password" block prefix="key" placeholder="密码"></v-input>
        <div class="mt-3">
          <v-input v-model.trim="form.code" size="lg" name="code" class="w-10" placeholder="验证码"></v-input>
        </div>
        <div class="mt-3 text-right">
          <a>忘记密码</a>
        </div>
        <v-button block type="primary" size="lg" class="mt-3" @click="onSubmit" :loading="loading">登录</v-button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { login } from '../../api/auth'
import { AppModule } from '@/store/index'

@Component({
  components: {}
})
export default class LoginBoxForm extends Vue {
  form = {
    username: '',
    password: '',
    code: ''
  }
  loading: boolean = false

  async onSubmit (): Promise<any> {
    if (!this.valid()) return
    this.loading = true
    login(this.form.username, this.form.password).then((token) => {
      const fn = () => { this.loading = false }
      let targetUrl = '/'
      if (this.$auth.targetUrl) {
        if (!this.$auth.user) {
          targetUrl = this.$auth.targetUrl
        }
        if (this.$auth.user && this.$auth.user.username === this.form.username) targetUrl = this.$auth.targetUrl
      }
      this.$auth.clear()
      if (token && this.$auth.tokenEnabled) this.$auth.token = token
      this.$router.push(targetUrl, fn, fn)
    }).catch(() => {
      this.loading = false
    })
  }
  valid (): boolean {
    if (!this.form.username.trim()) {
      this.$vua.$message.error('请输入用户名')
      return false
    }
    if (!this.form.password.trim()) {
      this.$vua.$message.error('请输入密码')
      return false
    }
    return true
  }
}
</script>

<style lang="scss" module>
  @import "~@/styles/var.scss";

</style>

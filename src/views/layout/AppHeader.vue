<template>
  <div class="d-flex justify-content-between">
    <div>
      <div class="d-flex my-1 align-items-center">
        <div class="title text-info">陆金所销售系统</div>
        <div class="ml-3 body-secondary"><breadcrumb></breadcrumb></div>
      </div>
      <div class="body-secondary"><span class="text-primary ft-lg mr-2"><v-icon type="sound"></v-icon></span> 通知公告 </div>
    </div>
    <div class="d-flex align-items-center">
      <v-input suffix="search" placeholder="请输入"></v-input>

      <v-popover placement="bottom-end" trigger="click" class="d-block ml-2">
        <div slot="reference" class="h-4 d-flex align-items-center px-2" :class="[$style.hoverable]">
          <v-badge :value="11">
            <div class="body-secondary ft-24"><v-icon type="mail"></v-icon></div>
          </v-badge>
        </div>
        <div>
          <p class="caption"> 暂无内容 </p>
        </div>
      </v-popover>

      <v-dropdown placement="bottom-end" class="d-block">
        <div class="h-4 d-flex align-items-center px-3" :class="[$style.hoverable]">
          <v-avatar type="image"><img src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"/></v-avatar>
          <span class="ml-2">Alison Mia</span>
        </div>
        <v-dropdown-menu slot="dropdown">
          <v-dropdown-item><v-icon type="user"></v-icon><span class="ml-2 mr-5">个人中心</span></v-dropdown-item>
          <v-dropdown-item><v-icon type="setting"></v-icon><span class="ml-2">个人设置</span></v-dropdown-item>
          <v-dropdown-item divider></v-dropdown-item>
          <v-dropdown-item @click.native="logout"><v-icon type="logout"></v-icon><span class="ml-2">退出登录</span></v-dropdown-item>
        </v-dropdown-menu>
      </v-dropdown>

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Mutation, State } from 'vuex-class'
import { logout } from '../../api/auth'
@Component({
  components: {
  }
})
export default class AppHeader extends Vue {
  logout (): void {
    logout().then(() => {
      this.$auth.clear()
      this.$router.push('/login')
    })
  }
}
</script>

<style lang="scss" module>
  @import "~@/styles/var.scss";
  .header{
    box-shadow: 0 2px 8px rgba(0, 0, 0, .15);
  }

  .hoverable {
    &:hover {
      cursor: pointer;
      background-color: $bg-color-2;
      transition: all .3s;
    }
  }
</style>

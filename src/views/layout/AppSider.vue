<template>
  <div :class="[$style.sider]">
    <div class="text-center my-3">
      <img class="w-2" src="../../assets/logo.png" alt="&times;">
    </div>
    <nav-menu style="width: 16rem;"></nav-menu>
    <div :class="[$style.trigger]" @click="toggle"><v-icon :type="icon"></v-icon></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { AppModule } from '../../store'
import NavMenu from '../menu/index.vue'

@Component({
  components: { NavMenu }
})
export default class AppSider extends Vue {
  @AppModule.State asideExpand!: boolean

  @AppModule.Mutation setAsideExpand!: (expand: boolean) => void

  get icon () {
    return this.asideExpand ? 'left-circle' : 'right-circle'
  }

  toggle () {
    this.setAsideExpand(!this.asideExpand)
  }
}
</script>

<style lang="scss" module>
  .sider {
    height: 100vh;
    overflow: auto;
    background-color: rgb(0, 21, 41);
    box-shadow: 2px 0 6px rgba(0,21,41,.35);
    position: relative;
  }

  .trigger {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    font-size: 1.5rem;
    color: #999;
    transition: all .3s;
    transform: translateX(-50%);
    &:hover {
      color: #fff;
      cursor: pointer;
      &>* {
        transform: scale(1.1);
      }
    }
  }
</style>

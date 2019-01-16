<template>
<v-layout>
  <v-sider><app-sider></app-sider></v-sider>
  <v-layout>
    <v-header :class="[$style.header]" class="shadow-1-down"><app-header></app-header></v-header>
    <v-content style="overflow: auto; max-height: calc(100vh - 4.25rem);" class="mt-2"><router-view/></v-content>
  </v-layout>
</v-layout>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import AppSider from './AppSider.vue'
import AppHeader from './AppHeader.vue'

@Component({
  components: {
    AppSider,
    AppHeader
  }
})
export default class Layout extends Vue {
}
</script>

<style lang="scss" module>
  .header {
    padding-left: 1rem;
    padding-right: 0;
    /*height: 5rem;*/
    line-height: 1.5;
  }
</style>

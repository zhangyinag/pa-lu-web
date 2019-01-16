<template>
<div>
  <span v-for="(item, i) in items" :key="item.name">
    <span class="mx-2 body-secondary" v-if="i > 0">/</span>
    <a :href="'#' + item.path || '/'">{{item.name}}</a>
  </span>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

const routes : any = {
  home: '首页',
  dashboard: 'Dashboard'
}

interface Item {
  name: string,
  path: string
}

@Component({
  components: {}
})
export default class extends Vue {
  get items (): Array<Item> {
    return this.$route.matched.map((v) => {
      return {
        name: (v.meta && v.meta.cname) || v.name,
        path: v.path || '/'
      }
    })
  }
}
</script>

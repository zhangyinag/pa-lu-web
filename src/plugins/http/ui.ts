import Vue from 'vue'

export function message (text: string): void {
  Vue.prototype.$vua.$message.error(text)
}

export function confirm (title: string, text: string): Promise<any> {
  return Vue.prototype.$vua.$modal.confirm({
    title: title,
    content: text
  })
}

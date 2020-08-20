import Vue from 'vue'
Vue.component('heading', {
  name: 'headid',
  props: ['level'],
  render(h) {
    console.log(this)
    return h(
      'h' + this.level,
      this.$slots.default
    )
  }
})
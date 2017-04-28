import Detail from '../pages/detail.vue'
import store from '../store'
import * as filters from '../filters'
import mixins from '../mixins'
// 注册全局实用过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.mixin(mixins)
new Vue({
        el: '#root',
        store,
        render: h => h(Detail)
    })
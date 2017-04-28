import Topic from '../pages/topic.vue'
import store from '../store'
import mixins from '../mixins'
Vue.mixin(mixins)
new Vue({
        el: '#root',
        store,
        render: h => h(Topic)
    })
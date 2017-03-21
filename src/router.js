// import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home.vue'
import PostFm from './pages/PostFm.vue'
import Proc from './pages/proc.vue'

Vue.use(Router)



export default new Router({
  routes: [
    { path: '/home',name: 'Home', component: Home },
    { path: '/postfm',name: 'PostFm', component: PostFm },
    { path: '/Proc',name: 'Proc', component: Proc },
    { path: '/', redirect: '/home' }
  ]
})

// import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home.vue'

Vue.use(Router)

// Story view factory
// function createStoriesView (type) {
//   return {
//     name: `${type}-stories-view`,
//     render (createElement) {
//       return createElement(StoriesView, { props: { type }})
//     }
//   }
// }

export default new Router({
  routes: [
    { path: '/home', component: Home },
    { path: '/', redirect: '/home' }
  ]
})

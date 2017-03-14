// import Vue from 'vue'
import Router from 'vue-router'


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
    { path: '/top', component: createStoriesView('top') },
    { path: '/user/:id', component: UserView },
    { path: '/', redirect: '/top' }
  ]
})

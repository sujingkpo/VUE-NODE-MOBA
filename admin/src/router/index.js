import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import categoriesEdit from '../views/categoriesEdit.vue'

Vue.use(VueRouter)

/**
 * @type {Array<import('vue-router').RouteConfig>}
 */
const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      {
        path: "/categories/create",
        component: categoriesEdit,

      }
    ]


  }
]

const router = new VueRouter({
  routes
})

export default router

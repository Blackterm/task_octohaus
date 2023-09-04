import { createRouter, createWebHistory } from 'vue-router'
import layout from '../views/layouts/layout.vue'
import home from '../views/home/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: "/home",
      name: 'layout',
      component: layout,
      children: [
        {
          path: "/home",
          name: "home",
          component: home,
        },

      ]
    },

  ]
})

export default router

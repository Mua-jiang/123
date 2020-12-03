import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: () => import('../views/Vip.vue')
  },
  {
      path: '/plug',
      component: () => import('../views/Plug.vue')
    },
	{
	    path: '/profile',
	    component: () => import('../views/Profile.vue')
	  },
	  {
	      path: '/changepwd',
	      component: () => import('../views/Changepwd.vue')
	    },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
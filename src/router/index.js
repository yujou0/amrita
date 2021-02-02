import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'
// import store from '../store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '艾力特淨水'
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: '關於我們'
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue'),
    meta: {
      title: '我的購物車'
      // login: true
    }
  },
  {
    path: '/reg',
    name: 'Reg',
    component: () => import(/* webpackChunkName: "reg" */ '../views/Reg.vue'),
    meta: {
      title: '註冊'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {
      title: '登入'
    }
  },
  {
    path: '/upload',
    name: 'Upload',
    component: () => import(/* webpackChunkName: "upload" */ '../views/Upload.vue'),
    meta: {
      title: '商品上架'
    }
  },
  {
    path: '/checkoutlist',
    name: 'Checkoutlist',
    component: () => import(/* webpackChunkName: "checkoutlist" */ '../views/Checkoutlist.vue'),
    meta: {
      title: '銷售清單'
    }
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import(/* webpackChunkName: "products" */ '../views/Products.vue'),
    meta: {
      title: '淨水商品'
    }
  },
  {
    path: '/productcontent/:id',
    name: 'Productcontent',
    component: () => import(/* webpackChunkName: "productcontent" */ '../views/Productcontent.vue'),
    meta: {
      title: '商品詳情'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
    meta: {
      title: '聯絡我們'
    }
  }
]

const router = new VueRouter({
  routes
})

// 進入每個頁面後
// to 去哪裡
// from 是從哪來
router.afterEach((to, from) => {
  document.title = to.meta.title
})
// 去要登入的頁面沒登入會跳去登入那頁
router.beforeEach((to, from, next) => {
  if (to.meta.login && !store.state.user.id) {
    next('/login')
  } else {
    next()
  }
})

export default router

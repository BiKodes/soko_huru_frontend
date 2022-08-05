import { createRouter, createWebHistory } from 'vue-router'

import store from '@/store'

import HomeView from '../views/HomeView.vue'
import ExoticView from '../views/ExoticView.vue'
import Product from '../views/ProductView.vue'
import CategoryView from '../views/CategoryView.vue'
import SearchView from '../views/SearchView.vue'
import CartView from '../views/CartView.vue'
import SignUpView from '../views/SignUpView.vue'
import LogInView from '../views/LogInView.vue'
import OrdersView from '../views/OrderSummary.vue'
import CheckOutView from '../views/CheckOutView.vue'
import SuccessView from '../views/SuccessView.vue'
import PaymentModeView from '../views/PaymentModeView.vue'
import ProfileView from '../views/ProfileView.vue'
import WatchListView from '../views/WatchListView.vue'
import PasswordResetView from '../views/PasswordResetView.vue'
import OrderDetailView from '../views/OrderDetailView.vue'
import OrdersListView from '../views/OrdersListView.vue'


const routes = [
  {
    path: '/orders',
    name: 'orders',
    component: OrdersView,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/order-detail',
    name: 'order-detail',
    component: OrderDetailView,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/orders-list',
    name: 'orders-list',
    component: OrdersListView,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  },
  {
    path: '/passwordreset',
    name: 'passwordreset',
    component: PasswordResetView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/watchlist',
    name: 'watchlist',
    component: WatchListView
  },
  {
    path: '/cart/checkout',
    name: 'checkout',
    component: CheckOutView,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/cart/payment',
    name: 'payment',
    component: PaymentModeView,
  },
  {
    path: '/cart/success',
    name: 'success',
    component: SuccessView
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: SignUpView
  },
  {
    path: '/log-in',
    name: 'log-in',
    component: LogInView
  },
  {
    path: '/exotic',
    name: 'exotic',
    component: ExoticView
  },
  {
    path: '/:category_slug/:product_slug',
    name: 'Product',
    component: Product
  },
  {
    path: '/:category_slug',
    name: 'category',
    component: CategoryView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
    next({ name: 'LogInView', query: { to: to.path } });
  } else {
    next()
  }
})

export default router

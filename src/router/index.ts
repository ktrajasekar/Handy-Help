// branding honeywell

import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Dashboard  from '../views/Dashboard.vue'
import PowerCalculator from '../views/power-calculator.vue'
import mileageCalculator from '../views/mileage-calculator.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
    {
    path: '/power-calculator',
    name: 'Home',
    component: PowerCalculator
  },
 {
    path: '/mileage-calculator',
    name: 'Mileage Calculator',
    component: mileageCalculator
  }
  // {
  //   path: '/tabs/',
  //   component: Tabs,
  //   children: [
  //     {
  //       path: '',
  //       redirect: 'tab1'
  //     },
  //     {
  //       path: 'tab1',
  //       component: () => import('@/views/Tab1.vue')
  //     },
  //     {
  //       path: 'tab2',
  //       component: () => import('@/views/Tab2.vue')
  //     },
  //     {
  //       path: 'tab3',
  //       component: () => import('@/views/Tab3.vue')
  //     }
  //   ]
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

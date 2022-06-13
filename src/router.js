import { createRouter, createWebHistory } from 'vue-router';

import BeerList from './pages/BeerList.vue';
import EmployeeCart from './pages/EmployeeCart.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/beers' },
    { path: '/beers', component: BeerList },
    { path: '/employeecart', component: EmployeeCart }
  ]
});

export default router;
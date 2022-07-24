import { createRouter, createWebHistory } from 'vue-router';

import BeerList from './pages/BeerList.vue';
import EmployeeCart from './pages/EmployeeCart.vue';
import UserAuth from './pages/auth/UserAuth.vue';
// import EmployeeList from './pages/EmployeeList.vue';
// This will be for a future iteration with setting up Firebase Admin account

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/beers' },
    { path: '/beers', component: BeerList },
    { path: '/employeecart', component: EmployeeCart },
    { path: '/auth', component: UserAuth },
    // { path: '/employees', component: EmployeeList }
  ]
});

export default router;
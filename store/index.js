import { createStore } from 'vuex';

import beersModule from './modules/beers.js';
import beerCartModule from './modules/beercart.js';
import employeesModule from './modules/employees.js';
import authModule from './modules/authentication.js';

const store = createStore({
  modules: {
    beers: beersModule,
    beercart: beerCartModule,
    employees: employeesModule,
    authentication: authModule
  },
  state() {
    // return {
    //   userId: null
    // }
  },
  mutations: {
    // login(state) {
    //   state.isLoggedIn = true;
    // },
    // logout(state) {
    //   state.isLoggedIn = false;
    // },
  },
  actions: {
    // login(context) {
    //   context.commit('login');
    // },
    // logout(context) {
    //   context.commit('logout');
    // },
  },
  getters: {
    // isAuthenticated(state) {
    //   return state.isLoggedIn;
    // }
  //   userIdentification(state) {
  //     return state.userId;
  //   },
  }
});

export default store;
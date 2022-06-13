import { createStore } from 'vuex';

import beersModule from './modules/beers.js';
import beerCartModule from './modules/beercart.js';
import employeesModule from './modules/employees.js';

const store = createStore({
  modules: {
    beers: beersModule,
    beercart: beerCartModule,
    employees: employeesModule
  },
  state() {
    return {
      isLoggedIn: false
    };
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
  actions: {
    login(context) {
      context.commit('login');
    },
    logout(context) {
      context.commit('logout');
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.isLoggedIn;
    }
  }
});

export default store;
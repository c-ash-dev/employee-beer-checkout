<template>
  <header>
    <h1>
      Employee Beer Checkout
    </h1>
    <nav>
      <ul>
        <li>
          <router-link to="/beers">Beers</router-link>
        </li>
        <li>
          <router-link to="/employeecart">Employee Cart</router-link>
          <base-badge mode="elegant">{{ beerCartQuantity }}</base-badge>
        </li>
        <li v-if="isLoggedIn">
          <router-link to="/admin">Admin</router-link>
        </li>
      </ul>
    </nav>
    <!-- <div>
      <button @click="loginUser('Beth Bridges')">Beth Bridges Login</button>
    </div>
    <div>
      <button @click="loginUser('Thomas McBride')">Thomas McBride Login</button>
    </div>
    <div>
      <button v-if="!isLoggedIn" @click="login">Admin Login</button>
      <button v-if="isLoggedIn" @click="logout">Admin Logout</button>
    </div> -->
  </header>
</template>

<script>
import BaseBadge from '../ui/BaseBadge.vue';
export default {
  components: { BaseBadge },
  computed: {
    cartQuantity() {
      return this.$store.getters['cart/quantity'];
    },
    beerCartQuantity() {
      return this.$store.getters['beercart/quantity']
    },
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login');
    },
    logout() {
      this.$store.dispatch('logout');
    },
    // loginUser(userName) {
    //   this.$store.dispatch('employees/setEmployee', { userName });
    //   this.$store.dispatch('beercart/resetCart')
    // }
  }
};
</script>

<style scoped>
header {
  height: 5rem;
  background-color: rgb(56, 84, 109);
  margin: 0;
  padding: 0 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
    color: rgb(255, 255, 255);
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: center;
  align-items: center;
}

li {
  margin: 0 1rem;
}

a {
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-weight: bold;
  border: 2px solid transparent;
  padding: 0.25rem;
}

a:hover,
a:active,
a.router-link-active {
  border-color: white;
}

button {
  font: inherit;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  border: 1px solid #45006d;
  background-color: transparent;
  color: #45006d;
  border-radius: 30px;
}

button:hover,
button:active {
  background-color: #f0d5ff;
}
</style>
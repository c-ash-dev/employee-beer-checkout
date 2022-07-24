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
        <li v-if="isLoggedIn">
          <router-link to="/employeecart">Employee Cart</router-link>
          <base-badge mode="elegant">{{ beerCartQuantity }} Cans</base-badge>
        </li>
        <!-- <li v-if="isAdmin">
          <router-link to="/employees">Employees</router-link>
        </li> -->
        <li v-if="!isLoggedIn">
          <router-link to="/auth">Login</router-link>
        </li>
        <li v-else>
          <router-link @click="logout" to="/beers">Logout</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import BaseBadge from '../ui/BaseBadge.vue';

export default {
  components: { BaseBadge },

  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
    isAdmin() {
      return true;
    },
    cartQuantity() {
      return this.$store.getters['cart/quantity'];
    },
    beerCartQuantity() {
      return this.$store.getters['beercart/quantity']
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('employeeLogout');
      this.$store.dispatch('employees/employeeLogout')
    },
  },
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
<template>
  <section>
    <h2>Your Cart</h2>
    <h3>Total Points Available: <base-badge mode="elegant">{{ pointsAvailable }} </base-badge></h3>
    <h3>Total Points Used: <base-badge mode="elegant">{{ pointTotal }}</base-badge></h3>
    <button @click="checkOut">Checkout</button>
    <ul v-if="pointTotal > 0">
      <beer-cart-item
        v-for="item in cartItems"
        :key="item.beerId"
        :beer-id="item.beerId"
        :brand="item.brand"
        :image="item.image"
        :points="item.points"
        :qty="item.qty"
      ></beer-cart-item>
    </ul>
  </section>
</template>

<script>
import BeerCartItem from '../components/cart/BeerCartItem.vue';

export default {
  components: {
    BeerCartItem,
  },
  computed: {
    pointTotal() {
      return this.$store.getters['beercart/totalPoints'];
    },
    cartItems() {
      return this.$store.getters['beercart/getBeers'];
    },
    pointsAvailable() {
      return this.$store.getters['employees/pointsAvailable'];
    }
  },
  methods: {
    checkOut() {
      this.$store.dispatch('employees/checkoutBeer', {points: this.pointTotal});
      this.$store.dispatch('beercart/resetCart');
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  text-align: center;
}

h2 {
  color: #292929;
  border-bottom: 2px solid #ccc;
  padding-bottom: 1rem;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

button {
  font: inherit;
  border: 1px solid #008f88;
  background-color: #008f88;
  color: white;
  border-radius: 30px;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
}

button:hover,
button:active {
  background-color: #57cac4;
  border-color: #57cac4;
}
</style>
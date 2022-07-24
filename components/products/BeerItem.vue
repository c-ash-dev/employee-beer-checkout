<template>
  <li class="product">
    <div class="product__data">
      <div class="product__image">
        <img :src="image" :alt="brand"/>
      </div>
      <div class="product__text">
        <h3> {{ brand }} </h3>
        <base-badge mode="highlight" :no-margin-left="true">
          <h4>Points: {{ points }}</h4>
        </base-badge>
        <p>Style: {{ style }}</p>
        <p>Production Date: {{ productionDate }}</p>
      </div>
    </div>
    <div class="product__actions" v-if="isLoggedIn">
      <button @click="addToCart">Add to Cart</button>
    </div>
  </li>
</template>

<script> 
export default {
  props: ['id', 'image', 'brand', 'style', 'points', 'productionDate'],
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    addToCart() {
      this.$store.dispatch('beercart/addBeerToCart', {
        id: this.id,
        image: this.image,
        brand: this.brand,
        style: this.style,
        points: this.points
      });
    }
  }
}
  
</script>

<style scoped>
li {
  margin: 1.5rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 20px;
}

.product__data {
  display: flex;
}

.product__image {
  margin-right: 1rem;
}

.product__image img {
  height: 10rem;
  width: 10rem;
  object-fit: cover;
}

.product__text h3 {
  margin: 0 0 0.5rem 0;
}

.product__text h4 {
  margin: 0;
}

.product__actions {
  text-align: center;
}

button {
  font: inherit;
  cursor: pointer;
  background-color: #0757a1;
  color: white;
  border: 1px solid #0757a1;
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
}

button:hover,
button:active {
  background-color: #3d90df;
  border-color: #3d90df;
}
</style>


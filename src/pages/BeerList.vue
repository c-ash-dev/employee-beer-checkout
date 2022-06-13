<template>
  <section>
    <ul>
      <beer-item
        v-for="beer in beers"
        :key="beer.id"
        :id="beer.id"
        :brand="beer.brand"
        :image="beer.image"
        :style="beer.style"
        :points="beer.points"
        :production-date="beer.productionDate"
      ></beer-item>
    </ul>
  </section>
</template>

<script>
import BeerItem from '../components/products/BeerItem.vue'

export default {
  components: {
    BeerItem,
  },
  computed: {
    beers() {
      return this.$store.getters['beers/beers'];
    }
  }
}

</script>

<style scoped>
  ul {
    list-style: none;
    margin: 2rem auto;
    padding: 0;
    max-width: 40rem;
  }
</style>
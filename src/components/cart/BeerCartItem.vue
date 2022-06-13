<template>
  <li>
    <div>
      <img :src="image" :alt="brand" />
    </div>
    <div>
      <h3>{{ brand }}</h3>
      <div class="item__data">
        <div>
          Points per Item:
          <strong>{{ points }}</strong>
        </div>
        <div>
          Number of Cans:
          <strong>{{ qty }}</strong>
        </div>
      </div>
      <div class="item__total">Total Points {{ itemTotal }}</div>
      <button @click="remove">Remove</button>
    </div>
  </li>
</template>

<script>
export default {
  props: ['beerId', 'brand', 'image', 'points', 'qty'],
  computed: {
    itemTotal() {
      return (this.points * this.qty);
    },
  },
  methods: {
    remove() {
      this.$store.dispatch('beercart/removeBeerFromCart', { 
        beerId: this.beerId 
      });
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem auto;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  text-align: center;
  max-width: 25rem;
  border-radius: 20px;
}

img {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  object-fit: cover;
}

.item__data {
  display: flex;
  justify-content: space-between;
}

.item__total {
  font-weight: bold;
  margin: 1rem 0;
  border-top: 1px solid #474747;
  border-bottom: 2px solid #474747;
  padding: 0.25rem 0;
  width: auto;
}

button {
  font: inherit;
  border: 1px solid #0757a1;
  background-color: #0757a1;
  color: white;
  border-radius: 30px;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
}

button:hover,
button:active {
  background-color: #3d90df;
  border-color: #3d90df;
}
</style>



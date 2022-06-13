export default {
  namespaced: true,
  state() {
    return {
      items: [
        // beerId: '',
        // brand: '',
        // style: '',
        // image: '',
        // points: 0,
        // qty: 0,
      ],
      points: 0,
      qty: 0
    };
  },
  mutations: {
    addBeerToCart(state, payload) {
      const beerData = payload;
      const beerInCartIndex = state.items.findIndex(
        (ci) => ci.beerId === beerData.id,
      );
      if (beerInCartIndex >= 0) {
        state.items[beerInCartIndex].qty++;
      } else {
        const newItem = {
          beerId: beerData.id,
          brand: beerData.brand,
          style: beerData.style,
          image: beerData.image,
          points: beerData.points,
          qty: 1
        };
        state.items.push(newItem);
      }
      state.qty++;
      state.points += beerData.points;
    },
    removeBeerFromCart(state, payload) {
      const bId = payload.beerId;
      const beerInCartIndex = state.items.findIndex(
      (cartIndex) => cartIndex.beerId === bId,
      );
    
      const beerData = state.items[beerInCartIndex];
      state.items.splice(beerInCartIndex, 1);
      state.qty -= beerData.qty;
      state.points -= beerData.points * beerData.qty;
    },
    resetCart(state) {
      state.qty = 0;
      state.points = 0;
      state.items = [];
    }
  },
  actions: {
    addBeerToCart(context, payload) {
      context.commit('addBeerToCart', payload);
    },
    removeBeerFromCart(context, payload) {
      context.commit('removeBeerFromCart', payload);
    },
    resetCart(context) {
      context.commit('resetCart');
    }
  },
  getters: {
    getBeers(state) {
      return state.items;
    },
    totalPoints(state) {
      return state.points;
    },
    quantity(state) {
      return state.qty;
    }
  }
}


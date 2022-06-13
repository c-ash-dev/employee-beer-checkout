export default {
  namespaced: true,
  state() {
    return {
      beers: [
        {
          id: 'b1',
          image: require('../../assets/photos/ElectricSunshine.jpg'),
          brand: 'Electric Sunshine',
          style: 'Tart Ale',
          points: 2,
          productionDate: '4/1/2022'
        },
        {
          id: 'b2',
          image: require('../../assets/photos/AveryIPA.jpg'),
          brand: 'Avery IPA',
          style: 'West Coast IPA',
          points: 1,
          productionDate: '5/1/2022'
        },
        {
          id: 'b3',
          image: require('../../assets/photos/AveryLager.jpg'),
          brand: 'Avery Lager',
          style: 'Lager',
          points: 1,
          productionDate: '6/2/2022'
        },
        {
          id: 'b4',
          image: require('../../assets/photos/IslandRascal.jpg'),
          brand: 'Island Rascal',
          style: 'Belgian-style White Ale',
          points: 2,
          productionDate: '5/30/2022'
        },
      ]
    }
  },
  getters: {
    beers(state) {
      return state.beers;
    }
  }
};
export default {
  namespaced: true,
  state() {
    return {
      employees: [
        {
          firstName: '',
          lastName: '',
          pointsAvailable: 0
        },
      ],
    }
  },
  mutations: {
    setEmployee(state, payload) {
      // state.employees.id = payload.userID
      state.employees.firstName = payload.firstName,
      state.employees.lastName = payload.lastName,
      state.employees.pointsAvailable = payload.points
    },
    // setEmployee(state, payload) {
    //   state.employeeLoggedIn.name = payload.userName;
    //   console.log(state.employeeLoggedIn.name)
    //   const employee = state.employeeLoggedIn.name;
    //   const empInEmployees = state.employees.find(
    //     (e) => e.name === employee,
    //   );
      
    //   if (empInEmployees.name === employee){
    //     console.log('employeeInEmployees', empInEmployees);
    //     console.log('points available', empInEmployees.pointsAvailable)
    //     state.employeeLoggedIn.pointsAvailable = empInEmployees.pointsAvailable;
    //   }
    // },
    checkoutBeer(state, payload) {
      const pointsUsed = payload.points;
      state.employees.pointsAvailable -= pointsUsed;
    },
    resetEmployee(state) {
      state.employees.firstName = '',
      state.employees.lastName = '',
      state.employees.pointsAvailable = 0
    }
  },
  actions: {
    async setEmployee(context) {
      const userId = context.rootGetters.userIdentification;
      const token = context.rootGetters.token

      const response = await fetch(`https://beer-checkout-app-default-rtdb.firebaseio.com/employees/${userId}.json?auth=` + token);

      const responseData = await response.json();
      // console.log('set Employee responseData', responseData);
      // console.log('set employee it', userId);
      context.commit('setEmployee', responseData)
    },

    async checkoutBeer(context, payload) {
      const userId = context.rootGetters.userIdentification;
      const token = context.rootGetters.token
      const pointsAvailable = context.getters.pointsAvailable;
      const newPointValue = pointsAvailable - payload.points;

      const response = await fetch(`https://beer-checkout-app-default-rtdb.firebaseio.com/employees/${userId}.json?auth=` + token, {
        method: 'PATCH',
        body: JSON.stringify({
          points: newPointValue
        })
      })

      const responseData = await response.json();
      console.log('submit new point value', responseData)

      context.commit('checkoutBeer', payload);
    },
    employeeLogout(context) {
      context.commit('resetEmployee');
    }
  },
  getters: {
    userId(state) {
      return state.authentication.userIdentification;
    },
    getEmployeeName(state) {
      return `${state.employees.firstName} ${state.employees.lastName}`
    },
    pointsAvailable(state) {
      return state.employees.pointsAvailable;
    }
  }
}
export default {
  namespaced: true,
  state() {
    return {
      employees: [
        {
          id: 1,
          name: 'Beth Bridges',
          pointsAvailable: 65
        },
        {
          id: 2,
          name: 'Thomas McBride',
          pointsAvailable: 50
        }
      ],
      // employeeLoggedIn: {
      //   name: '',
      //   pointsAvailable: 0
      // }
    }
  },
  mutations: {
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
      state.employees[0].pointsAvailable -= pointsUsed;
    }
  },
  actions: {
    // setEmployee(context, payload) {
    //   context.commit('setEmployee', payload);
    // },
    checkoutBeer(context, payload) {
      context.commit('checkoutBeer', payload);
    }
  },
  getters: {
    // pointsAvailable(state) {
    //   return state.employeeLoggedIn.pointsAvailable
    // }
    pointsAvailable(state) {
      return state.employees[0].pointsAvailable;
    }
  }
}
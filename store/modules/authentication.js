import { firebaseKey } from '../../utils/keys.js';

export default {
  state() {
    return {
      userId: null,
      token: null,
      tokenExpiration: null
    }
  },
  mutations: {
    setUser(state, payload) {
      state.token = payload.token;
      state.userId = payload.userId;
      state.tokenExpiration = payload.tokenExpiration;
    },
    resetUser(state) {
      state.token = null;
      state.userId = null;
      state.tokenExpiration = null;
    }
  }, 
  actions: {
    async login(context, payload) {
      const response = await fetch (`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseKey}`, {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true
        })
      });

      const responseData = await response.json();

      if (!response.ok) {
        // console.log(responseData);
        const error = new Error(responseData.message || 'Failed to authenticate.');
        throw error;
      }

      // console.log('login response data', responseData);
      context.commit('setUser', {
        token: responseData.idToken,
        userId: responseData.localId,
        tokenExpiration: responseData.expiresIn
      });
      
      // context.commit('employees/setEmployee', {
      //   userId: responseData.userId,
      //   firstName: payload.firstName,
      //   lastName: payload.lastName,
      //   points: 24
      // })
    },
    async signup(context, payload) {
      const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseKey}`, {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true
        })
      });

      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(responseData.message || 'Failed to authenticate.');
        throw error;
      }

      // console.log('signup response data', responseData);
      context.commit('setUser', {
        token: responseData.idToken,
        userId: responseData.localId,
        tokenExpiration: responseData.expiresIn
      });

      const token = context.getters.token;
      const userId = responseData.localId;
      await fetch(`https://beer-checkout-app-default-rtdb.firebaseio.com/employees/${userId}.json?auth=` + token, {
        method: 'PUT',
        body: JSON.stringify({
          firstName: payload.firstName,
          lastName: payload.lastName,
          points: 24
        })
      });

      // This logic and http call Set employee moved to employees.js
      // const newEmployeeResponseData = await newEmployee.json();
      // console.log('new employee', newEmployeeResponseData);

      // context.commit('./employees/setEmployee', {
      //   firstName: newEmployeeResponseData.firstName,
      //   lastName: newEmployeeResponseData.lastName,
      //   points: newEmployeeResponseData.points
      // })
    },
    employeeLogout(context) {
      context.commit('resetUser');
    }
  },
  getters: {
    userIdentification(state) {
      return state.userId;
    },

    token(state) {
      return state.token;
    },
    isAuthenticated(state) {
      return !!state.token;
    }
  }
}
<template>
  <div class="badge">
    <form @submit.prevent="submitForm">
      <div v-if="mode === 'signup'" class="form-control">
        <label for="firstName">First Name</label>
        <input type="text" id="firstName" v-model.trim="firstName"/>
      </div>
      <div v-if="mode === 'signup'" class="form-control">
        <label for="lastName">Last Name</label>
        <input type="text" id="lastName" v-model.trim="lastName"/>
      </div>
      <div class="form-control">
        <label for="email">E-Mail</label>
        <input type="email" id="email" v-model.trim="email"/>
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password" v-model.trim="password"/>
      </div>
      <p v-if="!formIsValid">Please enter a valid email and password (must be at least 6 characters long).</p>
      <button>{{ submitButtonLabel }}</button>
      <button type="button" mode="flat" @click="switchAuthMode">{{ switchModeButtonLabel }}</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login'
    }
  },
  computed: {
    submitButtonLabel() {
      if (this.mode === 'login') {
        return 'Login';
      } else {
        return 'Signup';
      }
    },
    switchModeButtonLabel() {
      if (this.mode === 'login') {
        return 'Signup Instead';
      } else {
        return 'Login Instead';
      }
    }
  },
  methods: {
    async submitForm() {
      this.formIsValid = true;
      if (this.email === '' || !this.email.includes('@') || this.password.length < 6)
      { 
        this.formIsValid = false;
        return
      }
      
      if (this.mode === 'login') {
        await this.$store.dispatch('login', {
          email: this.email,
          password: this.password,
        }),
        
        await this.$store.dispatch('employees/setEmployee')

        this.$router.replace('/beers')
      } else {
        await this.$store.dispatch('signup', {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
        });

        await this.$store.dispatch('employees/setEmployee')
      }
        this.$router.replace('/beers')
    },
    switchAuthMode() {
      if (this.mode === 'login') {
        this.mode = 'signup';
      } else {
        this.mode = 'login';
      }
    },
  }
}
</script>

<style scoped>

.badge {
  margin: 2rem auto;
  /* display: inline-block; */
  max-width: 40rem;
  padding: 0.25rem 1.25rem;
  color: #292929;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgb(0 0 0 /  26%);
}
form {
  margin: 1rem;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
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
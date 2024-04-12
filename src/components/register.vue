<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: '',
      error: false,
      errorMessage: ''
    }
  },
  methods: {
    async login(username) {
      if (
        this.username != false &&
        this.password != false &&
        this.password === this.confirmPassword
      ) {
        const resp = await fetch('https://2c43ac71b0e719c8.mokky.dev/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, pass: this.password })
        })
        this.$router.push({ name: 'user', params: { username: this.username } })
      }
    }
  }
}
</script>

<template>
  <div class="container">
    <h2>REGISTER</h2>

    <input
      type="text"
      placeholder="Username"
      v-model="username"
      class="input"
      :class="{ error: error }"
    />
    <input
      type="password"
      placeholder="Password"
      v-model="password"
      class="input"
      :class="{ error: error }"
    />
    <input
      type="password"
      placeholder="Confirm password"
      v-model="confirmPassword"
      class="input"
      :class="{ error: error }"
    />

    <button @click="login(this.username)">Create</button>
  </div>
  <div class="error-message">
    <p>{{ errorMessage }}</p>
  </div>
</template>

<style scoped>
.container {
  margin: auto;
  margin-top: 10vh;
  border: 1px solid rgb(50, 50, 50);
  border-radius: 1vw;
  width: 50vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
h2 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 32px;
  margin-top: 6vh;
}

.input {
  height: 5vh;
  width: 30vw;
  border-radius: 1vh;
  border: 1.5px solid rgb(50, 50, 50);
  padding-left: 0.5vw;
  font-size: 18px;
}
.error {
  border: 1.5px solid red;
}
.error-message p {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  margin-top: 1vh;
}
button {
  height: 6vh;
  width: 15vw;
  border: none;
  border-radius: 1vh;
  background-color: rgb(50, 50, 50);
  color: white;
  font-size: 18px;
  cursor: pointer;
}
</style>

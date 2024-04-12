<template>
  <div class="header">
    <button @click="$router.push({ name: 'chat' })" class="button left-button">CHAT</button>
    <div class="right-side">
      <button @click="$router.push({ name: 'register' })">Registration</button>

      <button @click="$router.push({ name: 'sign-in' })">Login</button>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  background-color: rgb(50, 50, 50);
  height: 6vh;
}
.right-side {
  display: flex;
  background-color: rgb(50, 50, 50);
}
button {
  margin-right: 3vw;
  align-self: center;
  background-color: rgb(50, 50, 50);
  color: white;
  border: none;
  font-size: 18px;
  cursor: pointer;
}
.left-button {
  margin-left: 4vw;
  font-size: 22px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>

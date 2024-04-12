<script>
export default {
  props: {
    username: String
  }
}
</script>
<template>
  <div class="container">
    <p class="username hey">It's you,</p>
    <h1 class="username">{{ username }}!</h1>
  </div>
</template>

<style scoped>
.container {
  margin: auto;
  margin-top: 1vh;
  height: 100vh;
  width: 95vw;
  background-color: rgb(221, 221, 221);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 1vw;
}

.username {
  font-size: 32px;
  font-family: Arial, Helvetica, sans-serif;
  background-color: rgb(221, 221, 221);
}
.hey {
  font-size: 18px;
}
</style>

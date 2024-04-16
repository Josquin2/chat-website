<script>
import Chat from '@/components/chat.vue'

export default {
  components: {
    Chat
  },
  data() {
    return {
      friends: [],
      choosed: 'Choose your friend!'
    }
  },
  methods: {
    chooseFriend(friend) {
      console.log(friend)
      this.choosed = friend
    }
  },
  async mounted() {
    const resp = await fetch('https://2c43ac71b0e719c8.mokky.dev/users')
    const data = await resp.json()
    for (let friend of data) {
      if (friend.username != sessionStorage.getItem('username')) {
        this.friends.push(friend.username)
      }
    }
  }
}
</script>

<template>
  <div class="left-bar">
    <ul class="friends">
      <li v-for="friend of friends" @click="chooseFriend(friend)">{{ friend }}</li>
    </ul>
    <div class="add-friends">
      <button>Add friends</button>
    </div>
  </div>
  <Chat :name="choosed" />
</template>

<style scoped>
.left-bar {
  height: 100vh;
  width: 20vw;
  background-color: rgb(50, 50, 50);
  position: absolute;
  border-top: 1px solid rgb(221, 221, 221);
  padding: 2vh;
  display: flex;
  flex-direction: column;
}
.friends {
  background-color: rgb(50, 50, 50);
}
.friends li {
  list-style: none;
  height: 6vh;
  background-color: gray;
  color: white;
  margin-top: 1vh;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  cursor: pointer;
  border-radius: 1vh;
  padding-top: 1vh;
}
.add-friends {
  position: absolute;
  top: 95vh;
  left: 0;
}
.add-friends button {
  width: 20vw;
  height: 5vh;
  cursor: pointer;
  border: none;
  background-color: rgb(50, 50, 50);
  color: white;
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
}
</style>

<script>
export default {
  data() {
    return {
      currentText: '',
      messages: []
    }
  },
  methods: {
    sendMessage() {
      this.messages.push(this.currentText)
      this.currentText = ''
    },
    isReturn(key) {
      if (key === 'Enter') {
        this.sendMessage()
      }
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="chat">
      <!-- message -->
      <p v-for="msg in messages">{{ msg }}</p>
    </div>
    <div class="textarea">
      <input type="text" v-model="currentText" @keydown="isReturn($event.key)" autofocus />
      <button @click="sendMessage">Send</button>
    </div>
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
  align-items: center;
  flex-direction: column;
  border-radius: 1vw;
}
.chat {
  margin-top: 4vh;
  align-self: center;
  background-color: white;
  height: 80vh;
  width: 80vw;
  display: flex;
  flex-direction: column;
  padding: 10vh;
  overflow: scroll;
  border-radius: 1vw 1vw 0vw 0vw;
}
.textarea {
  display: flex;
  width: 80vw;
  justify-content: center;
  align-items: flex-end;
  border-radius: 0vw 0vw 1vw 1vw;
}
.textarea input {
  width: 40vw;
  height: 6vh;
  margin-bottom: 4vh;
  font-size: 18px;
  border: 1px solid rgb(50, 50, 50);
  border-radius: 1vh 0vh 0vh 1vh;
  padding-left: 0.5vw;
}
.textarea button {
  margin-bottom: 4vh;
  width: 4vw;
  height: 6vh;
  border: 1px solid rgb(50, 50, 50);
  border-radius: 0vh 1vh 1vh 0vh;
  background-color: rgb(50, 50, 50);
  color: white;
  font-size: 18px;
  cursor: pointer;
}

.chat p {
  height: max-content;
  width: max-content;
  border: 2vh solid rgb(221, 221, 221);
  border-radius: 10px;
  background-color: rgb(221, 221, 221);
  margin: 1vw;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
}
</style>

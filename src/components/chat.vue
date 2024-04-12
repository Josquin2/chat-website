<script>
export default {
  props: {
    name: String
  },
  data() {
    return {
      prevName: 'Choose your friend!',
      currentText: '',
      messages: [],
      data: {}
    }
  },
  methods: {
    async sendMessage() {
      if (this.name != 'Choose your friend!' && sessionStorage.getItem('username') != null) {
        const resp = await fetch('https://2c43ac71b0e719c8.mokky.dev/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: sessionStorage.getItem('username'),
            to: this.name,
            msg: this.currentText
          })
        })
        this.messages.push(this.currentText)
        this.currentText = ''
      } else {
        console.log('choose name and login!')
      }
    },
    isReturn(key) {
      if (key === 'Enter') {
        this.sendMessage()
      }
    }
  },
  watch: {
    async name() {
      this.messages = []
      const resp = await fetch('https://2c43ac71b0e719c8.mokky.dev/messages')
      const data = await resp.json()
      for (let msg of data) {
        if (msg.from == sessionStorage.getItem('username') && msg.to == this.name) {
          this.messages.push(msg.msg)
        }
      }
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="chat">
      <p class="friend">{{ name }}</p>

      <div class="chat-common">
        <p v-for="msg in messages">{{ msg }}</p>
      </div>
      <!-- message -->
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
  margin-left: 20vw;
  height: 100vh;
  width: 80vw;
  background-color: rgb(221, 221, 221);
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 0vw 0vw 1vw 1vw;
}
.chat {
  margin-top: 4vh;
  align-self: center;
  background-color: white;
  height: 80vh;
  width: 70vw;
  display: flex;
  flex-direction: column;
  padding: 5vh;
  border-radius: 1vw 1vw 0vw 0vw;
}
.chat-common {
  height: 60vh;
  background-color: rgb(50, 50, 50);
  overflow: scroll;
  margin-top: 1vh;
  border-radius: 1vh;
}
.friend {
  text-align: center;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
}
.textarea {
  display: flex;
  width: 70vw;
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

.chat-common p {
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

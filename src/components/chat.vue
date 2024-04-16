<script>
export default {
  props: {
    name: String
  },
  data() {
    return {
      prevName: 'Choose your friend!',
      currentText: '',
      allMessages: [],
      user: sessionStorage.getItem('username')
    }
  },
  methods: {
    async sendMessage() {
      if (this.name != 'Choose your friend!' && this.user != null) {
        const resp = await fetch('https://2c43ac71b0e719c8.mokky.dev/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: this.user,
            to: this.name,
            msg: this.currentText
          })
        })

        this.allMessages.push({ from: this.user, to: this.name, msg: this.currentText })

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
      this.allMessages = []
      const resp = await fetch('https://2c43ac71b0e719c8.mokky.dev/messages')
      const data = await resp.json()
      for (let msg of data) {
        if (msg.from == this.name && msg.to == this.user) {
          this.allMessages.push(msg)
        } else if (msg.from == this.user && msg.to == this.name) {
          this.allMessages.push(msg)
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
        <div class="one-message" v-for="msg in allMessages">
          <p v-if="msg.from == user" class="from-messages to-messages">
            {{ msg.msg }}
          </p>
          <p v-else class="from-messages">{{ msg.msg }}</p>
        </div>
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
  display: flex;
  flex-direction: column;
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
.one-message {
  display: flex;
  flex-direction: column;
  background-color: rgb(50, 50, 50);
}

.from-messages {
  height: max-content;
  width: max-content;
  border: 2vh solid rgb(221, 221, 221);
  border-radius: 10px;
  background-color: rgb(221, 221, 221);
  margin: 1vh;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
}
.to-messages {
  align-self: flex-end;
}
</style>

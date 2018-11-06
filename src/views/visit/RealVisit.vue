<template>
  <div>
    xxx
  </div>
</template>

<script>
//  import Vue from 'vue'
  import VueWebsocket from 'vue-websocket'
  import axios from 'axios'

  export default {
//    name: "RealVisit",
      data() {
        return {
          msg: ''
        }
      },
      methods: {
        add() {
          // Emit the server side
          this.$socket.emit('add', {a: 5, b: 3})
        },

        get() {
          this.$socket.emit('get', {id: 12}, response => {})
        }
        },

    socket: {
      events: {
        changed(msg)
        {
          console.log('Something changed: ' + msg)
        }
      }
    },
  mounted()
  {
    axios
      .get('http://127.0.0.1:8888/')
      .then(response => {
      console.log(response.data)
  })
  }
}
</script>

<style scoped>
  .el-aside {
    background: blue;
  }
  .el-main {
    background: black;
  }
</style>

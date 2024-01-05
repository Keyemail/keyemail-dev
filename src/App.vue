<template>
  <navbar></navbar>
  <RouterView></RouterView>
</template>

<script>
import navbar from './components/NavBar.vue'

export default {
  components: {
    navbar,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap');

html, body, #app {
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  max-width: 1920px;
  margin: auto;
  margin: 0px 20px;
}

* { 
  margin: 0;
  padding: 0;
}

body {
  background-color: #192236;
}
</style>

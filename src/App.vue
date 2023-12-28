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

* { 
  margin: 0;
  padding: 0;
}
body {
  background-color: #192236;
  margin: 20px 20px;
}
</style>

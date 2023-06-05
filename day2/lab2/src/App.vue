<template>
<NavBar v-if="!$route.meta.hideNavbar"/>
<div class="container">
  <router-view></router-view>
</div>

</template>

<script>
// import HomeApp from "./components/HomeApp.vue"
import NavBar from "./components/NavBar.vue"


export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

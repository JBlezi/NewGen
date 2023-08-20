<template>
  <div>
    <MainNavbar />
    <router-view />
    <MainFooter />
  </div>
</template>

<script>

import MainNavbar from '@/components/Navbar.vue'
import MainFooter from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {

    MainNavbar, // Registering Navbar component
    MainFooter  // Registering Footer component
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
</style>

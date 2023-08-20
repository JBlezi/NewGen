<template>
  <footer>
    <div class="text-main bg-footer flex h-80 flex-col">
      <div class="flex mb-12">
        <ul class="list-none text-left p-8">
          <li class="mb-2"><router-link to="/festival">FESTIVAL</router-link></li>
          <li class="mb-2"><router-link to="/about-us">ABOUT US</router-link></li>
          <li class="mb-2"><router-link to="/join-us">JOIN US</router-link></li>
          <li class="mb-2"><router-link to="/contact">CONTACT</router-link></li>
        </ul>
        <ul class="list-none text-left p-8">
          <li class="mb-2"><router-link to="/contact">SPONSORS</router-link></li>
          <li class="mb-2"><router-link to="/contact">PRESS RELEASES</router-link></li>
          <li class="mb-2"><router-link to="/contact">PARTNERS</router-link></li>
        </ul>
      </div>
      <div class="flex px-8 justify-between align-text-bottom">
        <div class="text-xs text-left w-1/2">
          © 2022 Berlin NewGen Chinese Film Festival. All rights reserved.
        </div>
        <div class="text-center space-x-4 mt-4">
          <font-awesome-icon :icon="['fab', 'facebook-f']" class="h-6 w-6"/>
          <font-awesome-icon :icon="['fab', 'instagram']" class="h-6 w-6"/>
          <font-awesome-icon :icon="['fab', 'youtube']" class="h-6 w-6"/>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'MainFooter'
  }
</script>

<style scoped>
/* CSS styles specific to navbar */
</style>

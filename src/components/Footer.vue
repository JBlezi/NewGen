<template>
  <footer>
    <div class="text-main bg-footer flex p-8 md:p-16 h-80 flex-col justify-between">
      <div class="flex mb-12">
        <ul class="list-none text-left ">
          <li class="mb-2"><router-link to="/festival">FESTIVAL</router-link></li>
          <li class="mb-2"><router-link to="/about-us">ABOUT US</router-link></li>
          <li class="mb-2"><router-link to="/join-us">JOIN US</router-link></li>
          <li class="mb-2"><router-link to="/contact">CONTACT</router-link></li>
        </ul>
        <ul class="list-none text-left px-8 md:px-16">
          <li class="mb-2"><router-link to="/sponsors">SPONSORS</router-link></li>
          <li class="mb-2"><router-link to="/press-releases">PRESS RELEASES</router-link></li>
          <li class="mb-2"><router-link to="/partners">PARTNERS</router-link></li>
        </ul>
      </div>
      <div class="flex mb-4 justify-between align-text-bottom">
        <div class="text-xs text-left w-1/2">
          © 2022 Berlin NewGen Chinese Film Festival. All rights reserved.
        </div>
        <div class="text-center space-x-4 md:space-x-8 mt-4 md:mt-0">
          <a href="https://www.facebook.com/NEW.GEN.BERLIN" target="_blank"><font-awesome-icon :icon="['fab', 'facebook-f']" class="h-6 w-6"/></a>
          <a href="https://www.instagram.com/new_gen_berlin/" target="_blank"><font-awesome-icon :icon="['fab', 'instagram']" class="h-6 w-6"/></a>
          <a href="https://www.youtube.com/channel/UCIZrq3i32Tt56IAGWWWFZqA" target="_blank"><font-awesome-icon :icon="['fab', 'youtube']" class="h-6 w-6"/></a>
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

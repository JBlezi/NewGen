<template>
  <MainNavbar />
  <div class="max-w-[1300px] mx-auto">
    <router-view />
  </div>
  <SponsorSlider :sponsors="images"></SponsorSlider>
  <MainFooter />
</template>

<script>

import MainNavbar from '@/components/Navbar.vue'
import MainFooter from '@/components/Footer.vue'
import SponsorSlider from './components/SponsorSlider.vue';

export default {
  name: 'App',
  components: {
    SponsorSlider,
    MainNavbar, // Registering Navbar component
    MainFooter  // Registering Footer component
  },
  data() {
    return {
      images: [
        require('@/assets/acce-transparent.png'),
        require('@/assets/btd.png'),
        require('@/assets/bunterpanda.png'),
        require('@/assets/cathayplay.png'),
        require('@/assets/gotiger-red.png'),
        require('@/assets/qizhihua.png'),
        require('@/assets/tingsong.png'),
        require('@/assets/touchthelimit.png'),
        // ... add more images as required
      ],
    }
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

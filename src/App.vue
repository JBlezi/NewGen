<template>
  <MainNavbar />
  <div class="max-w-[1300px] mx-auto">
    <router-view />
  </div>
  <SponsorSlider :sponsors="sponsors"></SponsorSlider>
  <MainFooter />
</template>

<script>

import MainNavbar from '@/components/Navbar.vue'
import MainFooter from '@/components/Footer.vue'
import SponsorSlider from './components/SponsorSlider.vue';
import { getAllFestivalSponsors } from './api/contentful';

export default {
  name: 'App',
  components: {
    SponsorSlider,
    MainNavbar, // Registering Navbar component
    MainFooter  // Registering Footer component
  },
  created() {
    getAllFestivalSponsors()
      .then((response) => {
        this.sponsors = response.items.map(item => item.fields.logo.fields.file.url);
        console.log("SPONSORS",  this.sponsors)


      })
      .catch(console.error)
      .finally(() => {
        this.isLoaded = true;
      });
    },
  data() {
    return {
      isLoaded: false,
      sponsors: [],
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

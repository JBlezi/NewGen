<template>
  <MainNavbar />
  <div class="max-w-[1300px] mx-auto dark:bg-black">
    <router-view />
  </div>
  <SponsorSlider v-if="isLoaded" :sponsors="sponsors"></SponsorSlider>
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
    this.setLanguagePreference();
    getAllFestivalSponsors()
      .then((response) => {
        this.sponsors = response.items.map(item => item.fields.logo.fields.file.url);
      })
      .catch(console.error)
      .finally(() => {
        this.isLoaded = true;
      });

    // Check and set the initial theme on app creation
    this.setInitialTheme();
    console.log(this.prefersDarkScheme)

    this.darkThemeMatcher = window.matchMedia("(prefers-color-scheme: dark)");

    // Optional: Listen for system preference changes
    this.darkThemeMatcher.addEventListener("change", (e) => {
      if (e.matches) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    });
  },
  methods: {
    setLanguagePreference() {
      const supportedLanguages = ['en', 'zh'];
      let language = localStorage.getItem('userLanguage');

      if (!language) {
        const browserLanguage = (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage;
        language = supportedLanguages.includes(browserLanguage.split('-')[0]) ? browserLanguage.split('-')[0] : 'en';
        localStorage.setItem('userLanguage', language);
      }
    },
    async setInitialTheme() {
      let storedTheme = localStorage.getItem('theme');

      // Check if theme is already saved in local storage
      if (storedTheme) {
        if (storedTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } else {
        // If theme is not in local storage, check system preference
        this.darkThemeMatcher = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (this.darkThemeMatcher) {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');  // Save to local storage
        } else {
          localStorage.setItem('theme', 'light');  // Save to local storage
        }
      }
    }
  },
  data() {
    return {
      userLanguage: 'en',  // Default language
      isLoaded: false,
      sponsors: [],
      darkThemeMatcher: false,
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

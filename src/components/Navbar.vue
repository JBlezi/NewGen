<template>
  <nav class="fixed w-full bg-white dark:bg-black dark:text-white top-0 md:h-20 h-16 lg:h-14 z-10 bg-opacity-80 backdrop-blur-sm">
    <div>
      <div class="lg:flex lg:justify-between">
        <router-link to="/" class="flex flex-row" @click="isOpen = false">
          <img :src="logoImage" alt="Logo" class="md:h-12 md:w-12 h-8 w-8 lg:h-8 lg:w-8 m-4 lg:m-3">
          <span class="self-center text-lg xl:text-2xl font-medium">NewGen</span>
        </router-link>
        <div class="lg:flex hidden lg:block xl:text-lg p-8 space-x-8 py-4 font-medium">
          <div class="flex space-x-2 justify-center text-xl">
            <button @click="changeLanguage('en')" :class="{ 'text-main': $i18n.locale === 'en' }">&#x1F1EC;&#x1F1E7;</button>
            <button @click="changeLanguage('zh')" :class="{ 'text-main': $i18n.locale === 'zh' }">&#x1F1E8;&#x1F1F3;</button>
          </div>
          <router-link active-class="text-main" to="/">{{ $t('nav.navbar1') }}</router-link>
          <router-link active-class="text-main" to="/festival">{{ $t('nav.footer1') }}</router-link>
          <router-link active-class="text-main" to="/about-us">{{ $t('nav.footer2') }}</router-link>
          <router-link active-class="text-main" to="/join-us">{{ $t('nav.footer3') }}</router-link>
          <router-link active-class="text-main" to="/submissions">{{ $t('nav.navbar2') }}</router-link>
          <router-link active-class="text-main" to="/contact">{{ $t('nav.footer4') }}</router-link>
          <router-link active-class="text-main" to="/archive">{{ $t('nav.navbar3') }}</router-link>
        </div>
      </div>
      <div>
        <!-- Hamburger & Close Icon -->
        <div @click="isOpen = !isOpen" class="cursor-pointer lg:hidden">
          <div class="z-10 absolute top-5 right-5" v-if="!isOpen">
            <img v-if="currentTheme == 'light'" :src="hamburgerSvg" alt="Logo" class="md:h-10 md:w-10 h-6 w-6">
            <img v-else :src="hamburgerSvgWhite" alt="Logo" class="md:h-10 md:w-10 h-6 w-6">
          </div> <!-- You can replace this with a hamburger SVG/icon -->
          <div class="z-10 absolute top-5 right-5" v-else>
            <img v-if="currentTheme == 'light'" :src="closingX" alt="Logo" class="md:h-10 md:w-10 h-6 w-6">
            <img v-else :src="closingXWhite" alt="Logo" class="md:h-10 md:w-10 h-6 w-6">
          </div> <!-- You can replace this with an X SVG/icon -->
        </div>


        <!-- Navigation Links -->
        <div v-if="isOpen" class="bg-white dark:bg-black fixed top-16 text-center w-full h-screen">
          <ul class="list-none p-8 mt-12 bg-white dark:bg-black">
            <li class="text-2xl md:text-4xl mb-4 md:mb-16" @click="isOpen = !isOpen"><router-link to="/">{{ $t('nav.navbar1') }}</router-link></li>
            <li class="text-2xl md:text-4xl mb-4 md:mb-16" @click="isOpen = !isOpen"><router-link to="/festival">{{ $t('nav.footer1') }}</router-link></li>
            <li class="text-2xl md:text-4xl mb-4 md:mb-16" @click="isOpen = !isOpen"><router-link to="/about-us">{{ $t('nav.footer2') }}</router-link></li>
            <li class="text-2xl md:text-4xl mb-4 md:mb-16" @click="isOpen = !isOpen"><router-link to="/join-us">{{ $t('nav.footer3') }}</router-link></li>
            <li class="text-2xl md:text-4xl mb-4 md:mb-16" @click="isOpen = !isOpen"><router-link to="/submissions">{{ $t('nav.navbar2') }}</router-link></li>
            <li class="text-2xl md:text-4xl mb-4 md:mb-16" @click="isOpen = !isOpen"><router-link to="/contact">{{ $t('nav.footer4') }}</router-link></li>
            <li class="text-2xl md:text-4xl mb-8 md:mb-16" @click="isOpen = !isOpen"><router-link to="/archive">{{ $t('nav.navbar3') }}</router-link></li>
            <li>
              <div class="flex space-x-8 justify-center text-4xl md:text-5xl mb-4 md:mb-16">
                <button @click="changeLanguage('en')" :class="{ 'text-main': $i18n.locale === 'en' }">&#x1F1EC;&#x1F1E7;</button>
                <button @click="changeLanguage('zh')" :class="{ 'text-main': $i18n.locale === 'zh' }">&#x1F1E8;&#x1F1F3;</button>
              </div>
            </li>
          </ul>

          <!-- Social Media Links -->
          <div class="text-center space-x-8 md:space-x-16 bg-white dark:bg-black">
            <a href="https://www.facebook.com/NEW.GEN.BERLIN" target="_blank"><font-awesome-icon :icon="['fab', 'facebook-f']" class="text-2xl md:text-4xl"/></a>
            <a href="https://www.instagram.com/new_gen_berlin/" target="_blank"><font-awesome-icon :icon="['fab', 'instagram']" class="text-2xl md:text-4xl"/></a>
            <a href="https://www.youtube.com/channel/UCIZrq3i32Tt56IAGWWWFZqA" target="_blank"><font-awesome-icon :icon="['fab', 'youtube']" class="text-2xl md:text-4xl"/></a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'MainNavbar',
    data() {
    return {
      logoImage: require('@/assets/cropped-newgen-logo.png'),
      hamburgerSvg: require('@/assets/hamburger.svg'),
      hamburgerSvgWhite: require('@/assets/hamburgerSvg-white.svg'),
      closingXWhite: require('@/assets/closingX-white.svg'),
      closingX: require('@/assets/ClosingX.svg'),
      isOpen: false,
    };
  },
  computed: {
    // Map the currentTheme state from Vuex store to your component
    ...mapState({
      currentTheme: state => {
        // Log the current theme for debugging
        console.log('Current theme from Vuex store:', state.currentTheme);
        return state.currentTheme;
      }
    })
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang; // set the language
      localStorage.setItem('userLanguage', lang); // store the language in localStorage
      this.isOpen = false; // close the navigation (optional)
      location.reload();
    }
  }
}
</script>

<style scoped>
/* CSS styles specific to navbar */
</style>

<template>
  <nav class="fixed w-full bg-white top-0 md:h-20 h-16 lg:h-14 z-10 bg-opacity-80 backdrop-blur-sm">
    <div>
      <div class="lg:flex lg:justify-between">
        <router-link to="/" class="flex flex-row" @click="isOpen = false">
          <img :src="logoImage" alt="Logo" class="md:h-12 md:w-12 h-8 w-8 lg:h-8 lg:w-8 m-4 lg:m-3">
          <span class="self-center text-lg xl:text-2xl font-medium">NewGen</span>
        </router-link>
        <div class="flex hidden lg:block xl:text-lg p-8 space-x-8 py-4 font-medium">
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
            <img :src="hamburgerSvg" alt="Logo" class="md:h-10 md:w-10 h-6 w-6">
          </div> <!-- You can replace this with a hamburger SVG/icon -->
          <div class="z-10 absolute top-5 right-5" v-else>
            <img :src="closingX" alt="Logo" class="md:h-10 md:w-10 h-6 w-6">
          </div> <!-- You can replace this with an X SVG/icon -->
        </div>


        <!-- Navigation Links -->
        <div v-if="isOpen" class="bg-white fixed top-16 text-center w-full h-screen">
          <ul class="list-none p-8 mt-12 bg-white">
            <li class="text-2xl md:text-4xl mb-4 md:mb-16" @click="isOpen = !isOpen"><router-link to="/">{{ $t('nav.navbar1') }}</router-link></li>
            <li class="text-2xl md:text-4xl mb-4 md:mb-16" @click="isOpen = !isOpen"><router-link to="/festival">{{ $t('nav.footer1') }}</router-link></li>
            <li class="text-2xl md:text-4xl mb-4 md:mb-16" @click="isOpen = !isOpen"><router-link to="/about-us">{{ $t('nav.footer2') }}</router-link></li>
            <li class="text-2xl md:text-4xl mb-4 md:mb-16" @click="isOpen = !isOpen"><router-link to="/join-us">{{ $t('nav.footer3') }}</router-link></li>
            <li class="text-2xl md:text-4xl mb-4 md:mb-16" @click="isOpen = !isOpen"><router-link to="/submissions">{{ $t('nav.navbar2') }}</router-link></li>
            <li class="text-2xl md:text-4xl mb-4 md:mb-16" @click="isOpen = !isOpen"><router-link to="/contact">{{ $t('nav.footer4') }}</router-link></li>
            <li class="text-2xl md:text-4xl mb-4 md:mb-16" @click="isOpen = !isOpen"><router-link to="/archive">{{ $t('nav.navbar3') }}</router-link></li>
          </ul>

          <!-- Social Media Links -->
          <div class="text-center space-x-8 md:space-x-16 bg-white">
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
  export default {
    name: 'MainNavbar',
    data() {
    return {
      logoImage: require('@/assets/cropped-newgen-logo.png'),
      hamburgerSvg: require('@/assets/hamburger.svg'),
      closingX: require('@/assets/ClosingX.svg'),
      isOpen: false
    };
  }
  }
</script>

<style scoped>
/* CSS styles specific to navbar */
</style>

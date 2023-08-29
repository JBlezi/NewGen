<template>
  <nav class="fixed w-full bg-white top-0 md:h-20 h-16 lg:h-16 z-10">
    <div>
      <div class="lg:flex lg:justify-between">
        <router-link to="/" class="flex flex-row" @click="isOpen = false">
          <img :src="logoImage" alt="Logo" class="md:h-12 md:w-12 h-8 w-8 lg:h-8 lg:w-8 m-4">
          <span class="self-center text-xl lg:py-5 lg:font-medium">NewGen</span>
        </router-link>
        <div class="flex hidden lg:block p-8 space-x-8 py-5 font-medium">
          <router-link active-class="text-main" to="/">HOME</router-link>
          <router-link active-class="text-main" to="/festival">FESTIVAL</router-link>
          <router-link active-class="text-main" to="/about-us">ABOUT US</router-link>
          <router-link active-class="text-main" to="/join-us">JOIN US</router-link>
          <router-link active-class="text-main" to="/submissions">SUBMISSIONS</router-link>
          <router-link active-class="text-main" to="/contact">CONTACT</router-link>
          <router-link active-class="text-main" to="/archive">ARCHIVE</router-link>
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
        <div v-if="isOpen" class="bg-white fixed top-16 text-center w-full h-full">
          <ul class="list-none p-8 mt-12">
            <li class="text-2xl md:text-4xl mb-4 md:mb-16" @click="isOpen = !isOpen"><router-link to="/">HOME</router-link></li>
            <li class="text-2xl md:text-4xl mb-4 md:mb-16" @click="isOpen = !isOpen"><router-link to="/festival">FESTIVAL</router-link></li>
            <li class="text-2xl md:text-4xl mb-4 md:mb-16" @click="isOpen = !isOpen"><router-link to="/about-us">ABOUT US</router-link></li>
            <li class="text-2xl md:text-4xl mb-4 md:mb-16" @click="isOpen = !isOpen"><router-link to="/join-us">JOIN US</router-link></li>
            <li class="text-2xl md:text-4xl mb-4 md:mb-16" @click="isOpen = !isOpen"><router-link to="/submissions">SUBMISSIONS</router-link></li>
            <li class="text-2xl md:text-4xl mb-4 md:mb-16" @click="isOpen = !isOpen"><router-link to="/contact">CONTACT</router-link></li>
            <li class="text-2xl md:text-4xl mb-4 md:mb-16" @click="isOpen = !isOpen"><router-link to="/archive">ARCHIVE</router-link></li>
          </ul>

          <!-- Social Media Links -->
          <div class="text-center space-x-8 md:space-x-16">
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

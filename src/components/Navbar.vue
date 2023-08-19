<template>
  <nav>
    <div class="m-4 h-8">
      <div class="flex flex-row">
        <img :src="logoImage" alt="Logo" class="h-8 w-8 mr-2">
        <span class="self-center">NewGen</span>
      </div>
      <div>
        <!-- Hamburger & Close Icon -->
        <div @click="isOpen = !isOpen" class="cursor-pointer">
          <div class="z-10 absolute top-5 right-5" v-if="!isOpen">
            <img :src="hamburgerSvg" alt="Logo" class="h-6 w-6">
          </div> <!-- You can replace this with a hamburger SVG/icon -->
          <div class="z-10 absolute top-5 right-5" v-else>
            <img :src="closingX" alt="Logo" class="h-6 w-6">
          </div> <!-- You can replace this with an X SVG/icon -->
        </div>

        <!-- Navigation Links -->
        <div v-if="isOpen" class="bg-white fixed top-12 left-0 w-full h-full">
          <ul class="list-none p-8 mt-12">
            <li class="text-2xl mb-4"><router-link to="/festival">FESTIVAL</router-link></li>
            <li class="text-2xl mb-4"><router-link to="/about-us">ABOUT US</router-link></li>
            <li class="text-2xl mb-4"><router-link to="/join-us">JOIN US</router-link></li>
            <li class="text-2xl mb-4"><router-link to="/submission">SUBMISSION</router-link></li>
            <li class="text-2xl mb-4"><router-link to="/contact">CONTACT</router-link></li>
          </ul>

          <!-- Social Media Links -->
          <div class="absolute left-0 right-0 bottom-1/4 text-center space-x-8">
            <font-awesome-icon :icon="['fab', 'facebook-f']" class="h-6 w-6"/>
            <font-awesome-icon :icon="['fab', 'instagram']" class="h-6 w-6"/>
            <font-awesome-icon :icon="['fab', 'youtube']" class="h-6 w-6"/>
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

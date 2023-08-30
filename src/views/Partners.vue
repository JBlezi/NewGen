<template>
  <section class=" my-24 h-screen">
    <h1 class="text-main px-8 md:px-16 lg:px-24 font-bold text-5xl md:mb-16">Partners</h1>
    <img v-for="image in images" :key="image" :src="image" alt="" class="mx-auto md:px-[25%] my-8">
  </section>
</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Partners',
  components: {
  },
  data() {
    return {
      images: [
        require('@/assets/Moviemento_black.png'),
        require('@/assets/filmfreeway-logo-hires-black.png'),
        // ... add more images as required
      ],
    }
  }
};
</script>

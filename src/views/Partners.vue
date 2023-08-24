<template>
  <section class="px-8 my-24">
    <h1 class="text-main font-bold text-5xl">Partners</h1>
    <img v-for="image in images" :key="image" :src="image" alt="" class="mx-auto my-8">
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

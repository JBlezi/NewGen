<template>
  <section class="px-8 md:px-16 my-24">
    <h1 class="text-main font-bold text-3xl md:text-4xl lg:text-5xl">{{ $t('contact') }}</h1>
  </section>
</template>

<script>



export default {
  name: 'ContactForm',
  data() {
    return {
      entry: {},
      movies: [] // Define movies as an array
    }
  },

};
</script>

<template>
  <section class="px-8 my-16">
    <div class="text-3xl font-bold text-main mb-4 italic">
      {{ movie.title }}
    </div>
    <div class="">
      <img :src="movie.poster" alt="Movie Poster" class="h-full min-w-full"/>
    </div>
    <div class="font-medium flex justify-between mb-4">
      <div>
        <span class="text-main">Director:</span> {{ movie.director }}
      </div>
      <div>
        <span class="text-main">Year:</span> {{ movie.year }}
      </div>
    </div>
    <div class="mb-4">
      <img :src="movie.still" alt="Still Shot" class="h-full min-w-full"/>
    </div>
    <div class="font-medium text-lg mb-4">
      {{ movie.description }}
    </div>
    <div class="">
      <img :src="movie.director_foto" alt="Still Shot" class="h-full min-w-full"/>
    </div>
    <div>
      {{ movie.director.toLowerCase() }}
    </div>
  </section>
</template>

<script>
export default {
  name: 'MovieSection',
  props: ['button', 'movie'],
  data() {
    return {
    };
  },
  methods: {

  },
  computed: {

  },
};
</script>

<style scoped>
</style>

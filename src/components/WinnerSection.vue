<template>
  <section class="px-8">
    <div v-for="movie in filteredMovies" :key="movie.id">
      <div class="text-main text-3xl font-bold mb-4">
        <h2>Winner {{ movie.ran }}</h2>
      </div>
      <img :src="movie.poster" alt="" class="mb-4">
      <div class="mb-4">
        <h3 class="flex justify-center text-main text-lg font-medium">{{ movie.title }}</h3>
        <h3 class="flex justify-center text-lg font-medium">{{ movie.director }} {{ movie.year }}</h3>
      </div>
    </div>
    <p class="flex justify-center mb-8 underline text-main" @click="toggleAdditionalEntries">{{ showAdditionalWinners ? 'Hide past editions winners' : 'See past editions winners' }}</p>
  </section>
</template>

<script>
export default {
  name: 'WinnerSection',
  props: ['movies'],
  data() {
    return {
      showAdditionalWinners: false
    };
  },
  methods: {
    toggleAdditionalEntries() {
      this.showAdditionalWinners = !this.showAdditionalWinners;
    }
  },
  computed: {
    filteredMovies() {
      if (this.showAdditionalWinners) {
        return this.movies;
      }
      return this.movies.slice(0, 1); // returns only the first movie
    }
  }
};
</script>

<style scoped>
</style>

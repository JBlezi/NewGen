<template>
  <section class="px-8 md:px-16 lg:px-24">
    <div v-for="movie in filteredMovies" :key="movie.id" class="mb-8 md:mb-16">
      <div class="text-main text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-8">
        <h2>Winner {{ movie.ran }}</h2>
      </div>
      <div class="md:flex">
        <img :src="movie.poster" alt="" class="mb-4 md:w-1/2 lg:w-1/3">
        <div class="mb-4 md:w-1/2 lg:w-2/3 md:ml-16">
          <h3 class="flex justify-center text-main text-lg font-medium md:font-bold md:text-2xl lg:text-3xl md:justify-start">{{ movie.title }}</h3>
          <h3 class="flex justify-center text-lg font-medium md:font-bold md:text-2xl lg:text-3xl md:justify-start md:mb-8">{{ movie.director }} | {{ movie.year }}</h3>
          <p class="flex justify-center text-lg lg:text-2xl font-medium hidden md:block">{{ movie.description }}</p>
        </div>
      </div>
    </div>
    <p class="flex justify-center mb-8 md:text-2xl underline text-main cursor-pointer" @click="toggleAdditionalEntries">{{ showAdditionalWinners ? 'Hide past editions winners' : 'See past editions winners' }}</p>
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

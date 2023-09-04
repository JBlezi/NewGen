<template>
  <section class="px-8 md:px-16 lg:px-24">
    <div v-for="movie in filteredMovies" :key="movie.sys.id" class="mb-8 md:mb-16">
      <div class="text-main text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-8 lg:mb-16">
        <h2>Winner {{ movie.fields.competitionYear }}</h2>
      </div>
      <div class="md:flex">
        <img :src="movie.fields.poster.fields.file.url" alt="" class="mb-4 md:w-1/2 lg:w-1/3">
        <div class="mb-4 md:w-1/2 lg:w-2/3 md:ml-16">
          <h3 class="flex justify-center text-main text-lg font-medium md:font-bold md:text-2xl lg:text-3xl md:justify-start">{{ movie.fields.title }}</h3>
          <h3 class="flex justify-center text-lg font-medium md:font-bold md:text-2xl lg:text-3xl md:justify-start md:mb-8">{{ movie.fields.director }} | {{ movie.fields.year }}</h3>
          <p class="flex justify-center text-lg lg:text-2xl font-medium hidden md:block">{{ movie.fields.description }}</p>
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
  mounted() {
    console.log("WINNERS FROM WINNERSECTION", this.movies);
  },
  created() {
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

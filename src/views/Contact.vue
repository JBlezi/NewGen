<template>
  <section class="px-8 md:px-16 my-24">
    <h1 class="text-main font-bold text-3xl md:text-4xl lg:text-5xl">Contact</h1>
        <!-- Display a list of all movie titles -->
        <ul>
      <li v-for="movie in movies" :key="movie.sys.id">
        {{ movie.fields.title }}
      </li>
    </ul>

    <!-- Show 'Loading...' if movies array is empty -->
    <p v-if="movies.length === 0">Loading...</p>
  </section>
</template>

<script>
import { getEntry } from '@/api/contentful'
import { getAllMovies } from '@/api/contentful' // Import the getAllMovies function


export default {
  name: 'ContactForm',
  data() {
    return {
      entry: {},
      movies: [] // Define movies as an array
    }
  },
  created() {
    getEntry('6YvqjC13X5Is43ssGRJDRH')
      .then((response) => {
        this.entry = response;
        console.log("Received entry:", response);
      })
      .catch(console.error)

    getAllMovies()
      .then((response) => {
        this.movies = response.items; // Store all fetched movie entries in the movies array
        console.log("Received movies:", response.items);
      })
      .catch(console.error)
  }
};
</script>

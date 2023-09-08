<template>
  <HeroSection  v-if="screening && screening.length && screening[0].movies" :bgImage="screening[0].movies[0].poster">
    <template v-slot:heading>
      <span class="break-all">{{ screening[0].heading }}</span>
    </template>
    <template v-slot:subheading>
      {{ screening[0].subheading }}
    </template>
    <template v-slot:description>
      {{ $t('movieDetails.movieDetails1') }}
    </template>
    <template v-slot:middle-button>
      <Button :link="screening[0].button_link">{{ $t('movieDetails.movieDetails2') }}</Button>
    </template>
  </HeroSection>
  <div v-if="screening && screening.length && screening[0].movies">
    <MovieSection
      v-for="(movie, index) in screening[0].movies"
      :key="index"
      :movie="movie">
    </MovieSection>
    <Button class="mb-32" :link="screening[0].button_link">{{ $t('movieDetails.movieDetails2') }}</Button>
  </div>
</template>

<!-- eslint-disable vue/multi-word-component-names -->
<script>
import HeroSection from '@/components/HeroSection.vue';
import Button from '@/components/Button.vue';
import MovieSection from '@/components/MovieSection.vue';
import { getLocalizedMoviesByCategory } from '@/api/contentful'
import { getAllLocalizedScreenings } from '@/api/contentful'

export default {
  name: 'MovieDetails',
  props: ['id'],
  components: {
    HeroSection,
    Button,
    MovieSection
  },
  data() {
    return {
      userLanguage: '',
      isLoading: true, // Add this
      sectionsWithMovies: [],
      movieImage: require('@/assets/singing_in_the_widerness.png'),
      screening: [],
      button_link: 'https://moviemento.de/',
      entry: {},
      heroDescription: '',
      heroHeading: '',
      heroBackground: '',
      heroLocation: '',
      heroDays: '',
      movies: [],
      screenings: [],
      festivalImage: require('@/assets/newgen_2023.png'),
      bgImagePath: require('@/assets/palm_trees.png'),
      bgImagePath2: require('@/assets/moviemento.png'),
      bgImagePath3: require('@/assets/projector.png'),
      video: 'https://www.youtube.com/embed/h42hPO34D-4?si=4qJpD0h0tCQqE2um',
      screeningSections2: [],
    }
  },
  watch: {
    '$route.params.id': function(newId) {
      this.screening = this.fetchScreeningById(newId);
    }
  },
  methods: {
    fetchScreeningById(id) {
      return this.screeningSections2.filter((section) => section.id == id)
    },
  },
  created() {
    this.userLanguage = localStorage.getItem('userLanguage');

    Promise.all([
        getLocalizedMoviesByCategory('Festival', this.userLanguage),
        getAllLocalizedScreenings(this.userLanguage)
    ]).then(([moviesResponse, screeningsResponse]) => {
        this.movies = moviesResponse.items;

        this.screenings = screeningsResponse.items;

        this.sectionsWithMovies = this.screenings.map(screening => {
        return {
          heading: screening.fields.heading,
          subheading: screening.fields.subheading,
          button_link: screening.fields.buttonLink,
          id: screening.sys.id,
          movies: this.movies.filter(movie => {

            return movie.fields.screeningSection && movie.fields.screeningSection.fields.heading === screening.fields.heading;
          }).map(movie => {
            return {
              title: movie.fields.title,
              director: movie.fields.director,
              year: movie.fields.competitionYear,
              poster: movie.fields.poster.fields.file.url, // Assuming poster has the structure as you've shown
              description: movie.fields.description,
              competitionYear: movie.fields.competitionYear,
              duration: movie.fields.duration,
              languages: movie.fields.languages,
              subtitles: movie.fields.subtitles,
              directorFoto: movie.fields.directorFoto.fields.file.url,
              movieScene: movie.fields.movieScene.fields.file.url,
              directorBio: movie.fields.directorBio,
              id: movie.sys.id
            }
          })
        };
      });

        // Filter out sections that don't have movies
        this.screeningSections2 = this.sectionsWithMovies.filter(section => section.movies.length > 0);
        this.screening = this.fetchScreeningById(this.$route.params.id);

        this.isLoading = false; // Set to false once everything is loaded
    })
    .catch(error => {
        console.error(error);
        this.isLoading = false; // Set to false even on error, but handle this better in a real-world scenario
    });
  }
}


</script>

<style scoped>

</style>

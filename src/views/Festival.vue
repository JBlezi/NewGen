<template>
  <div v-if="!isLoading"> <!-- Wrap your components in this condition to ensure everything is loaded -->
    <HeroSection :bgImage="heroBackground" class="md:mb-24">
      <template v-slot:heading>
        {{heroHeading}}
      </template>
      <template v-slot:subheading>
        <span class="text-main">{{ $t('festival1') }}</span><br>{{heroDays}}
        <br><br>
        <span class="text-main">{{ $t('festival2') }}</span><br>{{heroLocation}}
      </template>
      <template v-slot:description>
        {{ heroDescription }}
      </template>
    </HeroSection>
    <ScreeningSection
      v-for="(section, index) in screeningSections2"
      :key="index"
      button="GET TICKETS"
      :movieList="section"
      :button_link="section.button_link"
      :bgColor="index % 2 ? desiredColor : 'white'">
      <template v-slot:heading>
        {{ section.heading }}
      </template>
      <template v-slot:subheading>
        {{ section.subheading }}
      </template>
    </ScreeningSection>
  </div>
</template>

<!-- eslint-disable vue/multi-word-component-names -->
<script>
import HeroSection from '@/components/HeroSection.vue';
import ScreeningSection from '@/components/ScreeningSection.vue'
import { getLocalizedEntry } from '@/api/contentful'
import { getAllLocalizedScreenings } from '@/api/contentful'
import { getLocalizedMoviesByCategory } from '@/api/contentful'




export default {
  name: 'Festival',
  components: {
    HeroSection,
    ScreeningSection,
  },
  created() {
    this.userLanguage = localStorage.getItem('userLanguage');

    Promise.all([
      getLocalizedEntry('4ZD3OG28KgbjRUTOLVFGfM', this.userLanguage),
      getLocalizedMoviesByCategory('Festival', this.userLanguage),
      getAllLocalizedScreenings(this.userLanguage)
    ])
    .then(([entryResponse, moviesResponse, screeningsResponse]) => {
      this.entry = entryResponse;
      this.heroDays = this.entry.fields.festivalDays;
      this.heroDescription = this.entry.fields.description;
      this.heroLocation = this.entry.fields.location;
      this.heroHeading = this.entry.fields.heading;
      this.heroBackground = this.entry.fields.backgroundPicture.fields.file.url;

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

      this.isLoading = false; // Set this to false after all data has been loaded
    })
    .catch(error => {
      console.error(error);
      this.isLoading = false; // Set this to false even on error, but consider some error handling in real scenarios
    });


  },
  data() {
    return {
      userLanguage: '',
      isLoading: true, // This indicates if the content is being loaded
      sectionsWithMovies: [],
      id: 0,
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
      button_link: '',
      video: 'https://www.youtube.com/embed/h42hPO34D-4?si=4qJpD0h0tCQqE2um',
      screeningSections2: [],
      desiredColor: "#FFF8EE"
    }
  }
};

</script>

<style scoped>

</style>

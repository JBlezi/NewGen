<template>
  <div v-if="!isLoading">
    <HeroSection :bgImage="heroBackground">
      <template v-slot:heading>
        {{heroHeading}}
      </template>
      <template v-slot:subheading>
        {{heroSubheading}}
      </template>
      <template v-slot:description>
        {{heroDescription}}
      </template>
      <template v-slot:middle-button>
        <Button :link="heroButtonLink">{{heroButtonText}}</Button>
      </template>
    </HeroSection>
    <section class="mt-12 mb-12 md:my-24 lg:mt-64 hidden">
      <div class="px-8 md:px-16">
        <h3 class="text-main text-3xl md:text-4xl lg:text-5xl md:font-semibold italic font-bold mb-4">{{ $t('specialEvent.specialEvent1') }}</h3>
        <p class="dark:text-white font-medium text-lg md:text-xl lg:text-2xl">{{ description }}</p>
      </div>
    </section>
    <section class="mt-12 mb-12 md:my-24 hidden">
      <div class="px-8 md:px-16">
        <h3 class="text-main text-3xl md:text-4xl lg:text-5xl md:font-semibold italic font-bold mb-4">{{ $t('specialEvent.specialEvent2') }}</h3>
        <p class="dark:text-white font-medium text-lg md:text-xl lg:text-2xl">The {{ heroHeading }} {{ $t('specialEvent.specialEvent3') }} <span class="font-bold">{{ date }} at Moviemento Kino, Kottbusser Damm 22, Berlin.</span></p>
      </div>
    </section>
    <ScreeningSection
      class="my-8"
      v-for="(section, index) in screeningSections"
      :key="index"
      :button="section.buttonText"
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
    <section class="py-8">
      <Button :link="heroButtonLink">{{heroButtonText}}</Button>
    </section>
    <section v-if="this.sponsors.length > 0" class="flex flex-wrap items-center justify-center">
      <div class="w-1/2 md:w-1/4" v-for="sponsor of sponsors" :key="sponsor.sys.id">
        <img :src="sponsor.fields.logo.fields.file.url" alt="" class="w-full">
      </div>
    </section>
  </div>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue';
import Button from '@/components/Button.vue'
import ScreeningSection from '@/components/ScreeningSection.vue'
import { getAllMovies, getLocalizedEntry, getAllLocalizedSpecialEventMovies, getAllSpecialEventSponsors } from '@/api/contentful'
import { getLocalizedMoviesByCategory, getAllLocalizedScreenings } from '@/api/contentful'

export default {
  name: 'SpecialEvent',
  components: {
    HeroSection,
    Button,
    ScreeningSection
  },
  created() {
    console.log('SpecialEvent component created');
    this.userLanguage = localStorage.getItem('userLanguage');
    console.log('User language:', this.userLanguage);

    Promise.all([
      getAllSpecialEventSponsors(),
      getLocalizedEntry('54UDYpfznPt1fjqekzQA7A', this.userLanguage),
      getLocalizedEntry('3jRld98dBbx1MTeYUnSk00', this.userLanguage),
      getAllMovies(),
      getAllLocalizedSpecialEventMovies(this.userLanguage),
      getLocalizedMoviesByCategory('Special Event', this.userLanguage),
      getAllLocalizedScreenings(this.userLanguage)
    ])
    .then(([sponsorsResponse, entry2Response, entryResponse, moviesResponse, classicMoviesResponse, specialEventMoviesResponse, screeningsResponse]) => {
      console.log('All data fetched successfully');

      console.log('Sponsors:', sponsorsResponse.items);
      this.sponsors = sponsorsResponse.items;

      console.log('Entry2:', entry2Response);
      this.entry2 = entry2Response;
      this.description = this.entry2.fields.content2;
      this.date = this.entry2.fields.content;

      console.log('Entry:', entryResponse);
      this.entry = entryResponse;
      this.heroSubheading = this.entry.fields.subheading;
      this.heroDescription = this.entry.fields.description;
      this.heroHeading = this.entry.fields.heading;
      this.heroButtonLink = this.entry.fields.middleButtonLink;
      this.heroButtonText = this.entry.fields.middleButton;
      this.heroBackground = this.entry.fields.backgroundPicture.fields.file.url;

      console.log('Movies:', moviesResponse.items);
      this.movies = moviesResponse.items;

      console.log('Classic Movies:', classicMoviesResponse.items);
      this.classicMovies = classicMoviesResponse.items;

      console.log('Special Event Movies:', specialEventMoviesResponse.items);
      const specialEventMovies = specialEventMoviesResponse.items;

      console.log('Screenings:', screeningsResponse.items);
      const screenings = screeningsResponse.items;

      this.screeningSections = screenings.map(screening => {
        const section = {
          heading: screening.fields.heading,
          subheading: screening.fields.subheading,
          button_link: screening.fields.buttonLink,
          buttonText: screening.fields.buttonText,
          id: screening.sys.id,
          movies: specialEventMovies.filter(movie => {
            return movie.fields.screeningSection && movie.fields.screeningSection.fields.heading === screening.fields.heading;
          }).map(movie => ({
            title: movie.fields.title,
            director: movie.fields.director,
            year: movie.fields.competitionYear,
            poster: movie.fields.poster?.fields?.file?.url,
            description: movie.fields.description,
            competitionYear: movie.fields.competitionYear,
            duration: movie.fields.duration,
            languages: movie.fields.languages,
            subtitles: movie.fields.subtitles,
            directorFoto: movie.fields.directorFoto?.fields?.file?.url,
            movieScene: movie.fields.movieScene?.fields?.file?.url,
            directorBio: movie.fields.directorBio,
            id: movie.sys.id
          }))
        };
        console.log(`Screening section "${section.heading}":`, section);
        return section;
      });

      this.screeningSections = this.screeningSections.filter(section => section.movies.length > 0);
      console.log('Filtered screening sections:', this.screeningSections);

      this.isLoading = false;
      console.log('Loading complete');
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      this.isLoading = false;
    });
  },
  data() {
    return {
      sponsors: [],
      date: '',
      description: '',
      userLanguage: '',
      entry2: {},
      entry: {},
      heroDescription: '',
      heroHeading: '',
      heroBackground: '',
      heroSubheading: '',
      heroButtonLink: '',
      heroButtonText: '',
      classicMovies: [],
      festivalImage: require('@/assets/newgen_2023.png'),
      bgImagePath: require('@/assets/palm_trees.png'),
      link: 'https://moviemento.de/',
      isLoading: true,
      screeningSections: [],
      desiredColor: "#FFF8EE"
    }
  }
};
</script>

<style scoped>
</style>

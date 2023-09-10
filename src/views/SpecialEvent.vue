<template>
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
  <section class="mt-12 mb-12 md:my-24 lg:mt-64">
    <div class="px-8 md:px-16">
      <h3 class="text-main text-3xl md:text-4xl lg:text-5xl md:font-semibold italic font-bold mb-4">{{ $t('specialEvent.specialEvent1') }}</h3>
      <p class="font-medium text-lg md:text-xl lg:text-2xl">{{ description }}</p>
    </div>
  </section>
  <section class="mt-12 mb-12 md:my-24">
    <div class="px-8 md:px-16">
      <h3 class="text-main text-3xl md:text-4xl lg:text-5xl md:font-semibold italic font-bold mb-4">{{ $t('specialEvent.specialEvent2') }}</h3>
      <p class="font-medium text-lg md:text-xl lg:text-2xl">The {{ heroHeading }} {{ $t('specialEvent.specialEvent3') }} <span class="font-bold">{{ date }} at Moviemento Kino, Kottbusser Damm 22, Berlin.</span></p>
    </div>
  </section>
  <section v-if="this.classicMovies.length > 0" class="mt-12 mb-12 md:my-24">
    <h3 class="text-main text-3xl md:text-4xl lg:text-5xl md:font-semibold italic font-bold mb-4 px-8 md:px-16 md:mb-8">{{ $t('specialEvent.specialEvent5') }}</h3>
    <MovieSectionClassic
      v-for="(movie, index) in classicMovies"
      :key="index"
      :movie="movie">
    </MovieSectionClassic>
  </section>
  <Button :link="heroButtonLink">{{heroButtonText}}</Button>
<section v-if="this.sponsors.length > 0" class="flex flex-wrap items-center justify-center">
    <div class="w-1/2 md:w-1/4" v-for="sponsor of sponsors" :key="sponsor.sys.id">
      <img :src="sponsor.fields.logo.fields.file.url" alt="" class="w-full">
    </div>
  </section>
</template>

<!-- eslint-disable vue/multi-word-component-names -->
<script>
import HeroSection from '@/components/HeroSection.vue';
import MovieSectionClassic from '@/components/MovieSectionClassic.vue'
import Button from '@/components/Button.vue'
import { getAllMovies } from '@/api/contentful'
import { getLocalizedEntry } from '@/api/contentful'
import { getAllLocalizedSpecialEventMovies } from '@/api/contentful';
import { getAllSpecialEventSponsors } from '@/api/contentful'

export default {
  name: 'SpecialEvent',
  components: {
    HeroSection,
    MovieSectionClassic,
    Button
  },
  created() {
    this.userLanguage = localStorage.getItem('userLanguage');

    getAllSpecialEventSponsors().then((response) => {
      this.sponsors = response.items;
    })

    getLocalizedEntry('54UDYpfznPt1fjqekzQA7A', this.userLanguage)
    .then((response) => {
      this.entry2 = response;
      this.description = this.entry2.fields.content2;
      this.date = this.entry2.fields.content;
    })
    .catch(console.error);

    getLocalizedEntry('3jRld98dBbx1MTeYUnSk00', this.userLanguage)
    .then((response) => {
      this.entry = response;
      this.heroSubheading = this.entry.fields.subheading;
      this.heroDescription = this.entry.fields.description;
      this.heroHeading = this.entry.fields.heading;
      this.heroButtonLink = this.entry.fields.middleButtonLink;
      this.heroButtonText = this.entry.fields.middleButton;
      this.heroBackground = this.entry.fields.backgroundPicture.fields.file.url;  // assuming the attribute is named backgroundPicture

    })
    .catch(console.error);

    getAllMovies()
      .then((response) => {
        this.movies = response.items; // Store all fetched movie entries in the movies array

      })
      .catch(console.error)

    getAllLocalizedSpecialEventMovies(this.userLanguage).then((response) => {
      this.classicMovies = response.items;
    })
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
    }
  },
  methods: {

  }
};

</script>

<style scoped>

</style>

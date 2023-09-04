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
  <section class="mt-12 mb-12 md:my-24">
    <div class="px-8 md:px-16">
      <h3 class="text-main text-3xl md:text-4xl lg:text-5xl md:font-semibold italic font-bold mb-4">What is it?</h3>
      <p class="font-medium text-lg md:text-xl lg:text-2xl">Join us for a special summer screening of Chinese animation classics in collaboration with the China Contemporary Animation Art Archive Museum. This event will showcase four titles produced by the renowned Shanghai Animation Film Studio.</p>
    </div>
  </section>
  <section class="mt-12 mb-12 md:my-24">
    <div class="px-8 md:px-16">
      <h3 class="text-main text-3xl md:text-4xl lg:text-5xl md:font-semibold italic font-bold mb-4">Time and Date</h3>
      <p class="font-medium text-lg md:text-xl lg:text-2xl">The Special Summer Screening will take place on <span class="font-bold">Friday 14th July 2023 2:00pm at Moviemento Kino, Kottbusser Damm 22, Berlin.</span></p>
    </div>
  </section>
  <section class="mt-12 mb-12 md:my-24">
    <h3 class="text-main text-3xl md:text-4xl lg:text-5xl md:font-semibold italic font-bold mb-4 px-8 md:px-16 md:mb-8">Films</h3>
    <MovieSectionClassic
      v-for="(movie, index) in classicMovies"
      :key="index"
      :movie="movie">
    </MovieSectionClassic>
  </section>
  <Button :link="heroButtonLink">GET TICKETS</Button>
  <section class="flex flex-wrap items-center">
    <div class="w-1/2 md:w-1/4" v-for="image of images" :key="image">
      <img :src="image" alt="" class="w-full">
    </div>
  </section>
</template>

<!-- eslint-disable vue/multi-word-component-names -->
<script>
import HeroSection from '@/components/HeroSection.vue';
import MovieSectionClassic from '@/components/MovieSectionClassic.vue'
import Button from '@/components/Button.vue'
import { getEntry } from '@/api/contentful'
import { getAllMovies } from '@/api/contentful'
import { getAllSpecialEventMovies } from '@/api/contentful';

export default {
  name: 'SpecialEvent',
  components: {
    HeroSection,
    MovieSectionClassic,
    Button
  },
  created() {
    getEntry('3jRld98dBbx1MTeYUnSk00')
    .then((response) => {
      this.entry = response;
      this.heroSubheading = this.entry.fields.subheading;
      this.heroDescription = this.entry.fields.description;
      this.heroHeading = this.entry.fields.heading;
      this.heroButtonLink = this.entry.fields.middleButtonLink;
      this.heroButtonText = this.entry.fields.middleButton;
      this.heroBackground = this.entry.fields.backgroundPicture.fields.file.url;  // assuming the attribute is named backgroundPicture
      console.log("Received entry:", response);
    })
    .catch(console.error);

    getAllMovies()
      .then((response) => {
        this.movies = response.items; // Store all fetched movie entries in the movies array

      })
      .catch(console.error)

    getAllSpecialEventMovies().then((response) => {
      this.classicMovies = response.items;
      console.log("Received movies:", response.items);
      console.log("CLASSIC MOVIES", this.classicMovies)
    })
  },
  data() {
    return {
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
      movies2: [
        { title: 'What can I hold you with', director: 'DI SHEN', year: '2021', poster: require('@/assets/childrens_corner.png'), director_foto: require('@/assets/chen_dongnan.png'), still: require('@/assets/SingingStill.png'), description: 'After hiding in the mountains for a century, a Miao ethnic village choir is discovered by an outsider and becomes a national sensation. Two young Miaos and all the villagers must reconcile their faith, identity, and love with the real world of China.', id:8, duration: '20:21', language: 'Mandarin Chinese', subtitles: 'Chineses/English' },
        { title: 'Everything near becomes distant', director: 'YUNYI ZHU', year: '2022', poster: require('@/assets/Egg-Hair-Tie-Homework-Books.png'), director_foto: require('@/assets/chen_dongnan.png'), still: require('@/assets/SingingStill.png'), description: 'After hiding in the mountains for a century, a Miao ethnic village choir is discovered by an outsider and becomes a national sensation. Two young Miaos and all the villagers must reconcile their faith, identity, and love with the real world of China.', duration: '20:21', language: 'Mandarin Chinese', subtitles: 'Chineses/English', id:9 },
        { title: 'Go Fishing', director: 'XIN NAN', year: '2022', poster: require('@/assets/nanhai_girls.png'), director_foto: require('@/assets/chen_dongnan.png'), still: require('@/assets/SingingStill.png'), description: 'After hiding in the mountains for a century, a Miao ethnic village choir is discovered by an outsider and becomes a national sensation. Two young Miaos and all the villagers must reconcile their faith, identity, and love with the real world of China.', duration: '20:21', language: 'Mandarin Chinese', subtitles: 'Chineses/English', id:10 },
        { title: 'What can I hold you with', director: 'DI SHEN', year: '2021', poster: require('@/assets/secrets_at_the_intermissions.png'), director_foto: require('@/assets/chen_dongnan.png'), still: require('@/assets/SingingStill.png'), description: 'After hiding in the mountains for a century, a Miao ethnic village choir is discovered by an outsider and becomes a national sensation. Two young Miaos and all the villagers must reconcile their faith, identity, and love with the real world of China.', duration: '20:21', language: 'Mandarin Chinese', subtitles: 'Chineses/English', id:11 },
        { title: 'Everything near becomes distant', director: 'YUNYI ZHU', year: '2022', poster: require('@/assets/a_firecracker_story.png'), director_foto: require('@/assets/chen_dongnan.png'), still: require('@/assets/SingingStill.png'), description: 'After hiding in the mountains for a century, a Miao ethnic village choir is discovered by an outsider and becomes a national sensation. Two young Miaos and all the villagers must reconcile their faith, identity, and love with the real world of China.', duration: '20:21', language: 'Mandarin Chinese', subtitles: 'Chineses/English', id:12 },
        { title: 'Go Fishing', director: 'XIN NAN', year: '2022', poster: require('@/assets/summer_swing.png'), director_foto: require('@/assets/chen_dongnan.png'), still: require('@/assets/SingingStill.png'), description: 'After hiding in the mountains for a century, a Miao ethnic village choir is discovered by an outsider and becomes a national sensation. Two young Miaos and all the villagers must reconcile their faith, identity, and love with the real world of China.', duration: '20:21', language: 'Mandarin Chinese', subtitles: 'Chineses/English', id: 13 },
      ],
      images: [
        require('@/assets/ToBeMo.png'),
        require('@/assets/Octopinns.png'),
        require('@/assets/ToBeMo.png'),
        require('@/assets/Octopinns.png'),
        // ... add more images as required
      ],
    }
  },
  methods: {

  }
};

</script>

<style scoped>

</style>

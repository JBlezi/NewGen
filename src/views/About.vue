<template>
  <HeroSection :bgImage="bgImagePath">
    <template v-slot:heading>
     {{heroHeading}}
    </template>
    <template v-slot:description>
      {{ heroDescription }}
    </template>
  </HeroSection>
  <section class="mt-12 mb-12 md:mb-24">
    <div class="px-8 md:px-16 lg:px-24">
      <h3 class="text-main text-3xl md:text-4xl lg:text-5xl italic font-medium font-semibold mb-4 md:mb-8">{{ $t('aboutUs1') }}</h3>
      <p class="font-medium text-lg md:text-2xl">{{ $t('aboutUs2') }}</p>
    </div>
  </section>
  <section class="mt-12 mb-12 md:mb-24">
    <div class="px-8 md:px-16 lg:px-24">
      <h3 class="text-main text-3xl md:text-4xl lg:text-5xl italic font-medium font-semibold mb-4 md:mb-8">{{ $t('aboutUs3') }}</h3>
      <p class="font-medium text-lg md:text-2xl">{{ $t('aboutUs4') }}<br><br></p>
      <p class="font-medium text-lg md:text-2xl">{{ $t('aboutUs5') }}</p>
    </div>
  </section>
  <section class="mt-12 mb-12 md:mb-24">
    <div class="px-8 md:px-16 lg:px-24">
      <h3 class="text-main text-3xl md:text-4xl lg:text-5xl italic font-medium font-semibold mb-4 md:mb-16">{{ $t('aboutUs6') }}</h3>
    </div>
    <div class="flex flex-wrap mx-8 md:mx-16 lg:mx-24 justify-around">
      <div v-for="(member) in staffMembers" :key="member.sys.id" class="text-center mb-8">
        <img :src="member.fields.picture.fields.file.url" :alt="member.fields.name" class="w-32 h-48 md:w-64 md:h-96 mx-auto object-cover">
        <p class="mt-2 font-medium md:text-2xl">{{ member.fields.name }}</p>
        <p class="italic md:text-2xl">{{ member.fields.title }}</p>
      </div>
    </div>

  </section>
</template>

<!-- eslint-disable vue/multi-word-component-names -->
<script>
import HeroSection from '@/components/HeroSection.vue';
import { getAllMovies } from '@/api/contentful'
import { getAllLocalizedStaffMembers } from '@/api/contentful';
import { getLocalizedEntry } from '@/api/contentful';

export default {
  name: 'About',
  components: {
    HeroSection
  },
  created() {
    this.userLanguage = localStorage.getItem('userLanguage');

    getLocalizedEntry('9iD7ADjNwwwDA87ZWjSdl', this.userLanguage)
    .then((response) => {
      this.entry = response;
      this.heroDescription = this.entry.fields.description;
      this.heroHeading = this.entry.fields.heading;
      this.bgImagePath = this.entry.fields.backgroundPicture.fields.file.url;  // assuming the attribute is named backgroundPicture
      console.log("Received entry:", this.userLanguage);
    })
    .catch(console.error);

    getAllMovies()
      .then((response) => {
        this.movies = response.items; // Store all fetched movie entries in the movies array
        console.log("Received movies:", response.items);
      })
      .catch(console.error)

    getAllLocalizedStaffMembers(this.userLanguage).then((response) => {
      this.staffMembers = response.items;
    })
  },
  data() {
    return {
      entry: {},
      heroDescription: '',
      heroHeading: '',
      bgImagePath: '',
      userLanguage: '',
      staffMembers: '',
    }
  }
}
</script>

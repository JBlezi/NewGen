<template>
  <section class="px-8 md:px-16 my-24">
    <h1 class="text-main font-bold text-3xl md:text-4xl lg:text-5xl mb-8">{{ $t('sponsors') }}</h1>
    <div class="mb-16">
      <h2 class="text-2xl font-medium">Organizer</h2>
      <div v-if="isLoaded" class="flex flex-wrap space-x-16">
        <img v-for="sponsor in organizers" :key="sponsor.sys.div" :src="sponsor.fields.logo.fields.file.url" alt="" class="mx-auto md:mx-0 my-8 md:my-16 h-16 md:h-32">
      </div>
    </div>
    <div class="mb-16">
      <h2 class="text-2xl font-medium">Strategic Partners</h2>
      <div v-if="isLoaded" class="flex flex-wrap space-x-16">
        <img v-for="sponsor in strategicPartners" :key="sponsor.sys.div" :src="sponsor.fields.logo.fields.file.url" alt="" class="mx-auto md:mx-0 my-8 md:my-16 h-16 md:h-32">
      </div>
    </div>
    <div class="mb-16">
      <h2 class="text-2xl font-medium">Headline Sponsor</h2>
      <div v-if="isLoaded" class="flex flex-wrap space-x-16">
        <img :src="this.headlineSponsor.fields.logo.fields.file.url" alt="" class="mx-auto lg:mx-0 my-8 lg:h-96">
      </div>
    </div>
    <div class="mb-16">
      <h2 class="text-2xl font-medium">Media Partners</h2>
      <div v-if="isLoaded" class="flex flex-wrap space-x-16">
        <img v-for="sponsor in mediaPartners" :key="sponsor.sys.div" :src="sponsor.fields.logo.fields.file.url" alt="" class="mx-auto md:mx-0 my-8 md:my-16 h-16 md:h-32">
      </div>
    </div>
  </section>
</template>

<script>
import { getAllFestivalSponsors } from '@/api/contentful';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Sponsors',
  components: {
  },
  created() {
    getAllFestivalSponsors()
      .then((response) => {
        this.sponsors = response.items;
        this.segregateSponsors();
        this.isLoaded = true;
      })
      .catch(console.error)
  },
  data() {
    return {
      isLoaded: false,
      sponsors: [],
      organizers: [],
      strategicPartners: [],
      mediaPartners: [],
      headlineSponsor: {},
    }
  },
  methods: {
  segregateSponsors() {
    this.sponsors.forEach(sponsor => {
      const type = sponsor.fields.type;

      switch (type) {
        case 'organizer':
          this.organizers.push(sponsor);
          break;

        case 'strategic partner':
          this.strategicPartners.push(sponsor);
          break;

        case 'media partner':
          this.mediaPartners.push(sponsor);
          break;

        case 'headline sponsor':
          this.headlineSponsor = sponsor;  // assuming there's only one headline sponsor
          break;

        default:
          break;
      }
    });
  }
},

};
</script>

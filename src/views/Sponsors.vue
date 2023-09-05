<template>
  <section class="px-8 md:px-16 my-24">
    <h1 class="text-main font-bold text-3xl md:text-4xl lg:text-5xl">Sponsors</h1>
    <div v-if="isLoaded" class="lg:flex lg:flex-wrap lg:space-x-16">
      <img v-for="sponsor in sponsors" :key="sponsor.sys.div" :src="sponsor.fields.logo.fields.file.url" alt="" class="mx-auto my-8 md:my-16">
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
        this.sponsors = response.items; // Store all fetched movie entries in the movies array
        console.log("SPONSORS",  this.sponsors)
      })
      .catch(console.error)
      this.isLoaded = true;
  },
  data() {
    return {
      isLoaded: false,
      sponsors: [],
    }
  }
};
</script>

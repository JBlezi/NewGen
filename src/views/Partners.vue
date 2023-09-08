<template>
  <section class=" my-24 h-screen">
    <h1 class="text-main px-8 md:px-16 lg:px-24 font-bold text-5xl md:mb-16">{{ $t('partners') }}</h1>
    <img v-for="partner in partners" :key="partner.sys.id" :src="partner.fields.logo.fields.file.url" alt="" class="mx-auto md:px-[25%] my-8">
  </section>
</template>

<script>
import { getAllPartners } from '@/api/contentful';


export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Partners',
  components: {
  },
  created() {
    getAllPartners()
      .then((response) => {
        this.partners = response.items; // Store all fetched movie entries in the movies array
      })
      .catch(console.error)
  },
  data() {
    return {
      partners: '',
    }
  }
};
</script>

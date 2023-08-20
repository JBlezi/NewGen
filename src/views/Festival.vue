<template>
  <HeroSection :bgImage="festivalImage">
    <span class="text-main">Festival Lineup 2023</span>
  </HeroSection>
  <ScreeningSection button="GET TICKETS">
    <template v-slot:heading>
      Love is Love
    </template>
    <template v-slot:subheading>
      Nov. 3 2022, 7:30pm | OmeU OPENING FILM
    </template>
  </ScreeningSection>
</template>

<!-- eslint-disable vue/multi-word-component-names -->
<script>
import HeroSection from '@/components/HeroSection.vue';
import ScreeningSection from '@/components/ScreeningSection.vue'

export default {
  name: 'Festival',
  components: {
    HeroSection,
    ScreeningSection,
  },
  data() {
    return {
      festivalImage: require('@/assets/newgen_2023.png'),
      bgImagePath: require('@/assets/palm_trees.png'),
      bgImagePath2: require('@/assets/moviemento.png'),
      bgImagePath3: require('@/assets/projector.png')
    };
  }
}
</script>

<style scoped>

</style>

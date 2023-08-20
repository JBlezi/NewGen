<template>
  <HeroSection :bgImage="festivalImage">
      Berlin <br>NewGen <br>Chinese <br>Film Festival <br><span class="text-main">2023</span>
  </HeroSection>
  <HomeSection button="LEARN MORE" :bgImage="bgImagePath3">
    <template v-slot:heading>
      Special <br><span class="pl-8">Summer</span> <br><span class="pl-16">Screening</span>
    </template>
    <template v-slot:subheading>
      Classic Animation Collection<br> Shanghai Animation Film Studio Retro
    </template>
    <template v-slot:description>
      Join us for a special summer screening of Chinese Animation Classics in collaboration with the China Contemporary Animation Art Archive Museum.
    </template>
  </HomeSection>
  <HomeSection button="LEARN MORE" :bgImage="bgImagePath">
    <template v-slot:heading>
      Film Festival 2023
    </template>
    <template v-slot:description>
      Discover the entries for this years edition of NewGen Chinese Film Festival
    </template>
  </HomeSection>
  <HomeSection button="LEARN MORE" :bgImage="bgImagePath2">
    <template v-slot:heading>
      Film Festival Impressions 2021-2022
    </template>
    <template v-slot:description>
      Discover the entries and winners of past NewGen Film Festivals
    </template>
  </HomeSection>
  <SponsorSlider></SponsorSlider>
</template>

<!-- eslint-disable vue/multi-word-component-names -->
<script>
import HomeSection from '@/components/HomeSection.vue';
import SponsorSlider from '@/components/SponsorSlider.vue';
import HeroSection from '@/components/HeroSection.vue'

export default {
  name: 'Home',
  components: {
    HomeSection,
    SponsorSlider,
    HeroSection,
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

<template>
  <HeroSection :bgImage="bgGif">
    <template v-slot:heading>
      <span class="text-black">Berlin</span> NewGen <br class="hidden lg:block"><span class="text-black">Chinese Film Festival</span>
    </template>
  </HeroSection>
  <HomeSection button="LEARN MORE" :button_link="buttonLink" :image="festivalImage">
    <template v-slot:heading>
      Special Summer Screening
    </template>
    <template v-slot:subheading>
      Classic Animation Collection<br> Shanghai Animation Film Studio Retro
    </template>
    <template v-slot:description>
      Join us for a special summer screening of Chinese Animation Classics in collaboration with the China Contemporary Animation Art Archive Museum.
    </template>
  </HomeSection>
  <HomeSection button="LEARN MORE" :bgImage="bgImagePath" :button_link="buttonLink2" :video="video" :background="background2">
    <template v-slot:heading>
      Film Festival 2023
    </template>
    <template v-slot:description>
      Discover the entries for this years edition of NewGen Chinese Film Festival
    </template>
  </HomeSection>
  <HomeSection button="LEARN MORE" :bgImage="bgImagePath2" :button_link="buttonLink3" :image="festivalImage" :background="background3">
    <template v-slot:heading>
      Film Festival Archive
    </template>
    <template v-slot:description>
      Discover the entries and winners of past NewGen Film Festivals
    </template>
  </HomeSection>
  <SponsorSlider :sponsors="images"></SponsorSlider>
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
      bgImagePath3: require('@/assets/projector.png'),
      bgGif: require('@/assets/NewGen2023trailer.gif'),
      background: 'bg-white',
      background2: 'bg-gradient',
      background3: 'bg-white/80',
      buttonLink: '/special-event',
      buttonLink2: '/festival',
      buttonLink3: '/archive',
      video: 'https://www.youtube.com/embed/h42hPO34D-4?si=4qJpD0h0tCQqE2um',
      images: [
        require('@/assets/acce-transparent.png'),
        require('@/assets/btd.png'),
        require('@/assets/bunterpanda.png'),
        require('@/assets/cathayplay.png'),
        require('@/assets/gotiger-red.png'),
        require('@/assets/qizhihua.png'),
        require('@/assets/tingsong.png'),
        require('@/assets/touchthelimit.png'),
        // ... add more images as required
      ],
    };
  }
}
</script>

<style scoped>

</style>

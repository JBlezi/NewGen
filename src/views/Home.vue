<template>
  <section>
    <div class="bg-mainFestivalImage h-screen bg-cover">
      <div class="bg-white h-screen bg-opacity-50 relative">
        <div class="flex items-center h-screen">
          <h1 class="text-5xl px-8 font-bold">Berlin <br>NewGen <br>Chinese <br>Film Festival <br><span class="text-main">2023</span></h1>
        </div>
        <font-awesome-icon :icon="['fas', 'chevron-down']" class="h-6 w-6 absolute bottom-5 left-1/2 transform -translate-x-1/2"/>
      </div>
    </div>
  </section>
  <section>
    <div class="bg-projectorImage h-screen bg-cover">
      <div class="h-screen relative bg-gradient">
        <div class="flex items-center h-screen">
          <div>
            <h2 class="text-5xl px-8 font-bold text-main mb-4">Special <br><span class="pl-8">Summer</span> <br><span class="pl-16">Screening</span></h2>
            <h3 class="px-8 font-medium text-lg underline mb-4">Classic Animation Collection<br> Shanghai Animation Film Studio Retro</h3>
            <h4 class="px-8 font-medium text-lg mb-16">Join us for a special summer screening of Chinese Animation Classics in collaboration with the China Contemporary Animation Art Archive Museum. </h4>
            <div class="flex justify-center">
              <button class="border border-main font-bold rounded-full p-4">LEARN MORE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <HomeSection heading="Film Festival 2023" description="Discover the entries for this years edition of NewGen Chinese Film Festival" button="LEARN MORE" :bg-image="bgImagePath"></HomeSection>
  <HomeSection heading="Film Festival Impressions 2021-2022" description="Discover the entries and winners of past NewGen Film Festivals" button="LEARN MORE" :bg-image="bgImagePath2"></HomeSection>
  <SponsorSlider></SponsorSlider>
</template>

<!-- eslint-disable vue/multi-word-component-names -->
<script>
import HomeSection from '@/components/HomeSection.vue';
import SponsorSlider from '@/components/SponsorSlider.vue'

export default {
  name: 'Home',
  components: {
    HomeSection,
    SponsorSlider
  },
  data() {
    return {
      festivalImage: require('@/assets/newgen_2023.png'),
      bgImagePath: require('@/assets/palm_trees.png'),
      bgImagePath2: require('@/assets/moviemento.png')
    };
  }
}
</script>

<style scoped>

</style>

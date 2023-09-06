<template>
  <section class="px-8 md:px-16 my-24 lg:px-24">
    <h1 class="text-main font-bold text-5xl">Press Releases</h1>
  </section>
  <section class="lg:flex lg:mx-24 lg:space-x-16">
    <PressRelease v-for="release in releases" :key="release.sys.id" :release="release" class="mb-16"></PressRelease>
  </section>
</template>

<script>
import PressRelease from '@/components/PressRelease.vue';
import { getAllPressReleases } from '@/api/contentful';

export default {
  name: 'PressReleases',
  components: {
    PressRelease
  },
  created() {
    getAllPressReleases()
      .then((response) => {
        this.releases = response.items; // Store all fetched movie entries in the movies array
      })
      .catch(console.error)
  },
  data() {
    return {
      releases: [],
      pressReleases: [
        {image: require('@/assets/NewGen_old.webp'), title: 'Berlin NewGen Chinese Film Festival announces Lineup', teaser: 'From 3rd to 6th November the festival gives a broad overview of contemporary Chinese cinema with a selection of 19 Chinese short films and 6 feature titles… NewGen Film Festival is a Berlin-based nonprofit organisation dedicated to discovering new talented filmmakers who are making the future of Chinese-language cinema. In its first edition the festival', link: 'https://www.easternkicks.com/', link_title: "Easternkicks"},
        {image: require('@/assets/NewGen_old.webp'), title: 'NewGen Chinesisches Filmfestival Berlin', teaser: 'Vom 3.-6. November 2022 findet in Berlin das erste NewGen Chinese Film Festival statt. Gezeigt wird eine Bandbreite von Filmen junger, chinesischer Regisseur:innen. Wir haben Mitgründerin und Festivalleiterin Zhao Huangdan interviewt, um mehr darüber zu erfahren: Was bringt dich nach Berlin?  ich komme ursprünglich aus Foshan in China, aber momentan arbeite ich für den Sino-Europäischen', link: 'https://www.sinonerds.com/', link_title: "Sinonerds"}
      ]
    }
  }
};
</script>

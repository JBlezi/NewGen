<template>
  <HeroSection :bgImage="festivalImage">
    <span class="text-main">Festival Lineup 2023</span>
  </HeroSection>
  <ScreeningSection
    v-for="(section, index) in screeningSections"
    :key="index"
    button="GET TICKETS"
    :movieList="section.movies"
    :bgColor="index % 2 ? desiredColor : 'white'">
    <template v-slot:heading>
      {{ section.heading }}
    </template>
    <template v-slot:subheading>
      {{ section.subheading }}
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
      bgImagePath3: require('@/assets/projector.png'),
      screeningSections: [
        {
          movies: [
            { title: 'Will you look at me', director: 'SHULI HUANG', year: '2022', poster: require('@/assets/will_you_look_at_me.png') },
            { title: 'Lan Yu', director: 'STANLEY KWANG', year: '2001', poster: require('@/assets/lan_yu.png') },
          ],
          heading: "Love is Love",
          subheading: "Nov. 3 2022, 7:30pm | OmeU OPENING FILM"
        },
        {
          movies: [
            { title: 'What can I hold you with', director: 'DI SHEN', year: '2021', poster: require('@/assets/what_can_i_hold_you_with.png') },
            { title: 'Everything near becomes distant', director: 'YUNYI ZHU', year: '2022', poster: require('@/assets/everything_near_becomes_distant.png') },
            { title: 'Go Fishing', director: 'XIN NAN', year: '2022', poster: require('@/assets/go_fishing.png') },
          ],
          heading: "On Your Own",
          subheading: "Nov. 4 2022, 5:00pm | OmeU NEWGEN 2022"
        },
        {
          movies: [
            { title: 'Reconstructing Rural China', director: 'DI SHEN', year: '2021', poster: require('@/assets/yesterday_i_was_the_moon.png') },
            { title: 'Everything near becomes distant', director: 'YUNYI ZHU', year: '2022', poster: require('@/assets/singing_in_the_widerness.png') },
          ],
          heading: "Reconstructing Rural China",
          subheading: "Nov. 4 2022, 5:00pm | OmeU NEWGEN 2022"
        },
        {
          movies: [
            { title: 'What can I hold you with', director: 'DI SHEN', year: '2021', poster: require('@/assets/childrens_corner.png') },
            { title: 'Everything near becomes distant', director: 'YUNYI ZHU', year: '2022', poster: require('@/assets/Egg-Hair-Tie-Homework-Books.png') },
            { title: 'Go Fishing', director: 'XIN NAN', year: '2022', poster: require('@/assets/nanhai_girls.png') },
            { title: 'What can I hold you with', director: 'DI SHEN', year: '2021', poster: require('@/assets/secrets_at_the_intermissions.png') },
            { title: 'Everything near becomes distant', director: 'YUNYI ZHU', year: '2022', poster: require('@/assets/a_firecracker_story.png') },
            { title: 'Go Fishing', director: 'XIN NAN', year: '2022', poster: require('@/assets/summer_swing.png') },
          ],
          heading: "Kids no more",
          subheading: "Nov. 4 2022, 5:00pm | OmeU NEWGEN 2022"
        },
        // ... additional sections ...
      ],
    desiredColor: "#FFF8EE"
    }
  }
};

</script>

<style scoped>

</style>

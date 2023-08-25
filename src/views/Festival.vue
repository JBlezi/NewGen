<template>
  <HeroSection :bgImage="festivalImage">
    <template v-slot:heading>
      Festival Lineup 2023
    </template>
  </HeroSection>
  <ScreeningSection
    v-for="(section, index) in screeningSections"
    :key="index"
    button="GET TICKETS"
    :movieList="section"
    :button_link="button_link"
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
      button_link: 'https://moviemento.de/',
      screeningSections: [
        {
          movies: [
            { title: 'Will you look at me', director: 'SHULI HUANG', year: '2022', poster: require('@/assets/will_you_look_at_me.png'), id:1 },
            { title: 'Lan Yu', director: 'STANLEY KWANG', year: '2001', poster: require('@/assets/lan_yu.png'), id:2 },
          ],
          heading: "Love is Love",
          subheading: "Nov. 3 2022, 7:30pm | OmeU OPENING FILM",
          id: 1
        },
        {
          movies: [
            { title: 'What can I hold you with', director: 'DI SHEN', year: '2021', poster: require('@/assets/what_can_i_hold_you_with.png'), id:3 },
            { title: 'Everything near becomes distant', director: 'YUNYI ZHU', year: '2022', poster: require('@/assets/everything_near_becomes_distant.png'), id:4 },
            { title: 'Go Fishing', director: 'XIN NAN', year: '2022', poster: require('@/assets/go_fishing.png'), id:5 },
          ],
          heading: "On Your Own",
          subheading: "Nov. 4 2022, 5:00pm | OmeU NEWGEN 2022",
          id: 2
        },
        {
          movies: [
            { title: 'Reconstructing Rural China', director: 'DI SHEN', year: '2021', poster: require('@/assets/yesterday_i_was_the_moon.png'), id:6 },
            { title: 'Everything near becomes distant', director: 'YUNYI ZHU', year: '2022', poster: require('@/assets/singing_in_the_widerness.png'), id:7 },
          ],
          heading: "Reconstructing Rural China",
          subheading: "Nov. 4 2022, 5:00pm | OmeU NEWGEN 2022",
          id: 3
        },
        {
          movies: [
            { title: 'What can I hold you with', director: 'DI SHEN', year: '2021', poster: require('@/assets/childrens_corner.png'), id:8 },
            { title: 'Everything near becomes distant', director: 'YUNYI ZHU', year: '2022', poster: require('@/assets/Egg-Hair-Tie-Homework-Books.png'), id:9 },
            { title: 'Go Fishing', director: 'XIN NAN', year: '2022', poster: require('@/assets/nanhai_girls.png'), id:10 },
            { title: 'What can I hold you with', director: 'DI SHEN', year: '2021', poster: require('@/assets/secrets_at_the_intermissions.png'), id:11 },
            { title: 'Everything near becomes distant', director: 'YUNYI ZHU', year: '2022', poster: require('@/assets/a_firecracker_story.png'), id:12 },
            { title: 'Go Fishing', director: 'XIN NAN', year: '2022', poster: require('@/assets/summer_swing.png'), id: 13 },
          ],
          heading: "Kids no more",
          subheading: "Nov. 4 2022, 5:00pm | OmeU NEWGEN 2022",
          id: 4
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

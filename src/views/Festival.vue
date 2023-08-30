<template>
  <HeroSection :bgImage="festivalImage" class="md:mb-24">
    <template v-slot:heading>
      Festival Lineup 2023
    </template>
    <template v-slot:subheading>
      <span class="text-main">Festival Days:</span><br>Friday 14th - Thursday 20th September 2023
      <br><br>
      <span class="text-main">Cinema:</span><br>Moviemento Kino, Kottbusser Damm 22, Berlin.
    </template>
    <template v-slot:description>
      Join us for a very special Festival this year full  of Chinese animation classics in collaboration with the China Contemporary Animation Art Archive Museum. This event will showcase four titles produced by the renowned Shanghai Animation Film Studio.
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
      video: 'https://www.youtube.com/embed/h42hPO34D-4?si=4qJpD0h0tCQqE2um',
      screeningSections: [
        {
          movies: [
            { title: 'Will you look at me', director: 'SHULI HUANG', year: '2022', poster: require('@/assets/will_you_look_at_me.png'), description: 'After hiding in the mountains for a century, a Miao ethnic village choir is discovered by an outsider and becomes a national sensation. Two young Miaos and all the villagers must reconcile their faith, identity, and love with the real world of China.', id:1 },
            { title: 'Lan Yu', director: 'STANLEY KWANG', year: '2001', poster: require('@/assets/lan_yu.png'), description: 'After hiding in the mountains for a century, a Miao ethnic village choir is discovered by an outsider and becomes a national sensation. Two young Miaos and all the villagers must reconcile their faith, identity, and love with the real world of China.', id:2 },
          ],
          heading: "Love is Love",
          subheading: "Nov. 3 2022, 7:30pm | OmeU OPENING FILM",
          id: 1
        },
        {
          movies: [
            { title: 'What can I hold you with', director: 'DI SHEN', year: '2021', poster: require('@/assets/what_can_i_hold_you_with.png'), description: 'After hiding in the mountains for a century, a Miao ethnic village choir is discovered by an outsider and becomes a national sensation. Two young Miaos and all the villagers must reconcile their faith, identity, and love with the real world of China.', id:3 },
            { title: 'Everything near becomes distant', director: 'YUNYI ZHU', year: '2022', poster: require('@/assets/everything_near_becomes_distant.png'), description: 'After hiding in the mountains for a century, a Miao ethnic village choir is discovered by an outsider and becomes a national sensation. Two young Miaos and all the villagers must reconcile their faith, identity, and love with the real world of China.', id:4 },
            { title: 'Go Fishing', director: 'XIN NAN', year: '2022', poster: require('@/assets/go_fishing.png'), description: 'After hiding in the mountains for a century, a Miao ethnic village choir is discovered by an outsider and becomes a national sensation. Two young Miaos and all the villagers must reconcile their faith, identity, and love with the real world of China.', id:5 },
          ],
          heading: "On Your Own",
          subheading: "Nov. 4 2022, 5:00pm | OmeU NEWGEN 2022",
          id: 2
        },
        {
          movies: [
            { title: 'Reconstructing Rural China', director: 'DI SHEN', year: '2021', poster: require('@/assets/yesterday_i_was_the_moon.png'), description: 'After hiding in the mountains for a century, a Miao ethnic village choir is discovered by an outsider and becomes a national sensation. Two young Miaos and all the villagers must reconcile their faith, identity, and love with the real world of China.', id:6 },
            { title: 'Everything near becomes distant', director: 'YUNYI ZHU', year: '2022', poster: require('@/assets/singing_in_the_widerness.png'), description: 'After hiding in the mountains for a century, a Miao ethnic village choir is discovered by an outsider and becomes a national sensation. Two young Miaos and all the villagers must reconcile their faith, identity, and love with the real world of China.', id:7 },
          ],
          heading: "Reconstructing Rural China",
          subheading: "Nov. 4 2022, 5:00pm | OmeU NEWGEN 2022",
          id: 3
        },
        {
          movies: [
            { title: 'What can I hold you with', director: 'DI SHEN', year: '2021', poster: require('@/assets/childrens_corner.png'), description: 'After hiding in the mountains for a century, a Miao ethnic village choir is discovered by an outsider and becomes a national sensation. Two young Miaos and all the villagers must reconcile their faith, identity, and love with the real world of China.', id:8 },
            { title: 'Everything near becomes distant', director: 'YUNYI ZHU', year: '2022', poster: require('@/assets/Egg-Hair-Tie-Homework-Books.png'), description: 'After hiding in the mountains for a century, a Miao ethnic village choir is discovered by an outsider and becomes a national sensation. Two young Miaos and all the villagers must reconcile their faith, identity, and love with the real world of China.', id:9 },
            { title: 'Go Fishing', director: 'XIN NAN', year: '2022', poster: require('@/assets/nanhai_girls.png'), description: 'After hiding in the mountains for a century, a Miao ethnic village choir is discovered by an outsider and becomes a national sensation. Two young Miaos and all the villagers must reconcile their faith, identity, and love with the real world of China.', id:10 },
            { title: 'What can I hold you with', director: 'DI SHEN', year: '2021', poster: require('@/assets/secrets_at_the_intermissions.png'), description: 'After hiding in the mountains for a century, a Miao ethnic village choir is discovered by an outsider and becomes a national sensation. Two young Miaos and all the villagers must reconcile their faith, identity, and love with the real world of China.', id:11 },
            { title: 'Everything near becomes distant', director: 'YUNYI ZHU', year: '2022', poster: require('@/assets/a_firecracker_story.png'), description: 'After hiding in the mountains for a century, a Miao ethnic village choir is discovered by an outsider and becomes a national sensation. Two young Miaos and all the villagers must reconcile their faith, identity, and love with the real world of China.', id:12 },
            { title: 'Go Fishing', director: 'XIN NAN', year: '2022', poster: require('@/assets/summer_swing.png'), description: 'After hiding in the mountains for a century, a Miao ethnic village choir is discovered by an outsider and becomes a national sensation. Two young Miaos and all the villagers must reconcile their faith, identity, and love with the real world of China.', id: 13 },
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

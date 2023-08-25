<template>
  <HeroSection :bgImage="screening[0].movies[0].poster">
    <template v-slot:heading>
      <span class="break-all">{{ screening[0].heading }}</span>
    </template>
    <template v-slot:subheading>
      {{ screening[0].subheading }}
    </template>
    <template v-slot:description>
      Moviemento Kino, Kottbusser Damm 22, 10967 Berlin
    </template>
    <template v-slot:button>
      <Button :link="button_link">GET TICKETS</Button>
    </template>
  </HeroSection>
  <MovieSection
    v-for="(movie, index) in screening[0].movies"
    :key="index"
    :movie="movie">
  </MovieSection>
  <Button :link="button_link">GET TICKETS</Button>
</template>

<!-- eslint-disable vue/multi-word-component-names -->
<script>
import HeroSection from '@/components/HeroSection.vue';
import Button from '@/components/Button.vue';
import MovieSection from '@/components/MovieSection.vue';

export default {
  name: 'MovieDetails',
  props: ['id'],
  components: {
    HeroSection,
    Button,
    MovieSection
  },
  data() {
    return {
      movieImage: require('@/assets/singing_in_the_widerness.png'),
      screening: {},
      button_link: 'https://moviemento.de/',
      screeningSections: [
        {
          movies: [
            { title: 'Will you look at me', director: 'SHULI HUANG', year: '2022', poster: require('@/assets/will_you_look_at_me.png'), director_foto: require('@/assets/lin_yihan.png'), still: require('@/assets/moon.png'), description: 'After hiding in the mountains for a century, a Miao ethnic village choir is discovered by an outsider and becomes a national sensation. Two young Miaos and all the villagers must reconcile their faith, identity, and love with the real world of China.', id:1 },
            { title: 'Lan Yu', director: 'STANLEY KWANG', year: '2001', poster: require('@/assets/lan_yu.png'), director_foto: require('@/assets/chen_dongnan.png'), still: require('@/assets/SingingStill.png'), description: 'After hiding in the mountains for a century, a Miao ethnic village choir is discovered by an outsider and becomes a national sensation. Two young Miaos and all the villagers must reconcile their faith, identity, and love with the real world of China.', id:2 },
          ],
          heading: "Love is Love",
          subheading: "Nov. 3 2022, 7:30pm | OmeU OPENING FILM",
          id: 1
        },
        {
          movies: [
            { title: 'What can I hold you with', director: 'DI SHEN', year: '2021', poster: require('@/assets/what_can_i_hold_you_with.png'), director_foto: require('@/assets/chen_dongnan.png'), still: require('@/assets/SingingStill.png'), description: 'After hiding in the mountains for a century, a Miao ethnic village choir is discovered by an outsider and becomes a national sensation. Two young Miaos and all the villagers must reconcile their faith, identity, and love with the real world of China.', id:3 },
            { title: 'Everything near becomes distant', director: 'YUNYI ZHU', year: '2022', poster: require('@/assets/everything_near_becomes_distant.png'), director_foto: require('@/assets/chen_dongnan.png'), still: require('@/assets/SingingStill.png'), description: 'After hiding in the mountains for a century, a Miao ethnic village choir is discovered by an outsider and becomes a national sensation. Two young Miaos and all the villagers must reconcile their faith, identity, and love with the real world of China.',id:4 },
            { title: 'Go Fishing', director: 'XIN NAN', year: '2022', poster: require('@/assets/go_fishing.png'), director_foto: require('@/assets/chen_dongnan.png'), still: require('@/assets/SingingStill.png'), id:5 },
          ],
          heading: "On Your Own",
          subheading: "Nov. 4 2022, 5:00pm | OmeU NEWGEN 2022",
          id: 2
        },
        {
          movies: [
            { title: 'Reconstructing Rural China', director: 'DI SHEN', year: '2021', poster: require('@/assets/yesterday_i_was_the_moon.png'), director_foto: require('@/assets/chen_dongnan.png'), still: require('@/assets/SingingStill.png'), description: 'After hiding in the mountains for a century, a Miao ethnic village choir is discovered by an outsider and becomes a national sensation. Two young Miaos and all the villagers must reconcile their faith, identity, and love with the real world of China.', id:6 },
            { title: 'Everything near becomes distant', director: 'YUNYI ZHU', year: '2022', poster: require('@/assets/singing_in_the_widerness.png'), director_foto: require('@/assets/chen_dongnan.png'), still: require('@/assets/SingingStill.png'), description: 'After hiding in the mountains for a century, a Miao ethnic village choir is discovered by an outsider and becomes a national sensation. Two young Miaos and all the villagers must reconcile their faith, identity, and love with the real world of China.', id:7 },
          ],
          heading: "Reconstructing Rural China",
          subheading: "Nov. 4 2022, 5:00pm | OmeU NEWGEN 2022",
          id: 3
        },
        {
          movies: [
            { title: 'What can I hold you with', director: 'DI SHEN', year: '2021', poster: require('@/assets/childrens_corner.png'), director_foto: require('@/assets/chen_dongnan.png'), still: require('@/assets/SingingStill.png'), description: 'After hiding in the mountains for a century, a Miao ethnic village choir is discovered by an outsider and becomes a national sensation. Two young Miaos and all the villagers must reconcile their faith, identity, and love with the real world of China.', id:8 },
            { title: 'Everything near becomes distant', director: 'YUNYI ZHU', year: '2022', poster: require('@/assets/Egg-Hair-Tie-Homework-Books.png'), director_foto: require('@/assets/chen_dongnan.png'), still: require('@/assets/SingingStill.png'), description: 'After hiding in the mountains for a century, a Miao ethnic village choir is discovered by an outsider and becomes a national sensation. Two young Miaos and all the villagers must reconcile their faith, identity, and love with the real world of China.', id:9 },
            { title: 'Go Fishing', director: 'XIN NAN', year: '2022', poster: require('@/assets/nanhai_girls.png'), director_foto: require('@/assets/chen_dongnan.png'), still: require('@/assets/SingingStill.png'), description: 'After hiding in the mountains for a century, a Miao ethnic village choir is discovered by an outsider and becomes a national sensation. Two young Miaos and all the villagers must reconcile their faith, identity, and love with the real world of China.', id:10 },
            { title: 'What can I hold you with', director: 'DI SHEN', year: '2021', poster: require('@/assets/secrets_at_the_intermissions.png'), director_foto: require('@/assets/chen_dongnan.png'), still: require('@/assets/SingingStill.png'), description: 'After hiding in the mountains for a century, a Miao ethnic village choir is discovered by an outsider and becomes a national sensation. Two young Miaos and all the villagers must reconcile their faith, identity, and love with the real world of China.', id:11 },
            { title: 'Everything near becomes distant', director: 'YUNYI ZHU', year: '2022', poster: require('@/assets/a_firecracker_story.png'), director_foto: require('@/assets/chen_dongnan.png'), still: require('@/assets/SingingStill.png'), description: 'After hiding in the mountains for a century, a Miao ethnic village choir is discovered by an outsider and becomes a national sensation. Two young Miaos and all the villagers must reconcile their faith, identity, and love with the real world of China.', id:12 },
            { title: 'Go Fishing', director: 'XIN NAN', year: '2022', poster: require('@/assets/summer_swing.png'), director_foto: require('@/assets/chen_dongnan.png'), still: require('@/assets/SingingStill.png'), description: 'After hiding in the mountains for a century, a Miao ethnic village choir is discovered by an outsider and becomes a national sensation. Two young Miaos and all the villagers must reconcile their faith, identity, and love with the real world of China.', id: 13 },
          ],
          heading: "Kids no more",
          subheading: "Nov. 4 2022, 5:00pm | OmeU NEWGEN 2022",
          id: 4
        },
        // ... additional sections ...
      ],
    }
  },
  created() {
    this.screening = this.fetchScreeningById(this.id);
  },
  methods: {
    fetchScreeningById(id) {
      return this.screeningSections.filter((section) => section.id == id)
    }
  }
}


</script>

<style scoped>

</style>

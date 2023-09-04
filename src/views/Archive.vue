<template>
  <HeroSection :bgImage="heroBackground" class="md:mb-8">
    <template v-slot:heading>
      {{heroHeading}}
    </template>
  </HeroSection>
  <WinnerSection v-if="isLoading" :movies="winners2"></WinnerSection>
  <ScreeningSection v-for="nominee in filteredCategories" :key="nominee" :movieList="nominee" class="mb-8">
    <template v-slot:heading>
      Nominees {{ nominee.competitionYear }}
    </template>
  </ScreeningSection>
  <p class="flex justify-center mb-8 md:text-2xl underline text-main cursor-pointer" @click="toggleAdditionalEntries">{{ showAdditionalWinners ? 'Hide past editions nominees' : 'See past editions nominees' }}</p>
  <section class="my-16 md:my-32">
    <h2 class="px-8 md:px-16 lg:px-24 text-main mb-4 md:mb-16 text-3xl md:text-4xl lg:text-5xl md:font-bold font-medium">NewGen Jury</h2>
    <div class="flex flex-wrap mx-8">
      <div v-for="(member) in staff" :key="member.id" class="w-1/2 lg:w-1/3 text-center mb-8 lg:mb-32 relative" @mouseover="openModal(member.id)" @mouseleave="closeModal">
        <img :src="member.poster" :alt="member.name" class="w-32 md:w-64 h-48 md:h-96 mx-auto object-cover">
        <p class="mt-2 font-medium md:text-2xl">{{ member.name }}</p>
        <p class="italic md:text-2xl">{{ member.position }}</p>
        <div v-if="modalMember === member.id" class="text-left absolute opacity-90 md:opacity-100 top-0 left-16 right-0">
          <div class="bg-white p-4 border border-slate-500 md:min-h-[28.5rem] lg:w-80">
            <h3 class="font-medium mb-2 md:text-2xl">{{ member.name }}, {{ member.position }}</h3>
            <p class="md:text-2xl">
              {{ member.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue';
import WinnerSection from '@/components/WinnerSection.vue';
import ScreeningSection from '@/components/ScreeningSection.vue';
import { getEntry } from '@/api/contentful'
import { getAllMovies } from '@/api/contentful'
import { getAllWinners } from '@/api/contentful'
import { getAllNominees } from '@/api/contentful'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Archive',
  components: {
    HeroSection,
    WinnerSection,
    ScreeningSection
  },
  created() {
  Promise.all([
    getEntry('3qn3mLo8zczF2QZLgEQBif'),
    getAllMovies(),
    getAllNominees(),
    getAllWinners()
    ]).then(([entryResponse, moviesResponse, nomineesResponse, winnersResponse]) => {
      // Handling getEntry response
      this.entry = entryResponse;
      this.heroHeading = this.entry.fields.heading;
      this.heroBackground = this.entry.fields.backgroundPicture.fields.file.url;
      console.log("Received entry:", entryResponse);

      // Handling getAllMovies response
      this.movies = moviesResponse.items;

      // Handling getAllNominees and getAllWinners responses
      // Group movies by competitionYear
      const groupedByYear = nomineesResponse.items.reduce((accumulator, movie) => {
        const transformedMovie = {
          title: movie.fields.title,
          director: movie.fields.director,
          year: movie.fields.competitionYear,
          poster: movie.fields.poster.fields.file.url,
          description: movie.fields.description,
          competitionYear: movie.fields.competitionYear,
          duration: movie.fields.duration,
          languages: movie.fields.languages,
          subtitles: movie.fields.subtitles,
          directorFoto: movie.fields.directorFoto.fields.file.url,
          movieScene: movie.fields.movieScene.fields.file.url,
          directorBio: movie.fields.directorBio,
          id: movie.sys.id
        };

        if (!accumulator[transformedMovie.competitionYear]) {
          accumulator[transformedMovie.competitionYear] = [];
        }

        accumulator[transformedMovie.competitionYear].push(transformedMovie);
        return accumulator;
      }, {});

      // Convert the grouped object into the desired array format
      this.nominees2 = Object.keys(groupedByYear).sort((a, b) => b - a).map(year => {
        return {
          competitionYear: year,
          movies: groupedByYear[year]
        };
      });

      this.winners2 = winnersResponse.items;
      console.log("NOMINEES FROM CREATED", this.nominees2);
      this.isLoading = true;

    }).catch(error => {
      console.error(error);
      this.isLoading = true; // Set this to false even on error, but consider some error handling in real scenarios
    });
  },
  data() {
    return {
      winners2: [],
      nominees2: { movies: [] },
      entry: {},
      heroHeading: '',
      heroBackground: '',
      festivalImage: require('@/assets/newgen_2023.png'),
      showAdditionalWinners: false,
      showModal: false,
      modalMember: null,
      isLoading: false,
      categories: [
        {
          movies: [
            { title: 'Will you look at me', director: 'SHULI HUANG', year: '2022', poster: require('@/assets/will_you_look_at_me.png'), description: 'After hiding in the mountains for a century, a Miao ethnic village choir is discovered by an outsider and becomes a national sensation. Two young Miaos and all the villagers must reconcile their faith, identity, and love with the real world of China.', id:1, ran: 2022 },
            { title: 'Will you look at me', director: 'SHULI HUANG', year: '2022', poster: require('@/assets/will_you_look_at_me.png'), description: 'After hiding in the mountains for a century, a Miao ethnic village choir is discovered by an outsider and becomes a national sensation. Two young Miaos and all the villagers must reconcile their faith, identity, and love with the real world of China.', id:2, ran: 2021 },
          ],
          heading: "Love is Love",
          subheading: "Nov. 3 2022, 7:30pm | OmeU OPENING FILM",
          id: 1
        },
        {
          movies: [
            { title: 'What can I hold you with', director: 'DI SHEN', year: '2022', poster: require('@/assets/what_can_i_hold_you_with.png'), description: 'After hiding in the mountains for a century, a Miao ethnic village choir is discovered by an outsider and becomes a national sensation. Two young Miaos and all the villagers must reconcile their faith, identity, and love with the real world of China.', id:3, ran: 2021 },
            { title: 'What can I hold you with', director: 'DI SHEN', year: '2021', poster: require('@/assets/yesterday_i_was_the_moon.png'), description: 'After hiding in the mountains for a century, a Miao ethnic village choir is discovered by an outsider and becomes a national sensation. Two young Miaos and all the villagers must reconcile their faith, identity, and love with the real world of China.', id:4, ran: 2022 },
            { title: 'What can I hold you with', director: 'DI SHEN', year: '2021', poster: require('@/assets/secrets_at_the_intermissions.png'), id:5, ran: 2021 },
            { title: 'What can I hold you with', director: 'DI SHEN', year: '2021', poster: require('@/assets/what_can_i_hold_you_with.png'), id:7, ran: 2021 },
          ],
          heading: "On Your Own",
          subheading: "Nov. 4 2022, 5:00pm | OmeU NEWGEN 2022",
          id: 2
        },
        // ... additional sections ...
      ],
      staff: [
            { name: 'Huangan Zhao', position: 'Founder',  poster: require('@/assets/ZhaoHuangdan-edited.png'), description: 'After hiding in the mountains for a century, a Miao ethnic village choir is discovered by an outsider and becomes a national sensation. Two young Miaos and all the villagers must reconcile their faith, identity, and love with the real world of China.', id:1 },
            { name: 'Wu Zhilin', position: 'Marketing Director',  poster: require('@/assets/WuZhilin.png'), description: 'After hiding in the mountains for a century, a Miao ethnic village choir is discovered by an outsider and becomes a national sensation. Two young Miaos and all the villagers must reconcile their faith, identity, and love with the real world of China.', id:2 },
            { name: 'Huangan Zhao', position: 'Founder',  poster: require('@/assets/Zijiao.png'), id:3 },
            { name: 'Wu Zhilin', position: 'Marketing Director',  poster: require('@/assets/YuZehui.png'), id:4 },
            { name: 'Huangan Zhao', position: 'Founder',  poster: require('@/assets/ZhangYunxi.png'), id:5 },
            { name: 'Wu Zhilin', position: 'Marketing Director',  poster: require('@/assets/YanXiaoyi.png'), id:6 },
          ],
    }
  },
  methods: {
    toggleAdditionalEntries() {
      this.showAdditionalWinners = !this.showAdditionalWinners;
    },
    openModal(memberId) {
      this.modalMember = memberId; // open the clicked member's modal
    },
    closeModal() {
        this.modalMember = null;
    }
  },
  mounted() {
    this.$nextTick(() => {
    console.log("WINNERS FROM ARCHIVE", this.winners);
  });
},
  computed: {
    filteredCategories() {
      if (this.showAdditionalWinners) {
        return this.nominees2;
      }
      console.log("SLCIE", this.nominees2[0].movies)
      return [this.nominees2[0]];
    }
  }
};
</script>

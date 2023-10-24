<template>
  <HeroSection :bgImage="heroBackground" class="md:mb-8">
    <template v-slot:heading>
      {{heroHeading}}
    </template>
  </HeroSection>
  <ScreeningSection v-for="nominee in filteredCategories2" :key="nominee" :movieList="nominee" class="mb-8">
    <template v-slot:heading>
      {{ $t('archive1') }} {{ nominee.competitionYear }}
    </template>
  </ScreeningSection>
  <p v-if="filteredCategories2.length > 0" class="flex justify-center mb-8 md:text-2xl underline text-main cursor-pointer dark:text-main" @click="toggleAdditionalEntries2">{{ showAdditionalWinners2 ? 'Hide past editions winners' : 'See past editions winners' }}</p>
  <ScreeningSection v-for="nominee in filteredCategories" :key="nominee" :movieList="nominee" class="mb-8">
    <template v-slot:heading>
      {{ $t('archive2') }} {{ nominee.competitionYear }}
    </template>
  </ScreeningSection>
  <p v-if="filteredCategories.length > 0" class="flex justify-center mb-8 md:text-2xl underline text-main cursor-pointer dark:text-main" @click="toggleAdditionalEntries">{{ showAdditionalWinners ? 'Hide past editions nominees' : 'See past editions nominees' }}</p>
  <section class="my-16 md:my-32">
    <h2 class="px-8 md:px-16 lg:px-24 text-main mb-4 md:mb-16 text-3xl md:text-4xl lg:text-5xl md:font-bold font-medium">{{ $t('archive3') }}</h2>
    <div class="flex flex-wrap mx-8 dark:text-white">
      <div v-for="(member) in juryMembers" :key="member.sys.id" class="w-1/2 lg:w-1/3 text-center mb-8 lg:mb-32 relative" @mouseover="openModal(member.sys.id)" @mouseleave="closeModal">
        <img :src="member.fields.picture.fields.file.url" :alt="member.fields.name" class="w-32 md:w-64 h-48 md:h-96 mx-auto object-cover">
        <p class="mt-2 font-medium md:text-2xl">{{ member.fields.name }}</p>
        <p class="italic md:text-2xl">{{ member.fields.title }}</p>
        <div v-if="modalMember === member.sys.id" class="text-left absolute opacity-90 md:opacity-100 top-0 left-0 right-0 md:left-10 lg:left-14">
          <div class="bg-white p-4 border border-slate-500 h-48 md:h-96 lg:w-80 overflow-y-scroll">
            <h3 class="font-medium mb-2 md:text-2xl">{{ member.fields.name }}, {{ member.fields.title }}</h3>
            <p class="md:text-2xl">
              {{ member.fields.biography }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue';
import ScreeningSection from '@/components/ScreeningSection.vue';
import { getAllMovies } from '@/api/contentful'
import { getLocalizedEntry } from '@/api/contentful'
import { getAllLocalizedWinners } from '@/api/contentful'
import { getAllLocalizedNominees } from '@/api/contentful'
import { getAllLocalizedJuryMembers } from '@/api/contentful'


export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Archive',
  components: {
    HeroSection,
    ScreeningSection
  },
  created() {
    this.userLanguage = localStorage.getItem('userLanguage');

  Promise.all([
    getLocalizedEntry('3qn3mLo8zczF2QZLgEQBif', this.userLanguage),
    getAllMovies(),
    getAllLocalizedNominees(this.userLanguage),
    getAllLocalizedWinners(this.userLanguage),
    getAllLocalizedJuryMembers(this.userLanguage)
    ]).then(([entryResponse, moviesResponse, nomineesResponse, winnersResponse, juryMembersResponse]) => {
      // Handling getEntry response
      this.juryMembers = juryMembersResponse.items;
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

      // Handling getAllWinners response
      // Group movies by competitionYear
      const groupedByYear2 = winnersResponse.items.reduce((accumulator, movie) => {
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
      this.winners2 = Object.keys(groupedByYear2).sort((a, b) => b - a).map(year => {
        return {
          competitionYear: year,
          movies: groupedByYear2[year]
        };
      });

    }).catch(error => {
      console.error(error);
      this.isLoading = true; // Set this to false even on error, but consider some error handling in real scenarios
    });
  },
  data() {
    return {
      userLanguage: '',
      juryMembers: [],
      winners2: { movies: [] },
      nominees2: { movies: [] },
      entry: {},
      heroHeading: '',
      heroBackground: '',
      festivalImage: require('@/assets/newgen_2023.png'),
      showAdditionalWinners: false,
      showAdditionalWinners2: false,
      showModal: false,
      modalMember: null,
      isLoading: false,

    }
  },
  methods: {
    toggleAdditionalEntries() {
      this.showAdditionalWinners = !this.showAdditionalWinners;
    },
    toggleAdditionalEntries2() {
      this.showAdditionalWinners2 = !this.showAdditionalWinners2;
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

  });
},
  computed: {
    filteredCategories() {
      if (this.showAdditionalWinners) {
        return this.nominees2;
      }
      // Check if nominees2 has at least one element before returning it
      if (this.nominees2.length) {
        return [this.nominees2[0]];
      }

      // Fallback if nominees2 is empty
      return [];
    },
    filteredCategories2() {
      if (this.showAdditionalWinners2) {
        console.log("show additional winners", this.winners2)
        return this.winners2;
      }
      // Check if nominees2 has at least one element before returning it
      if (this.winners2.length) {
        return [this.winners2[0]];
      }

      // Fallback if nominees2 is empty
      return [];
    }
  }
};
</script>

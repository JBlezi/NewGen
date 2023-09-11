<template>
  <section class="px-8 md:px-16 my-16 lg:my-32 md:my-24">
    <div class="text-3xl md:text-4xl font-bold text-main mb-4 md:mb-8 italic">
      {{ movie.title }}
    </div>
    <div class="md:w-full md:flex md:mb-8 lg:max-h-[60vh]">
      <div class="md:mb-6 md:mb-0 md:w-1/2 ">
        <img :src="movie.poster" alt="Movie Poster" class="h-[55vh] md:h-[45vh] min-w-full lg:h-auto lg:max-h-[60vh] lg:object-contain object-center"/>
      </div>
      <div class="font-medium md:font-semibold md:text-2xl flex md:flex-col justify-between md:justify-start mb-4 md:mb-12 md:w-1/2 md:pl-8">

        <div class="mb-4 md:mb-16 lg:mb-12 hidden lg:block lg:h-1/2">
          <img :src="movie.movieScene" alt="Still Shot" class="h-full min-w-full object-cover object-center"/>
        </div>
        <div class="relative md:mb-4 hidden lg:block lg:h-1/2 lg:flex cursor-pointer" @click="toggleModal">
          <img :src="movie.directorFoto" alt="Director Foto" class="h-full w-1/2 min-w-full lg:min-w-0 object-cover object-center"/>
          <div v-if="!showModal" class="pl-8 w-1/2">
            <div class="mb-2"><span class="text-main">{{ $t('movieSection.movieSection1') }}</span><br>{{ movie.duration }}</div>
            <div class="mb-2"><span class="text-main">{{ $t('movieSection.movieSection2') }}</span><br>{{ movie.year }}</div>
            <div class="mb-2"><span class="text-main">{{ $t('movieSection.movieSection3') }}</span><br>{{ movie.director }}</div>
          </div>
          <!-- Modal overlay -->
          <div v-if="showModal" class="w-1/2 h-full font-medium text-lg pl-8 overflow-y-scroll">
            <div class="">
              <p>
                {{ movie.directorBio }}
              </p>
            </div>
          </div>
          <div class="absolute top-0 left-0 w-1/2 h-full bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <span class="text-white">Read Bio</span>
          </div>
        </div>


        <div class="lg:hidden">
          <span class="text-main">{{ $t('movieSection.movieSection3') }}</span> {{ movie.director }}
        </div>
        <div class="lg:hidden">
          <span class="text-main">{{ $t('movieSection.movieSection2') }}</span> {{ movie.year }}
        </div>
        <div class="hidden md:block md:font-medium mt-4 lg:hidden h-[35vh] overflow-y-scroll">
          {{ movie.description }}
        </div>
      </div>
    </div>

    <div class="mb-4 md:mb-16 lg:hidden">
      <img :src="movie.movieScene" alt="Still Shot" class="h-[25vh] min-w-full object-center object-cover"/>
    </div>
    <div class="font-medium md:font-semibold md:text-2xl text-lg mb-4 md:mb-8 md:hidden lg:block md:mt-16">
      {{ movie.description }}
    </div>
    <div class="md:flex">
      <div class="md:w-1/2 hidden md:block lg:hidden pr-8">
        <div class="text-2xl">
          <div class="mb-4 font-semibold">{{ movie.director }}</div>
          <div class="md:font-medium">{{ movie.directorBio }}</div>
        </div>
      </div>
      <div class="md:w-1/2">
        <div class="md:mb-4 lg:hidden">
          <img :src="movie.directorFoto" alt="Still Shot" class="h-[35vh] min-w-full object-cover object-center"/>
        </div>
        <div class="flex justify-between mb-4 md:mb-8 font-medium md:font-semibold md:text-2xl lg:hidden">
          <div class="md:hidden">
            {{ movie.director }}
          </div>
          <div>
            <span v-if="!showModal" class="text-main underline font-medium cursor-pointer md:hidden" @click="toggleModal">{{ $t('movieSection.movieSection4') }}</span>
            <span v-else class="text-main underline font-medium cursor-pointer" @click="toggleModal">{{ $t('movieSection.movieSection5') }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal overlay -->
    <div v-if="showModal" class="w-full h-full bg-black bg-opacity-50 items-start font-medium md:font-semibold md:text-2xl lg:hidden">
      <div class="bg-white font-medium text-lg">
        <p>
          {{ movie.directorBio }}
        </p>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: 'MovieSection',
  props: ['button', 'movie'],
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    }
  },
};
</script>

<style scoped>
</style>

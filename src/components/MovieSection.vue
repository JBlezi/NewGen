<template>
  <section class="px-8 md:px-16 my-16 lg:my-32">
    <div class="text-3xl md:text-4xl font-bold text-main mb-4 md:mb-8 italic">
      {{ movie.title }}
    </div>
    <div class="md:w-full md:flex md:mb-8 lg:max-h-[60vh]">
      <div class="md:mb-4 md:mb-0 md:w-1/2 ">
        <img :src="movie.poster" alt="Movie Poster" class="h-full min-w-full lg:h-auto lg:max-h-[60vh] lg:object-contain"/>
      </div>
      <div class="font-medium md:font-semibold md:text-2xl flex md:flex-col justify-between md:justify-start mb-4 md:mb-12 md:w-1/2 md:pl-8">

        <div class="mb-4 md:mb-16 lg:mb-12 hidden lg:block lg:h-1/2">
          <img :src="movie.still" alt="Still Shot" class="h-full min-w-full object-cover"/>
        </div>
        <div class="md:mb-4 hidden lg:block lg:h-1/2 lg:flex">
          <img :src="movie.director_foto" alt="Still Shot" class="h-full min-w-full lg:min-w-0 object-cover"/>
          <div class="px-8 w-1/2">
            <div class="mb-2">Duration: {{ movie.duration }}</div>
            <div class="mb-2">Year: {{ movie.year }}</div>
            <div class="mb-2">Director: {{ movie.director }}</div>
          </div>
        </div>

        <div class="lg:hidden">
          <span class="text-main">Director:</span> {{ movie.director }}
        </div>
        <div class="lg:hidden">
          <span class="text-main">Year:</span> {{ movie.year }}
        </div>
        <div class="hidden md:block mt-4 lg:hidden">
          {{ movie.description }}
        </div>
      </div>
    </div>

    <div class="mb-4 md:mb-16 lg:hidden">
      <img :src="movie.still" alt="Still Shot" class="h-full min-w-full"/>
    </div>
    <div class="font-medium md:font-semibold md:text-2xl text-lg mb-4 md:mb-8 md:hidden lg:block mt-16">
      {{ movie.description }}
    </div>
    <div class="md:mb-4 lg:hidden">
      <img :src="movie.director_foto" alt="Still Shot" class="h-full min-w-full"/>
    </div>
    <div class="flex justify-between mb-4 md:mb-8 font-medium md:font-semibold md:text-2xl lg:hidden">
      <div class="">
        {{ movie.director }}
      </div>
      <div>
        <span v-if="!showModal" class="text-main underline font-medium cursor-pointer" @click="toggleModal">Read Bio</span>
        <span v-else class="text-main underline font-medium cursor-pointer" @click="toggleModal">Close</span>
      </div>
    </div>

    <!-- Modal overlay -->
    <div v-if="showModal" class="w-full h-full bg-black bg-opacity-50 flex items-center justify-center font-medium md:font-semibold md:text-2xl">
      <div class="bg-white">
        <p>
          {{ movie.description }}
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
  computed: {

  },
};
</script>

<style scoped>
</style>

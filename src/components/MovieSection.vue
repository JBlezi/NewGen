<template>
  <section class="px-8 md:px-16 my-16">
    <div class="text-3xl md:text-4xl font-bold text-main mb-4 md:mb-8 italic">
      {{ movie.title }}
    </div>
    <div class="md:mb-4">
      <img :src="movie.poster" alt="Movie Poster" class="h-full min-w-full"/>
    </div>
    <div class="font-medium md:font-semibold md:text-2xl flex justify-between mb-4 md:mb-12">
      <div>
        <span class="text-main">Director:</span> {{ movie.director }}
      </div>
      <div>
        <span class="text-main">Year:</span> {{ movie.year }}
      </div>
    </div>
    <div class="mb-4 md:mb-8">
      <img :src="movie.still" alt="Still Shot" class="h-full min-w-full"/>
    </div>
    <div class="font-medium md:font-semibold md:text-2xl text-lg mb-4 md:mb-8">
      {{ movie.description }}
    </div>
    <div class="md:mb-4">
      <img :src="movie.director_foto" alt="Still Shot" class="h-full min-w-full"/>
    </div>
    <div class="flex justify-between mb-4 md:mb-8 font-medium md:font-semibold md:text-2xl">
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

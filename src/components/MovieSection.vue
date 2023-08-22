<template>
  <section class="px-8 my-16">
    <div class="text-3xl font-bold text-main mb-4 italic">
      {{ movie.title }}
    </div>
    <div class="">
      <img :src="movie.poster" alt="Movie Poster" class="h-full min-w-full"/>
    </div>
    <div class="font-medium flex justify-between mb-4">
      <div>
        <span class="text-main">Director:</span> {{ movie.director }}
      </div>
      <div>
        <span class="text-main">Year:</span> {{ movie.year }}
      </div>
    </div>
    <div class="mb-4">
      <img :src="movie.still" alt="Still Shot" class="h-full min-w-full"/>
    </div>
    <div class="font-medium text-lg mb-4">
      {{ movie.description }}
    </div>
    <div class="">
      <img :src="movie.director_foto" alt="Still Shot" class="h-full min-w-full"/>
    </div>
    <div class="flex justify-between mb-4">
      <div class="font-medium">
        {{ movie.director }}
      </div>
      <div>
        <span v-if="!showModal" class="text-main underline font-medium cursor-pointer" @click="toggleModal">Read more</span>
        <span v-else class="text-main underline font-medium cursor-pointer" @click="toggleModal">Close</span>
      </div>
    </div>

    <!-- Modal overlay -->
    <div v-if="showModal" class="w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
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

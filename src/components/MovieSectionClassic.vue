<template>
  <section class="px-8">
    <div class="mb-4 -mx-8">
      <img :src="movie.still" alt="Still Shot" class="h-full min-w-full"/>
    </div>
    <div class="text-2xl font-bold mb-4 italic">
      {{ movie.title }} ({{ movie.year }})
    </div>
    <div class="font-medium flex justify-start mb-4">
      <div class="w-1/2">
        <p class="text-main">Director:</p> {{ movie.director }}
      </div>
      <div>
        <p class="text-main">Duration:</p> {{ movie.duration }}
      </div>
    </div>
    <div class="font-medium flex justify-start mb-8">
      <div class="w-1/2">
        <p class="text-main">Language:</p> {{ movie.language }}
      </div>
      <div>
        <p class="text-main">Subtitles:</p> {{ movie.subtitles }}
      </div>
    </div>
    <div class="font-medium text-lg mb-16">
      {{ movie.description }}
    </div>
  </section>
</template>

<script>
export default {
  name: 'MovieSectionClassic',
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

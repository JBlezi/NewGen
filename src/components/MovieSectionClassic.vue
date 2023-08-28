<template>
  <section class="px-8 md:px-16">
    <div class="mb-4 md:mb-8 -mx-8 md:-mx-16">
      <img :src="movie.still" alt="Still Shot" class="h-full min-w-full"/>
    </div>
    <div class="text-2xl md:text-4xl font-bold mb-4 md:mb-8 italic">
      {{ movie.title }} ({{ movie.year }})
    </div>
    <div class="font-medium md:text-2xl flex justify-start mb-4">
      <div class="w-1/2">
        <p class="text-main">Director:</p> {{ movie.director }}
      </div>
      <div>
        <p class="text-main">Duration:</p> {{ movie.duration }}
      </div>
    </div>
    <div class="font-medium md:text-2xl flex justify-start mb-8 md:mb-12">
      <div class="w-1/2">
        <p class="text-main">Language:</p> {{ movie.language }}
      </div>
      <div>
        <p class="text-main">Subtitles:</p> {{ movie.subtitles }}
      </div>
    </div>
    <div class="font-medium text-2xl mb-16">
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

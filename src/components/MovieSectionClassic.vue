<template>
  <section class="px-8 md:px-16 lg:mb-32">
    <div class="lg:flex">
      <div class="lg:w-1/2">
        <div class="mb-4 md:mb-8 -mx-8 md:-mx-16 lg:mx-0">
          <img :src="movie.fields.poster.fields.file.url" alt="Still Shot" class="h-full min-w-full"/>
        </div>
      </div>
      <div class="lg:w-1/2 lg:pl-8">
        <div class="text-2xl md:text-4xl font-bold mb-4 md:mb-8 italic">
          {{ movie.fields.title }} ({{ movie.fields.year }})
        </div>
        <div class="font-medium md:text-2xl lg:text-3xl flex justify-start mb-4 lg:mb-8">
          <div class="w-1/2">
            <p class="text-main">{{ $t('movieSection.movieSection3') }}</p> {{ movie.fields.director }}
          </div>
          <div>
            <p class="text-main">{{ $t('movieSection.movieSection1') }}</p> {{ movie.fields.duration }}
          </div>
        </div>
        <div class="font-medium md:text-2xl lg:text-3xl flex justify-start mb-8 md:mb-12">
          <div class="w-1/2">
            <p class="text-main">{{ $t('movieSectionClassic.movieSectionClassic1') }}</p> {{ movie.fields.languages }}
          </div>
          <div>
            <p class="text-main">{{ $t('movieSectionClassic.movieSectionClassic2') }}</p> {{ movie.fields.subtitles }}
          </div>
        </div>
      </div>
    </div>
    <div class="font-medium text-2xl lg:text-3xl mb-16">
      {{ movie.fields.description }}
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
};
</script>

<style scoped>
</style>

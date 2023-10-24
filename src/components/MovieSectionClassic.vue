<template>
  <section class="dark:bg-black px-8 md:px-16 lg:mb-32">
    <div class="lg:flex">
      <div class="lg:w-1/2">
        <div class="mb-4 md:mb-8 -mx-8 md:-mx-16 lg:mx-0">
          <img :src="movie.fields.poster.fields.file.url" alt="Still Shot" class="h-full min-w-full"/>
        </div>
      </div>
      <div class="lg:w-1/2 lg:pl-8">
        <div class="text-2xl md:text-4xl font-bold mb-4 md:mb-8 italic">
          <span class="dark:text-white">{{ movie.fields.title }} ({{ movie.fields.year }})</span>
        </div>
        <div class="font-medium md:text-2xl lg:text-3xl flex justify-start mb-4 lg:mb-8">
          <div class="w-1/2">
            <p class="text-main">{{ $t('movieSection.movieSection3') }}</p><span class="dark:text-white">{{ movie.fields.director }}</span>
          </div>
          <div>
            <p class="text-main">{{ $t('movieSection.movieSection1') }}</p><span class="dark:text-white">{{ movie.fields.duration }}</span>
          </div>
        </div>
        <div class="font-medium md:text-2xl lg:text-3xl flex justify-start mb-8 md:mb-12">
          <div class="w-1/2">
            <p class="text-main">{{ $t('movieSectionClassic.movieSectionClassic1') }}</p><span class="dark:text-white">{{ movie.fields.languages }}</span>
          </div>
          <div>
            <p class="text-main">{{ $t('movieSectionClassic.movieSectionClassic2') }}</p><span class="dark:text-white">{{ movie.fields.subtitles }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="font-medium text-2xl lg:text-3xl mb-16">
      <span class="dark:text-white">{{ movie.fields.description }}</span>
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

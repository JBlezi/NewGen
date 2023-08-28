<template>
  <section class="p-6 md:p-9 mx-8 md:mx-16 my-24 border border-black border-slate-300">
    <img :src="release.image" alt="" class="mb-4 md:mb-8">
    <h2 class="font-bold text-xl md:text-3xl mb-4">
      {{ release.title }}
    </h2>
    <p class="mb-4 md:mb-8 md:text-xl">{{ release.teaser }}</p>
    <a :href="release.link" class="font-bold flex md:text-2xl">
      <img v-if="!faviconError" :src="faviconURL" alt="Favicon" class="w-6 md:w-9 h-6 md:h-9 mr-2 md:mr-4 rounded-full" @error="handleFaviconError">
      {{ release.link_title }}
    </a>
  </section>
</template>

<script>

export default {
  name: 'PressRelease',
  props: ['release'],
  computed: {
    faviconURL() {
      return `https://api.faviconkit.com/${new URL(this.release.link).hostname}/144`;
    }
  },
  data() {
    return {
      faviconError: false
    }
  },
  methods: {
    handleFaviconError() {
      this.faviconError = true;
    }
  }
};
</script>

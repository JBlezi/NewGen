<template>
  <section class="p-6 mx-8 my-24 border border-black border-slate-300">
    <img :src="release.image" alt="" class="mb-4">
    <h2 class="font-bold text-xl mb-4">
      {{ release.title }}
    </h2>
    <p class="mb-4">{{ release.teaser }}</p>
    <a :href="release.link" class="font-bold flex">
      <img v-if="!faviconError" :src="faviconURL" alt="Favicon" class="w-6 h-6 mr-2 rounded-full" @error="handleFaviconError">
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

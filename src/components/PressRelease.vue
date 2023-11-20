<template>
  <section>
    <div class="px-8 md:px-16 lg:px-0 lg:w-[32rem]">
      <div class="p-6 md:p-9 border border-black border-slate-300">
        <img :src="release.fields.picture.fields.file.url" alt="" class="mb-4 md:mb-8">
        <h2 class="dark:text-main font-bold text-xl md:text-3xl mb-4">
          {{ release.fields.heading }}
        </h2>
        <p class="dark:text-white mb-4 md:mb-8 md:text-xl">{{ release.fields.teaser }}</p>
        <a :href="release.fields.platformLink" class="font-bold flex md:text-2xl">
          <img v-if="!faviconError" :src="faviconURL" alt="Favicon" class="w-6 md:w-9 h-6 md:h-9 mr-2 md:mr-4 rounded-full" @error="handleFaviconError">
          <span class="dark:text-white">{{ release.fields.platformName }}</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'PressRelease',
  props: ['release'],
  computed: {
    faviconURL() {
      return `https://api.faviconkit.com/${new URL(this.release.fields.platformLink).hostname}/144`;
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

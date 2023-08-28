<template>
  <section class="px-8 md:px-16 my-24">
    <h1 class="text-main font-bold text-5xl">Sponsors</h1>
    <img v-for="image in images" :key="image" :src="image" alt="" class="mx-auto my-8 md:my-16">
  </section>
</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Sponsors',
  components: {
  },
  data() {
    return {
      images: [
        require('@/assets/acce-transparent.png'),
        require('@/assets/btd.png'),
        require('@/assets/bunterpanda.png'),
        require('@/assets/cathayplay.png'),
        require('@/assets/gotiger-red.png'),
        require('@/assets/qizhihua.png'),
        require('@/assets/tingsong.png'),
        require('@/assets/touchthelimit.png'),
        // ... add more images as required
      ],
    }
  }
};
</script>

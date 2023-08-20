<template>
  <div class="h-32 overflow-hidden w-full">
    <div class="h-full flex transition transform ease-in-out delay-500" :style="{ transform: `translateX(-${currentSlide * slideWidth}%)` }">
      <div class="h-full w-full bg-contain bg-no-repeat bg-center" v-for="image in images" :key="image" :style="{ backgroundImage: `url(${image})` }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SponsorSlider',
  data() {
    return {
      images: [
        require('@/assets/btd.png'),
        require('@/assets/acce-transparent.png'),
        require('@/assets/bunterpanda.png'),
        require('@/assets/cathayplay.png'),
        require('@/assets/gotiger-red.png'),
        require('@/assets/qizhihua.png'),
        require('@/assets/tingsong.png'),
        require('@/assets/touchthelimit.png'),
        // ... add more images as required
      ],
      currentSlide: 0,
      slideWidth: 100
    }
  },
  mounted() {
    setInterval(this.advanceSlide, 3000);  // every 3 seconds
  },
  methods: {
    advanceSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.images.length;
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <section class="w-screen h-32 overflow-x-hidden" @mousedown="handleMouseDown" @mousemove="handleMouseMove" @mouseup="handleMouseUp" @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd">
    <div class="h-32 top-0 left-0">
      <div class="h-full flex transition-transform" :style="{ transform: `translateX(-${currentSlide}px)` }">
        <img class="h-full mx-8 py-2" v-for="image in images" :key="image" :src="image">

      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: 'SponsorSlider',
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
      currentSlide: 0,
      speed: 2,
      imageWidthIncludingMargin: 240,  // estimate width of each image including its margins. Adjust this value as per actual width + margins.
      intervalId: null,
      isDragging: false,
      startDragX: null,
      lastDragX: null
    }
  },
  mounted() {
    this.startSliding();
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
  methods: {
    startSliding() {
      this.intervalId = setInterval(() => {
        if (!this.isDragging) {
          this.currentSlide += this.speed;

          if (this.currentSlide >= (this.images.length - 1) * this.imageWidthIncludingMargin) {
            clearInterval(this.intervalId);
            setTimeout(() => {
              this.currentSlide = 0;
            }, 2000);
          }
        }
      }, 30);
    },
    handleMouseDown(event) {
      clearInterval(this.intervalId);
      this.isDragging = true;
      this.startDragX = event.clientX;
      this.lastDragX = event.clientX;
    },
    handleMouseMove(event) {
      if (this.isDragging) {
        let delta = event.clientX - this.lastDragX;
        this.currentSlide += delta;
        this.lastDragX = event.clientX;
      }
    },
    handleMouseUp() {
      this.isDragging = false;
      this.startDragX = null;
      this.lastDragX = null;
      this.startSliding();
    },
    handleTouchStart(event) {
      clearInterval(this.intervalId);
      this.isDragging = true;
      this.startDragX = event.touches[0].clientX;
      this.lastDragX = event.touches[0].clientX;
    },
    handleTouchMove(event) {
      if (this.isDragging) {
        let delta = event.touches[0].clientX - this.lastDragX;
        this.currentSlide += delta;
        this.lastDragX = event.touches[0].clientX;
      }
    },
    handleTouchEnd() {
      this.isDragging = false;
      this.startDragX = null;
      this.lastDragX = null;
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <section class="dark:bg-black w-full h-32 my-8 overflow-x-hidden" id="sponsor-slider">
    <div class="h-32 top-0 left-0">
      <div class="h-full flex" :style="{ transform: `translateX(-${currentSlide}px)` }">
        <img class="h-full mx-8 py-2" v-for="sponsor in sponsors" :key="sponsor" :src="sponsor">

      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: 'SponsorSlider',
  props: ['sponsors'],
  data() {
    return {
      actualTotalSponsorWidth: 0,
      currentSlide: 0,
      speed: 2,
      imageWidth: 240,  // estimate width of each image including its margins. Adjust this value as per actual width + margins.
      intervalId: null,
      isDragging: false,
      startDragX: null,
      lastDragX: null
    }
  },
  computed: {
    totalSponsorWidth() {
      return this.sponsors.length * this.imageWidth;  // this gives a rough estimate of the total width
    }
  },
  mounted() {
    this.$nextTick(() => {
      const sponsorEls = document.querySelectorAll("#sponsor-slider img");
      let totalWidth = 0;
      sponsorEls.forEach(el => {
        totalWidth += el.offsetWidth + parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight);
      });
      this.actualTotalSponsorWidth = totalWidth;
      window.addEventListener('scroll', this.checkIfInView);
      this.checkIfInView();
    });
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
    window.removeEventListener('scroll', this.checkIfInView);
  },
  methods: {
    checkIfInView() {
        const section = document.getElementById("sponsor-slider");
        const rect = section.getBoundingClientRect();
        const elemTop = rect.top;
        const elemBottom = rect.bottom;

        // Check if the element is in the viewport
        const isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);

        if (isVisible && this.actualTotalSponsorWidth > window.innerWidth) {
          this.startSliding();
          window.removeEventListener('scroll', this.checkIfInView);
        }
    },
    startSliding() {
      this.intervalId = setInterval(() => {
        if (!this.isDragging) {
          this.currentSlide += this.speed;

          if (this.currentSlide >= this.actualTotalSponsorWidth - window.innerWidth) {
            clearInterval(this.intervalId);
            this.currentSlide = 0;
            setTimeout(() => {
              this.startSliding();
            }, 2000);
          }
        }
      }, 30);
    },
   /*  handleMouseDown(event) {
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
    } */
  }
}
</script>

<style scoped>

</style>

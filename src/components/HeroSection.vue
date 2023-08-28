<template>
  <section>
    <div class="h-screen md:h-auto bg-cover" :style="backgroundStyle">
      <div class="bg-white h-screen md:h-auto bg-gradient relative">
        <div class="flex items-center md:h-auto h-screen">
          <div class="flex flex-col md:h-auto md:mt-32 md:w-full">
            <h1 class="text-5xl px-8 md:px-16 font-bold text-main mb-4 md:w-full">
                <slot name="heading"></slot>
            </h1>
            <h2 class="px-8 md:px-16 font-medium text-lg mb-4">
              <slot name="subheading"></slot>
            </h2>
            <h3 class="px-8 md:px-16 font-medium text-lg mb-4">
              <slot name="description"></slot>
            </h3>
            <h3 class="px-8 md:px-16 font-medium text-lg mb-16 md:mb-0">
              <slot name="middle-button"></slot>
            </h3>
            <div class="relative px-16 hidden md:block w-full" style="padding-top: 56.25%;">
              <iframe v-if="video" class="absolute top-0 left-0 w-full h-full" :src="video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <slot name="button"></slot>
        </div>
        <font-awesome-icon :icon="['fas', 'chevron-down']" class="h-6 w-6 absolute bottom-5 left-1/2 transform -translate-x-1/2 md:hidden"/>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'HeroSection',
    props: ['bgImage', 'video'],
    computed: {
    backgroundStyle() {
      return {
        backgroundImage: `url(${this.bgImage})`
      }
    }
  }
  }
</script>

<style scoped>
.bg-gradient {
/*   background: linear-gradient(180deg, rgba(0, 106, 106, 0.50) 0%, rgba(49, 106, 106, 0.70) 40.63%, #FFF 100%);
 */
 /* background: var(--linear-light, linear-gradient(180deg, #D39C49 0%, rgba(255, 255, 255, 0.50) 40.63%, rgba(255, 255, 255, 0.70) 73.96%, #FFF 100%)); */
/*  background: linear-gradient(180deg, #FFBD59 0%, rgba(255, 255, 255, 0.50) 40.63%, rgba(255, 255, 255, 0.70) 73.96%, #FFF 100%); */
/*  background: linear-gradient(180deg, rgba(255, 189, 89, 0.70) 0%, rgba(255, 189, 89, 0.30) 40.63%, rgba(255, 255, 255, 0.80) 75%, #FFF 100%);
 */ background: linear-gradient(0deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.50) 100%), linear-gradient(180deg, rgba(255, 189, 89, 0.70) 0%, rgba(255, 189, 89, 0.30) 40.63%, rgba(255, 255, 255, 0.80) 75%, #FFF 100%);
}
 </style>

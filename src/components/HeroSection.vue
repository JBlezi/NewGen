<template>
  <section>
    <div class="h-screen md:h-[50vh] lg:h-[75vh] bg-cover lg:mb-16" :style="backgroundStyle">
      <div v-if="isGif" class="bg-white h-screen md:h-[50vh] lg:h-[75vh] bg-opacity-50 relative">
        <div class="flex items-center md:h-[50vh] h-screen lg:h-[75vh]">
          <div class="flex flex-col md:h-[50vh] lg:h-[75vh] md:mt-32 lg:my-24 md:w-full">
            <h1 v-if="hasHeadingSlot" class="text-5xl lg:text-6xl px-8 md:px-16 lg:px-24 md:mt-16 lg:mt-32 font-bold text-main mb-4 md:w-full">
                <slot name="heading"></slot>
            </h1>
            <h2 v-if="hasSubheadingSlot" class="px-8 md:px-16 lg:px-24 font-medium text-2xl md:text-3xl mb-4 md:mb-8">
              <slot name="subheading"></slot>
            </h2>
            <h3 v-if="hasDescriptionSlot" class="px-8 md:px-16 lg:px-24 font-medium text-lg mb-4 md:text-3xl md:mb-12">
              <slot name="description"></slot>
            </h3>
            <h3 v-if="hasMiddleButtonSlot" class="px-8 md:px-16 lg:px-24 font-medium text-lg md:text-xl mb-16 md:mb-0">
              <slot name="middle-button"></slot>
            </h3>
          </div>
        </div>
        <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <slot name="button"></slot>
        </div>
        <font-awesome-icon :icon="['fas', 'chevron-down']" class="h-6 w-6 absolute bottom-5 text-white left-1/2 transform -translate-x-1/2"/>
      </div>
      <div v-else class="bg-white h-screen md:h-[50vh] lg:h-[75vh] bg-gradient relative">
        <div class="flex items-center md:h-[50vh] lg:h-[75vh] h-screen">
          <div class="flex flex-col md:h-[50vh] lg:h-[75vh] md:mt-32 lg:mt-24 md:w-full">
            <h1 v-if="hasHeadingSlot" class="text-5xl lg:text-6xl px-8 md:px-16 lg:px-24 md:mt-24 lg:mt-40 font-bold text-main mb-4 lg:mb-8 md:w-full">
              <slot name="heading"></slot>
            </h1>
            <div class="lg:flex">
              <div v-if="hasSubheadingSlot && hasDescriptionSlot" class="lg:w-2/5">
                <h2 class="px-8 md:px-16 lg:px-24 font-medium text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-8">
                  <slot name="subheading"></slot>
                </h2>
              </div>
              <div v-if="hasSubheadingSlot && !hasDescriptionSlot" class="lg:w-full">
                <h2 class="px-8 md:px-16 lg:px-24 font-medium text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-8">
                  <slot name="subheading"></slot>
                </h2>
              </div>
              <div v-if="hasDescriptionSlot && hasSubheadingSlot" class="lg:w-3/5">
                <h3 class="px-8 md:px-16 lg:px-24 font-medium text-xl mb-4 md:text-3xl md:mb-12 ">
                  <slot name="description"></slot>
                </h3>
              </div>
              <div v-if="hasDescriptionSlot && !hasSubheadingSlot" class="lg:w-full">
                <h3 class="px-8 md:px-16 lg:px-24 font-medium text-xl mb-4 md:text-3xl md:mb-12 ">
                  <slot name="description"></slot>
                </h3>
              </div>
            </div>
            <h3 v-if="hasMiddleButtonSlot" class="px-8 md:px-16 lg:px-24 font-medium text-lg md:text-xl mb-16 md:mb-0">
              <slot name="middle-button"></slot>
            </h3>
            <div v-if="video" class="px-16 lg:px-24 hidden md:block w-full h-3/5 lg:h-4/5 lg:mb-12">
              <iframe  class="w-full h-full" :src="video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <slot name="button"></slot>
        </div>
        <font-awesome-icon :icon="['fas', 'chevron-down']" class="h-6 w-6 absolute bottom-5 left-1/2 transform -translate-x-1/2 lg:hidden"/>
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
        backgroundImage: `url(${this.bgImage})`,
        backgroundPosition: 'center center'
      }
    },
    isGif() {
    return this.bgImage && this.bgImage.endsWith('.gif');
  },
    hasHeadingSlot() {
      return !!this.$slots.heading;
    },
    hasSubheadingSlot() {
      return !!this.$slots.subheading;
    },
    hasDescriptionSlot() {
      return !!this.$slots.description;
    },
    hasMiddleButtonSlot() {
      return !!this.$slots['middle-button'];
    },
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

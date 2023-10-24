<template>
  <section class="bg-cover bg-gradient dark:bg-gradient-dark" :style="{ marginLeft: marginLeftAndRight, marginRight: marginLeftAndRight, ...backgroundStyle }">
    <div class="pt-24 pb-12 min-h-screen md:h-full md:min-h-[40vh] lg:h-[75vh] relative" :style="{ paddingLeft: paddingLeftAndRight, paddingRight: paddingLeftAndRight }">
      <div v-if="isGif" class=" md:h-full md:min-h-[40vh] lg:h-[75vh] bg-opacity-50 ">
        <div class="flex items-center md:h-full md:min-h-[40vh]  lg:h-[75vh]">
          <div class="flex flex-col md:h-full md:min-h-[40vh] lg:h-[75vh] lg:my-24 md:w-full">
            <h1 v-if="hasHeadingSlot" class="text-5xl lg:text-6xl px-8 md:px-16 lg:px-24 md:mt-16 font-bold text-main mb-8 md:mb-12 lg:mb-16 md:w-full">
                <slot name="heading"></slot>
            </h1>
            <h2 v-if="hasSubheadingSlot" class="px-8 md:px-16 lg:px-24 font-medium text-2xl md:text-3xl mb-4 md:mb-8">
              <slot name="subheading"></slot>
            </h2>
            <h3 v-if="hasDescriptionSlot" class="px-8 md:px-16 lg:px-24 font-medium text-lg mb-4 md:text-3xl md:mb-12">
              <slot name="description"></slot>
            </h3>
            <h3 v-if="hasMiddleButtonSlot" class="px-8 md:px-16 lg:px-24 font-medium text-lg md:text-xl md:mb-0">
              <slot name="middle-button"></slot>
            </h3>
          </div>
        </div>
        <div v-if="hasButtonSlot" class="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <slot name="button"></slot>
        </div>
        <font-awesome-icon :icon="['fas', 'chevron-down']" class="h-6 w-6 absolute md:hidden bottom-2 left-1/2 transform -translate-x-1/2"/>
      </div>
      <div v-else class=" md:h-full md:min-h-[40vh] lg:h-[75vh]">
        <div class="flex items-center md:h-full md:min-h-[40vh] lg:h-[75vh] ">
          <div class="flex flex-col md:h-full md:min-h-[40vh] lg:h-[75vh] lg:mt-24 md:w-full">
            <h1 v-if="hasHeadingSlot" class="text-5xl lg:text-6xl px-8 md:px-16 lg:px-24 md:mt-16 font-bold text-main mb-8 md:mb-12 lg:mb-16 md:w-full">
              <slot name="heading"></slot>
            </h1>
            <div class="lg:flex">
              <div v-if="hasSubheadingSlot && hasDescriptionSlot" class="lg:w-2/5">
                <h2 class="px-8 md:px-16 lg:px-24 font-medium text-2xl md:text-3xl mb-4 md:mb-8">
                  <slot name="subheading"></slot>
                </h2>
              </div>
              <div v-if="hasSubheadingSlot && !hasDescriptionSlot" class="lg:w-full">
                <h2 class="px-8 md:px-16 lg:px-24 font-medium text-2xl md:text-3xl mb-4 md:mb-8">
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
            <h3 v-if="hasMiddleButtonSlot" class="px-8 md:px-16 lg:px-24 font-medium text-lg md:text-xl md:mb-0">
              <slot name="middle-button"></slot>
            </h3>
            <div v-if="video" class="px-16 lg:px-24 hidden md:block w-full h-3/5 lg:h-4/5 lg:mb-12">
              <iframe  class="w-full h-full" :src="video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <div v-if="hasButtonSlot" class="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <slot name="button"></slot>
        </div>
        <font-awesome-icon :icon="['fas', 'chevron-down']" class="h-6 w-6 absolute bottom-2 left-1/2 transform -translate-x-1/2 md:hidden"/>
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
        console.log(this.$store.state.currentTheme )
        if (this.$store.state.currentTheme === 'light') {
            return {
                backgroundImage: `linear-gradient(0deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.50) 100%), linear-gradient(180deg, rgba(255, 189, 89, 0.70) 0%, rgba(255, 189, 89, 0.30) 40.63%, rgba(255, 255, 255, 0.80) 75%, #FFF 100%), url(${this.bgImage})`,
                backgroundSize: 'cover'
            };
        } else {
            return {
                backgroundImage: `linear-gradient(180deg, #D39C49 0%, rgba(47, 34, 16, 0.70) 40.63%, rgba(0, 0, 0, 0.95) 73.96%, #000 100%), url(${this.bgImage})`,
                backgroundSize: 'cover'
            };
        }
    },
    marginLeftAndRight() {
      return `-${(window.innerWidth - 1300) / 2}px`;
    },
    paddingLeftAndRight() {
      return `${(window.innerWidth - 1300) / 2}px`;
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
    hasButtonSlot() {
      return !!this.$slots['button'];
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

.bg-gradient-dark {
  background: linear-gradient(180deg, #D39C49 0%, rgba(47, 34, 16, 0.70) 40.63%, rgba(0, 0, 0, 0.95) 73.96%, #000 100%) !important;
}

@media screen and (max-width: 640px) {
  .bg-gradient {
    background-position: center center;
  }
}
 </style>

<template>
  <section>
    <div class="min-h-[70vh] md:min-h-[35vh] lg:min-h-[70vh] bg-cover" :style="backgroundStyle">
      <div :class="['min-h-[70vh]', 'md:min-h-[35vh]', 'lg:min-h-[70vh]', `${background}`]">
        <h2 class="text-5xl md:text-4xl lg:text-5xl px-8 md:px-16 lg:px-24 font-bold text-main mb-4 md:mb-8 lg:mb-12 pt-16">
          <slot name="heading"></slot>
        </h2>
        <div class="flex flex-col justify-between min-h-[70vh] md:min-h-[35vh] lg:min-h-[50vh]">
          <div class="flex">
            <div class="md:w-1/2">
              <div class="flex flex-col justify-between min-h-[28.5vh]">
                <h3 class="px-8 md:px-16 lg:px-24 font-medium text-lg md:text-xl lg:text-2xl underline mb-4">
                  <slot name="subheading"></slot>
                </h3>
                <h4 class="px-8 md:px-16 lg:px-24 font-medium text-lg lg:text-xl mb-16">
                  <slot name="description"></slot>
                </h4>
              </div>
              <router-link :to="button_link" class="hidden lg:flex justify-center mb-16">
                <button class="border border-main bg-white border-2 font-bold rounded-full p-6 text-xl">{{ button }}</button>
              </router-link>
            </div>
            <div class="md:w-1/2 h-[35vh] lg:h-[50vh] md:pr-16 lg:pr-24 lg:pb-24 hidden md:block">
              <img v-if="image" :src="image" alt="" class="hidden md:block md:w-full md:h-4/5 lg:h-full object-cover">
              <iframe v-else-if="video || (video && image)" :src="video" alt="" class="hidden md:block md:w-full md:h-4/5 lg:h-full object-cover"></iframe>
            </div>
          </div>

          <router-link :to="button_link" class="flex justify-center mb-16 lg:hidden">
            <button class="border border-main bg-white border-2 font-bold rounded-full p-6 text-xl">{{ button }}</button>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'HomeSection',
    props: ['button', 'bgImage', 'button_link', 'image', 'background', 'video'],
    data() {
      return {
        festivalImage: require('@/assets/newgen_2023.png'),
      };
    },
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
</style>

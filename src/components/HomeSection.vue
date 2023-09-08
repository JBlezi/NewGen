<template>
  <section>
    <div class="h-[80vh] md:h-[60vh] lg:h-[75vh] bg-cover" :style="backgroundStyle">
      <div :class="['h-[80vh]', 'md:h-[60vh]', 'lg:h-[75vh]', 'relative', `${background}`]">
        <div class="flex h-[80vh] md:h-[60vh] lg:h-[75vh]">
          <div class="flex flex-col justify-between w-full">
            <div class="mt-16 lg:mt-24">
              <h2 class="text-5xl md:text-4xl lg:text-5xl px-8 md:px-16 lg:px-24 font-bold text-main mb-4 md:mb-8 lg:mb-12">
                <slot name="heading"></slot>
              </h2>
              <div class="md:flex md:h-[45vh] lg:h-[50vh]">
                <div class="md:w-1/2 md:h-[45vh] lg:h-[50vh] md:flex md:flex-col md:justify-between md:relative">
                  <div>
                    <h3 class="px-8 md:px-16 lg:px-24 font-medium text-lg md:text-xl lg:text-2xl underline mb-4">
                      <slot name="subheading"></slot>
                    </h3>
                    <h4 class="px-8 md:px-16 lg:px-24 font-medium text-lg lg:text-xl mb-16">
                      <slot name="description"></slot>
                    </h4>
                  </div>
                  <router-link :to="button_link" class="flex justify-center mb-16 absolute bottom-0 left-0 right-0 ">
                    <button class="border border-main bg-white lg:border-2 font-bold rounded-full p-4 lg:p-6 lg:text-xl">{{ button }}</button>
                  </router-link>
                </div>
                <div class="md:w-1/2 md:pr-16 lg:pr-24 lg:pb-24">
                  <img v-if="image" :src="image" alt="" class="hidden md:block md:w-full md:h-4/5 lg:h-full object-cover">
                  <iframe v-else-if="video || (video && image)" :src="video" alt="" class="hidden md:block md:w-full md:h-4/5 lg:h-full object-cover"></iframe>
                </div>
              </div>
            </div>
          </div>
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

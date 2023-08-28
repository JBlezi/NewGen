<template>
  <section>
    <div class="h-screen md:h-[50vh] bg-cover" :style="backgroundStyle">
      <div class="h-screen md:h-[50vh] relative bg-gradient">
        <div class="flex h-screen md:h-[50vh]">
          <div class="flex flex-col justify-between w-full">
            <div class="mt-16">
              <h2 class="text-5xl md:text-4xl px-8 md:px-16 font-bold text-main mb-4 md:mb-8">
                <slot name="heading"></slot>
              </h2>
              <div class="md:flex">
                <div class="md:w-1/2 md:flex md:flex-col md:h-[28rem] md:justify-between">
                  <h3 class="px-8 md:px-16 font-medium text-lg underline mb-4">
                    <slot name="subheading"></slot>
                  </h3>
                  <h4 class="px-8 md:px-16 font-medium text-lg mb-16">
                    <slot name="description"></slot>
                  </h4>
                  <router-link :to="button_link" class="flex justify-center mb-16 absolute bottom-0 left-0 right-0 md:static">
                    <button class="border border-main font-bold rounded-full p-4">{{ button }}</button>
                  </router-link>
                </div>
                <div class="md:w-1/2 md:pr-16 md:h-[48rem]">
                  <img :src="image" alt="" class="hidden md:block md:h-1/2 md:w-full object-cover">
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
    props: ['button', 'bgImage', 'button_link', 'image'],
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

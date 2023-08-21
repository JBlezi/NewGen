<template>
  <section>
    <div class="h-screen bg-cover" :style="{ backgroundColor: bgColor }">
      <div class="h-screen relative">
        <div class="flex h-screen">

            <div class="mt-8 flex flex-col px-8 h-full">
              <h2 class="text-4xl font-bold text-main">
                <slot name="heading"></slot>
              </h2>
              <h3 class="font-medium mb-4">
                <slot name="subheading"></slot>
              </h3>
              <font-awesome-icon :icon="['fas', 'chevron-right']" class="h-6 w-6 absolute bottom-1/2 right-5 transform translate-y-1/2" :class="{'opacity-50': isRightArrowDisabled}" @click="handleGalleryRight"/>
              <font-awesome-icon :icon="['fas', 'chevron-left']" class="h-6 w-6 absolute bottom-1/2 left-5 transform translate-y-1/2" :class="{'opacity-50': isLeftArrowDisabled}" @click="handleGalleryLeft"/>

              <div class="flex flex-col justify-center h-4/5">
                <img :src="movieList[this.counter].poster" alt="" class="h-full max-h-[22rem] self-center">
                <h4 class="font-medium text-lg flex justify-center text-main">
                  {{ movieList[this.counter].title }}
                </h4>
                <h4 class="font-medium text-lg flex justify-center">
                  {{ movieList[this.counter].director }} | {{ movieList[this.counter].year }}
                </h4>
              </div>
              <div class="mb-16 flex justify-center">
                <button class="border border-main font-bold rounded-full p-4">{{ button }}</button>
              </div>
            </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ScreeningSection',
  props: ['button', 'bgColor', 'movieList'],
  data() {
    return {
      counter: 0,
      background: '#FFF8EE',
    };
  },
  methods: {
    handleGalleryRight() {
      if (this.counter < this.movieList.length -1) {
        this.counter += 1;
      }
    },
    handleGalleryLeft() {
      if (this.counter > 0) {
        this.counter -= 1;
      }
    }
  },
  computed: {
    isLeftArrowDisabled() {
    return this.counter === 0;
    },
    isRightArrowDisabled() {
      return this.counter === this.movieList.length - 1;
    },
    backgroundStyle() {
      return {
        backgroundImage: `url(${this.bgImage})`,
      };
    },
  },
};
</script>

<style scoped>
</style>

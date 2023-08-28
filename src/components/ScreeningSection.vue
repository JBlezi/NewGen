<template>
  <section>
    <div class="bg-cover" :style="{ backgroundColor: bgColor }">
      <div class="relative">
        <div class="flex">

            <div class="mt-8 flex flex-col px-8 h-full w-full">
              <h2 class="text-3xl font-bold text-main">
                <slot name="heading"></slot>
              </h2>
              <h3 class="font-medium mb-4">
                <slot name="subheading"></slot>
              </h3>
              <font-awesome-icon v-if="movieList.movies.length > 1 && !button" :icon="['fas', 'chevron-right']" class="h-6 w-6 absolute bottom-[42%] right-5 transform translate-y-1/2 md:hidden" :class="{'opacity-50': isRightArrowDisabled}" @click="handleGalleryRight"/>
              <font-awesome-icon v-if="movieList.movies.length > 1 && button" :icon="['fas', 'chevron-right']" class="h-6 w-6 absolute bottom-1/2 right-5 transform translate-y-1/2 md:hidden" :class="{'opacity-50': isRightArrowDisabled}" @click="handleGalleryRight"/>
              <font-awesome-icon v-if="movieList.movies.length > 1 && !button" :icon="['fas', 'chevron-left']" class="h-6 w-6 absolute bottom-[42%] left-5 transform translate-y-1/2 md:hidden" :class="{'opacity-50': isLeftArrowDisabled}" @click="handleGalleryLeft"/>
              <font-awesome-icon v-if="movieList.movies.length > 1 && button" :icon="['fas', 'chevron-left']" class="h-6 w-6 absolute bottom-1/2 left-5 transform translate-y-1/2 md:hidden" :class="{'opacity-50': isLeftArrowDisabled}" @click="handleGalleryLeft"/>
              <font-awesome-icon v-if="movieList.movies.length > 2 && button" :icon="['fas', 'chevron-right']" class="h-6 w-6 absolute bottom-1/2 right-5 transform translate-y-1/2 hidden md:block" :class="{'opacity-50': isRightArrowDisabled}" @click="handleGalleryRightTablet"/>
              <font-awesome-icon v-if="movieList.movies.length > 2 && button" :icon="['fas', 'chevron-left']" class="h-6 w-6 absolute bottom-1/2 left-5 transform translate-y-1/2 hidden md:block" :class="{'opacity-50': isLeftArrowDisabled}" @click="handleGalleryLeftTablet"/>
              <div class="md:flex md:justify-around md:mt-8">
                <div class="h-4/5">
                  <router-link :to="`/movie/${movieList.id}`" class="flex flex-col justify-center">
                    <img :src="movieList.movies[this.counter].poster" alt="" class="h-full max-h-[22rem] min-h-[22rem] self-center">
                    <h4 class="font-medium text-lg flex justify-center text-main">
                      {{ movieList.movies[this.counter].title }}
                    </h4>
                    <h4 class="font-medium text-lg flex justify-center">
                      {{ movieList.movies[this.counter].director }} | {{ movieList.movies[this.counter].year }}
                    </h4>
                  </router-link>
                </div>
                <div v-if="movieList.movies.length > 1" class="h-4/5 hidden md:block">
                  <router-link :to="`/movie/${movieList.id}`" class="flex flex-col justify-center">
                    <img :src="movieList.movies[this.counterTablet].poster" alt="" class="h-full max-h-[22rem] min-h-[22rem] self-center">
                    <h4 class="font-medium text-lg flex justify-center text-main">
                      {{ movieList.movies[this.counterTablet].title }}
                    </h4>
                    <h4 class="font-medium text-lg flex justify-center">
                      {{ movieList.movies[this.counterTablet].director }} | {{ movieList.movies[this.counterTablet].year }}
                    </h4>
                  </router-link>
                </div>
              </div>
              <a v-if="button" class="my-8 flex justify-center" :href="button_link" target="_blank">
                <button class="border border-main font-bold rounded-full p-4">{{ button }}</button>
              </a>
            </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ScreeningSection',
  props: ['button', 'bgColor', 'movieList', 'button_link'],
  data() {
    return {
      counter: 0,
      counterTablet: 1,
      background: '#FFF8EE',
    };
  },
  methods: {
    handleGalleryRight() {
      if (this.counter < this.movieList.movies.length -1) {
        this.counter += 1;
      }
    },
    handleGalleryLeft() {
      if (this.counter > 0) {
        this.counter -= 1;
      }
    },
    handleGalleryRightTablet() {
      if (this.counter < this.movieList.movies.length -2) {
        this.counter += 1;
      }
      if (this.counterTablet < this.movieList.movies.length -1) {
        this.counterTablet += 1;
      }
    },
    handleGalleryLeftTablet() {
      if (this.counter > 0) {
        this.counter -= 1;
      }
      if (this.counterTablet > 1) {
        this.counterTablet -= 1;
      }
    }
  },
  computed: {
    isLeftArrowDisabled() {
    return this.counter === 0;
    },
    isRightArrowDisabled() {
      return this.counter === this.movieList.movies.length - 1;
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

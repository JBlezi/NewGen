<template>
  <section>
    <div class="bg-cover" :style="{ backgroundColor: adjustedBgColor }">
      <div class="relative">
        <div class="flex">
          <div class="dark:text-white mt-8 md:my-16 flex flex-col px-8 md:px-16 lg:px-24 lg:mt-24 h-full w-full">
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-main lg:mb-4 lg:w-4/5">
              <slot name="heading"></slot>
            </h2>
            <h3 class="font-medium mb-4 md:text-lg lg:text-xl lg:mb-8">
              <slot name="subheading"></slot>
            </h3>
            <font-awesome-icon v-if="movieList.movies.length > 1 && !button" :icon="['fas', 'chevron-right']" class="h-6 w-6 absolute bottom-[42%] right-5 transform translate-y-1/2 md:hidden" :class="{'opacity-50': isRightArrowDisabled}" @click="handleGalleryRight"/>
            <font-awesome-icon v-if="movieList.movies.length > 1 && button" :icon="['fas', 'chevron-right']" class="h-6 w-6 absolute bottom-1/2 right-5 transform translate-y-1/2 md:hidden" :class="{'opacity-50': isRightArrowDisabled}" @click="handleGalleryRight"/>
            <font-awesome-icon v-if="movieList.movies.length > 1 && !button" :icon="['fas', 'chevron-left']" class="h-6 w-6 absolute bottom-[42%] left-5 transform translate-y-1/2 md:hidden" :class="{'opacity-50': isLeftArrowDisabled}" @click="handleGalleryLeft"/>
            <font-awesome-icon v-if="movieList.movies.length > 1 && button" :icon="['fas', 'chevron-left']" class="h-6 w-6 absolute bottom-1/2 left-5 transform translate-y-1/2 md:hidden" :class="{'opacity-50': isLeftArrowDisabled}" @click="handleGalleryLeft"/>
            <font-awesome-icon v-if="movieList.movies.length > 2 && !button" :icon="['fas', 'chevron-right']" class="h-10 w-10 absolute bottom-[48%] right-5 transform translate-y-1/2 hidden md:block lg:hidden cursor-pointer" :class="{'opacity-50': isRightArrowDisabledTablet}" @click="handleGalleryRightTablet"/>
            <font-awesome-icon v-if="movieList.movies.length > 2 && !button" :icon="['fas', 'chevron-left']" class="h-10 w-10 absolute bottom-[48%] left-5 transform translate-y-1/2 hidden md:block lg:hidden cursor-pointer" :class="{'opacity-50': isLeftArrowDisabled}" @click="handleGalleryLeftTablet"/>
            <font-awesome-icon v-if="movieList.movies.length > 2 && button" :icon="['fas', 'chevron-right']" class="h-10 w-10 absolute bottom-[53%] right-5 transform translate-[50%] hidden md:block lg:hidden cursor-pointer" :class="{'opacity-50': isRightArrowDisabledTablet}" @click="handleGalleryRightTablet"/>
            <font-awesome-icon v-if="movieList.movies.length > 2 && button" :icon="['fas', 'chevron-left']" class="h-10 w-10 absolute bottom-[53%] left-5 transform translate-y-1/2 hidden md:block lg:hidden cursor-pointer" :class="{'opacity-50': isLeftArrowDisabled}" @click="handleGalleryLeftTablet"/>
            <font-awesome-icon v-if="movieList.movies.length > 2 && !button" :icon="['fas', 'chevron-right']" class="h-10 w-10 absolute bottom-[40%] right-5 transform translate-y-1/2 hidden lg:block cursor-pointer" :class="{'opacity-50': isRightArrowDisabledTablet}" @click="handleGalleryRightTablet"/>
            <font-awesome-icon v-if="movieList.movies.length > 2 && !button" :icon="['fas', 'chevron-left']" class="h-10 w-10 absolute bottom-[40%] left-5 transform translate-y-1/2 hidden lg:block cursor-pointer" :class="{'opacity-50': isLeftArrowDisabled}" @click="handleGalleryLeftTablet"/>
            <font-awesome-icon v-if="movieList.movies.length > 2 && button" :icon="['fas', 'chevron-right']" class="h-10 w-10 absolute bottom-[40%] right-5 transform translate-[50%] hidden lg:block cursor-pointer" :class="{'opacity-50': isRightArrowDisabledTablet}" @click="handleGalleryRightTablet"/>
            <font-awesome-icon v-if="movieList.movies.length > 2 && button" :icon="['fas', 'chevron-left']" class="h-10 w-10 absolute bottom-[40%] left-5 transform translate-y-1/2 hidden lg:block cursor-pointer" :class="{'opacity-50': isLeftArrowDisabled}" @click="handleGalleryLeftTablet"/>
            <div class="md:flex md:justify-around md:mt-8 md:-mx-8 lg:mx-0">
              <div class="h-4/5">
                <div class="lg:flex">
                  <router-link :to="`/movie/${movieList.id}`" class="flex flex-col justify-center">
                    <img :src="movieList.movies[this.counter].poster" alt="" class="h-full max-h-[22rem] md:max-h-[26rem] lg:min-w-[18rem] min-h-[22rem] md:min-h-[26rem] self-center md:mb-4">
                    <h4 class="font-medium text-xl flex justify-center text-main lg:hidden">
                      {{ movieList.movies[this.counter].title }}
                    </h4>
                    <h4 class="font-medium text-xl flex justify-center lg:hidden">
                      {{ movieList.movies[this.counter].director }} | {{ movieList.movies[this.counter].year }}
                    </h4>
                  </router-link>
                  <div class="flex flex-col max-h-96 overflow-y-scroll div-scrolling scrollbar-hide-vertical">
                    <h4 class="font-medium text-xl lg:text-2xl flex justify-center text-main hidden lg:block pl-8">
                      {{ movieList.movies[this.counter].title }}
                    </h4>
                    <h4 class="font-medium text-xl lg:text-2xl flex justify-center hidden lg:block pl-8 lg:mb-8">
                      {{ movieList.movies[this.counter].director }} | {{ movieList.movies[this.counter].year }}
                    </h4>
                    <div v-if="movieList.movies.length == 1" class="hidden lg:block w-56 lg:w-[32rem] pl-8 font-medium lg:text-xl">
                      {{ movieList.movies[this.counter].description }}
                    </div>
                    <div v-else class="hidden lg:block w-56 pl-8 font-medium lg:text-xl">
                      {{ movieList.movies[this.counter].description }}
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="movieList.movies.length > 1" class="h-4/5 hidden md:block lg:ml-8">
                <div class="lg:flex">
                  <router-link :to="`/movie/${movieList.id}`" class="flex flex-col justify-center">
                    <img :src="movieList.movies[this.counterTablet].poster" alt="" class="h-full max-h-[22rem] md:max-h-[26rem] lg:min-w-[18rem] min-h-[22rem] md:min-h-[26rem] self-center md:mb-4">
                    <h4 class="font-medium text-xl flex justify-center text-main lg:hidden">
                      {{ movieList.movies[this.counterTablet].title }}
                    </h4>
                    <h4 class="font-medium text-xl flex justify-center lg:hidden">
                      {{ movieList.movies[this.counterTablet].director }} | {{ movieList.movies[this.counterTablet].year }}
                    </h4>
                  </router-link>
                  <div class="flex flex-col max-h-96 overflow-y-scroll div-scrolling scrollbar-hide-vertical">
                    <h4 class="font-medium text-xl lg:text-2xl flex justify-center text-main hidden lg:block pl-8">
                      {{ movieList.movies[this.counterTablet].title }}
                    </h4>
                    <h4 class="font-medium text-xl lg:text-2xl flex justify-center hidden lg:block pl-8 lg:mb-8">
                      {{ movieList.movies[this.counterTablet].director }} | {{ movieList.movies[this.counterTablet].year }}
                    </h4>
                    <div class="hidden lg:block w-56 pl-8 font-medium lg:text-xl">
                      {{ movieList.movies[this.counterTablet].description }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a v-if="button" class="my-8 flex justify-center lg:absolute lg:right-16 lg:top-16" :href="button_link" target="_blank">
              <button v-if="adjustedBgColor == 'black'" class="border border-main border-4 font-bold rounded-full p-4 md:p-6 md:text-2xl bg-main-light dark:bg-main-dark">{{ button }}</button>
              <button v-if="adjustedBgColor == '#584932'" class="border border-main border-4 font-bold rounded-full p-4 md:p-6 md:text-2xl bg-white dark:bg-black">{{ button }}</button>
              <button v-if="adjustedBgColor == 'white'" class="border border-main border-4 font-bold rounded-full p-4 md:p-6 md:text-2xl bg-white dark:bg-black">{{ button }}</button>
              <button v-if="adjustedBgColor == '#FFF8EE'" class="border border-main border-4 font-bold rounded-full p-4 md:p-6 md:text-2xl bg-white dark:bg-black">{{ button }}</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ScreeningSection',
  props: {
    button: String,
    bgColor: String,
    movieList:{
      type: Object,
      required: true,
      validator(value) {
        return value && Array.isArray(value.movies);
      }
    },
    button_link: String
  },
  data() {
    return {
      counter: 0,
      counterTablet: 1,
      counterDesktop: 2,
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
    },
    handleGalleryRightDesktop() {
      if (this.counter < this.movieList.movies.length -3) {
        this.counter += 1;
      }
      if (this.counterTablet < this.movieList.movies.length -2) {
        this.counterTablet += 1;
      }
      if (this.counterDesktop < this.movieList.movies.length -1) {
        this.counterDesktop += 1;
      }
    },
    handleGalleryLeftDesktop() {
      if (this.counter > 0) {
        this.counter -= 1;
      }
      if (this.counterTablet > 1) {
        this.counterTablet -= 1;
      }
      if (this.counterDesktop > 2) {
        this.counterDesktop -= 1;
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
    isRightArrowDisabledTablet() {
      return this.counterTablet === this.movieList.movies.length - 1;
    },
    isRightArrowDisabledDesktop() {
      return this.counterDesktop === this.movieList.movies.length - 1;
    },
    backgroundStyle() {
      return {
        backgroundImage: `url(${this.bgImage})`,
      };
    },
    adjustedBgColor() {
      if (this.currentTheme === 'dark') {
        if (this.bgColor === 'white') return 'black';
        if (this.bgColor === '#FFF8EE') return '#584932';
      }
      if (this.currentTheme === 'light') {
        if (this.bgColor === 'white') return '#FFF8EE';
        if (this.bgColor === '#FFF8EE') return 'white';
      }
      return this.bgColor
    },
    ...mapGetters(['currentTheme']),
  },
};
</script>

<style scoped>
  /* Hide scrollbar for Chrome, Safari and Opera */
.div-scrolling::-webkit-scrollbar {
    width: 4px;  /* Hide the scrollbar container */
}

.scrollbar-hide-vertical::-webkit-scrollbar-vertical {
  display: none;
}

.scrollbar-hide-vertical {
  overflow-x: hidden;
}

/* Hide scrollbar for IE, Edge and Firefox */
.div-scrolling {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}

.div-scrolling::-webkit-scrollbar-thumb {
    background-color: rgba(239, 239, 240, 0.5); /* Change the color to your liking */
    border-radius: 8px;
    width: 8px; /* Adjust width if needed */
}

</style>

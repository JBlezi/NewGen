<template>
  <section>
    <div class="h-screen bg-cover" :style="backgroundStyle">
      <div class="h-screen relative">
        <div class="flex h-screen">
          <div class="flex flex-col justify-start">
            <div class="mt-8">
              <h2 class="text-4xl px-8 font-bold text-main">
                <slot name="heading"></slot>
              </h2>
              <h3 class="px-8 font-medium mb-4">
                <slot name="subheading"></slot>
              </h3>
              <div class="flex">
                <div v-for="(movie, index) in movies" :key="index" class="overflow-x-hidden mx-8">
                  <img :src="movie.poster" alt="" class="mb-4">
                  <h4 class="px-8 font-medium text-lg text-main self-center w-4/5">
                    {{ movie.title }}
                  </h4>
                  <h4 class="px-8 font-medium text-lg mb-16 self-center">
                    {{ movie.director }}, {{ movie.year }}
                  </h4>
                </div>
              </div>
            </div>
            <div class="flex justify-center mb-16">
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
  props: ['button', 'bgImage'],
  data() {
    return {
      bgColor: '#FFF8EE',
      movies: [
        { title: 'Movie 1', director: 'Director 1', year: '2022', poster: require('@/assets/will_you_look_at_me.png') },
        { title: 'Movie 2', director: 'Director 2', year: '2023', poster: require('@/assets/will_you_look_at_me.png') },
        // Add more movie objects...
      ],
    };
  },
  computed: {
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

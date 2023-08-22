<template>
  <section>
    <div class="h-screen bg-cover" :style="backgroundStyle">
      <div class="bg-white h-screen bg-opacity-90 relative">
        <div class="flex items-center h-screen">
          <div class="flex flex-col">
            <h1 class="text-5xl px-8 font-bold text-main mb-4">
              <slot name="heading"></slot>
            </h1>
            <h2 class="px-8 font-medium text-lg mb-4">
              <slot name="subheading"></slot>
            </h2>
            <h3 class="px-8 font-medium text-lg mb-4">
              <slot name="description"></slot>
            </h3>
            <h3 class="px-8 font-medium text-lg mb-16">
              <slot name="middle-button"></slot>
            </h3>
          </div>
        </div>
        <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <slot name="button"></slot>
        </div>
        <font-awesome-icon :icon="['fas', 'chevron-down']" class="h-6 w-6 absolute bottom-5 left-1/2 transform -translate-x-1/2"/>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'HeroSection',
    props: ['bgImage'],
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

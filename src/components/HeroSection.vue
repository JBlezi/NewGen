<template>
  <section>
    <div class="h-screen bg-cover" :style="backgroundStyle">
      <div class="bg-white h-screen bg-opacity-50 relative">
        <div class="flex items-center h-screen">
          <h1 class="text-5xl px-8 font-bold">
            <slot></slot>
          </h1>
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

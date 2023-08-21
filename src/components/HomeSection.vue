<template>
  <section>
    <div class="h-screen bg-cover" :style="backgroundStyle">
      <div class="h-screen relative bg-gradient">
        <div class="flex h-screen">
          <div class="flex flex-col justify-between">
            <div class="mt-16">
              <h2 class="text-5xl px-8 font-bold text-main mb-4">
                <slot name="heading"></slot>
              </h2>

              <h3 class="px-8 font-medium text-lg underline mb-4">
                <slot name="subheading"></slot>
              </h3>
              <h4 class="px-8 font-medium text-lg mb-16">
                <slot name="description"></slot>
              </h4>
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
    name: 'HomeSection',
    props: ['button', 'bgImage'],
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

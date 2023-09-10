<template>
  <div class="flex justify-center">
    <a :href="link" target="_blank">
      <button class="border-2 bg-white border-main md:border-4 md:text-2xl font-bold rounded-full p-4 md:p-6"><slot></slot></button>
    </a>
  </div>
</template>

<!-- eslint-disable vue/multi-word-component-names -->
<script>

export default {
  name: 'Button',
  props: ['link'],
};

</script>

<style scoped>

</style>

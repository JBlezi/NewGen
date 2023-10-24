<template>
  <div class="flex justify-center">
    <a :href="link" target="_blank">
      <button class="bg-white dark:bg-black dark:text-white border-main border-4 text-2xl font-bold rounded-full p-6"><slot></slot></button>
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

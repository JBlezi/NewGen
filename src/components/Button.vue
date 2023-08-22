<template>
  <div class="flex justify-center mb-16">
    <button class="border border-main font-bold rounded-full p-4"><slot></slot></button>
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

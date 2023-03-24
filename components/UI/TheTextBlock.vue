<template>
  <div class="text-block">
    <h4 class="text-block__title">
      {{$t(title)}}
    </h4>
    <p class="text-block__text">
      {{comment}}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  comment: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
  .text-block {
    font-size: 2.3rem;
    &__title {
      margin-bottom: 1rem;
    }
  }
</style>
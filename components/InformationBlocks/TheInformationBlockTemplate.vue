<template>
  <div :style="{'background-color': informationBackground}" class="information-block">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps({
  informationBackground: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" >
  .information-block {
    width: 100%;
    min-height: 66.6rem;
    border-radius: 2rem;
    padding: 10rem 4rem;
    &__wrapper {
      position: relative;
      height: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
</style>
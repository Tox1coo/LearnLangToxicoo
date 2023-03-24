<template>
  <div class="info-block">
    <UITheTitleAccent class="info-block__title" :svg-bottom="-18" :svg-color="colorLines" :text-accent="title"/>
    <p class="text info-block__text">{{$t(text)}}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  colorLines: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
@import "assets/styles/mixins";

.info-block {
  max-width: 45%;
  color: #fff;
  &__title {
    @include adaptive-font(60, 40);
  }
  &__text {
    margin-top: 2.5rem;

  }
}
</style>
<template>
  <h3 class="title-accent">
    {{$t(textAccent, numberAccent)}}
    <svg :style="{bottom: `${svgBottom}px`}" viewBox="0 0 387 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.49938 11.1067C26.4839 7.87269 110.402 -4.61951 386.513 9.80448C262.911 9.33877 77.952 9.87144 1 22.5925" :stroke="svgColor" stroke-width="4.9904"/>
    </svg>
  </h3>
</template>

<script setup lang="ts">
defineProps({
  textAccent: {
    type: String,
    required: true
  },
  numberAccent: {
    type: Number,
    default: 0
  },
  svgColor: {
    type: String,
    required: true
  },
  svgBottom: {
    type: Number,
    default: -5
  }
})
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
.title-accent {
  @include adaptive-font(85,60);
   width: fit-content;
   position: relative;
   font-family: 'Caveat', serif;
   margin-right: 2.5rem;
   font-weight: 400;
  svg {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
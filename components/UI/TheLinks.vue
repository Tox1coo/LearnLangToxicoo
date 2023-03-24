<template>
  <NuxtLink :to="linksUrl" class="link" :style="{'color': linksColorName}"><slot/></NuxtLink>
</template>

<script setup lang="ts">
  defineProps({
    linksUrl: {
      type:String,
      required:true
    },
    linksColorName: {
      type: String,
      default: "#fff"
    }
  })
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
.link {
  @include adaptive-font(15,13);
  position: relative;
  text-decoration: underline;
  height: fit-content;
  opacity: 0.9;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:not(:last-child) {
    margin-right: 1.5rem;
  }

  &:hover {
    &::before {
      transform: scaleX(1);
    }
    opacity: 1;
  }
}
</style>
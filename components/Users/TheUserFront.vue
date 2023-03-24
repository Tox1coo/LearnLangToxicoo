<template>
  <div @click.prevent="$emit('eventUser')" class="user-front">
    <slot />
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
  .user-front {
    position: relative;
    cursor: pointer;
    &__wrapper {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
</style>
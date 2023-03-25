<template>
  <div @click.stop="$emit('update:show', false)" v-if="show" class="modal">
    <div @click.stop class="modal__inner">
        <slot/>
    </div>
  </div>
</template>

<script lang="ts" setup>
  defineProps({
    show: {
      type: Boolean,
      required:true
    }
  })
</script>

<style lang="scss" scoped>
.modal {
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  top: 0;
  left: 0;
  background-color: rgba($primary-background, 0.8);
  &__inner {
    min-width: 800px;
    min-height: fit-content;
    background-color: #fff;
    border-radius: 2rem;
    padding: 3rem;
  }
}
</style>
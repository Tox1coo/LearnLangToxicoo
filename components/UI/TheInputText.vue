<template>
  <input  :type="typeInput" @input="$emit('update:modelValue', $event.target.value)" :placeholder="placeholderInput" class="input">
</template>

<script setup lang="ts">
  defineProps({
    modelValue: {
      type: String,
      required: true
    },
    typeInput: {
      type: String,
      default: 'text'
    },
    placeholderInput: {
      type: String,
      default: 'Enter the text'
    }
  })
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  height: auto;
  min-height: 7rem;
  padding-left: 3rem;
  font-size: 2rem;
  font-family: Roboto sans-serif;
}
</style>
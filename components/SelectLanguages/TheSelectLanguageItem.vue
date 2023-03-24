<template>
  <div class="select-language__wrapper-item">
    <div @click="$emit('visibleLanguageList', {visible: true, variant: languageAbbreviation })" class="select-language__item">
      {{languageAbbreviation}}
    </div>

  </div>

</template>

<script lang="ts" setup>

defineProps( {
  languageAbbreviation: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.select-language {
  &__wrapper-item{
    position: relative;
  }
  &__item {
    cursor: pointer;
    font-size: 2.5rem;
    opacity: 0.4;
    transition: color 0.1s ease;
    &:hover {
      opacity: 1;
    }
  }
}

</style>
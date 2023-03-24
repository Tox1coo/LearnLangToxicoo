<template>
  <div class="dictionary-form">
    <UITheInputText @click="visibleSearch = true"  v-model="word" :placeholder-input="$t('translate.input-dictionary')"/>
    <SelectLanguagesTheSelectLanguages/>
    <UITheButton class="btn--search" @clickEvent="searchWord">{{$t('translate.btn-search')}}</UITheButton>
    <div v-click-outside="closeResultSearch" v-show="words.length > 0 && visibleSearch" class="result-search">
      <SearchBlockTheResultSearch :search-results="words"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {Ref} from "vue";
let word:Ref<string> = ref('');
let visibleSearch: boolean = $ref(false);
const words:wordResultInterface[] = [
  {
    translate_word: ['build'],
    original_word:'Строитель',
    sound_file: 'file.vaw'
  },
  {
    translate_word: ['build'],
    original_word:'Строить',
    sound_file: 'file.vaw'
  },
  {
    translate_word: ['build'],
    original_word:'Строить',
    sound_file: 'file.vaw'
  },
  {
    translate_word: ['build', 'build'],
    original_word:'Строить',
    sound_file: ''
  }
]

watch(() => words, (wordsList) => {
  if(wordsList.length > 0) {
    visibleSearch = true
  }
})
const closeResultSearch = () => {
  visibleSearch = false

}
</script>

<style lang="scss" scoped>
  .dictionary-form {
    position: relative;
    display: flex;
    justify-content: space-between;
    gap: 15px;
    .input {
      flex: 0 1 70%;
      border-radius: 10px;
      outline: none;
      font-size: 2.3rem;
    }
    .btn {
      flex: 0 1 20%;

    }
  }
  .result-search {
    border: 1px solid $primary-accent;
    border-top: none;
    position: absolute;
    z-index: 2;
    width: 100%;
    top: 98%;
    left: 0;
    background-color: $primary-background;
    border-radius: 0 0 1rem 1rem;
    padding: 0.7rem 0;
  }


</style>
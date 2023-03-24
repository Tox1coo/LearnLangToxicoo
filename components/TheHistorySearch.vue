<template>
  <div class="history-search">
    <div class="history-search__title title">{{$t('title.history')}}</div>
    <template v-if="historyWords.length">
      <SearchBlockTheResultSearch :search-results="historyWords"/>
    </template>
    <template v-else>
      <div class="history-search__empty title">{{$t('history.empty')}} :(</div>
    </template>
  </div>
</template>

<script setup lang="ts">

  const historyWords:wordResultInterface[] = [
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
  ];

</script>

<style lang="scss" >
.history-search {
  background-color: $primary-background;
  padding: 2rem 0;
  margin-top: 7rem;
  border-radius: 2rem;
  text-align: center;
  .result-words__text {
    font-size: 2rem;
  }
  .title {
    font-size: 4.5rem;
    margin-bottom: 2rem;
  }
}
</style>
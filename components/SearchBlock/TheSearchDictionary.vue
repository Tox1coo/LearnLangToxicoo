<template>
  <div class="search-dictionary">
    <div class="search-dictionary__titles">
      <div class="search-dictionary__title">{{$t('title.search')}}</div>
      <div class="search-dictionary__subtitle title">{{$t('subtitle.search')}}</div>
    </div>
  <SearchBlockTheInputDictionary />
    <TheHistorySearch></TheHistorySearch>
  </div>

</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
@import "assets/styles/mixins";
  .search-dictionary {
    max-width: 1200px;
    margin: 0 auto;

    &__titles {
      text-align: center;
      margin-bottom: 5rem;
    }
    &__title {
      width: 70%;
      margin: 0 auto 1rem;
      @include  adaptive-font(60, 30);
      font-weight: 400;
    }

    &__subtitle {
      @include  adaptive-font(50, 20);
    }

    .dictionary-form {
      background-color: $primary-background;
      padding: .8rem;
      border-radius: 10px;
    }

  }
</style>
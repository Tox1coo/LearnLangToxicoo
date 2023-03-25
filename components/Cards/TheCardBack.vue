<template>
  <div class="card__back">
    <h3 class="card__back-title">
        {{$t('translate.translate')}}
    </h3>
    <div class="card__back-content">
      <div class="card__back-translate">
        {{cardInfoBack.translate_word}}
      </div>
      <UITheTextBlock :title="'title.comment'" :comment="cardInfoBack.comment"/>
      <UITheTextBlock :title="'title.examples'" :comment="cardInfoBack.example"/>
    </div>
    <img @click="$emit('flipCard')" src="/arrow_back.png" alt="flip">

  </div>
</template>

<script lang="ts" setup>
interface CardBack{
  cardInfoBack:CardBackInterface
}

defineProps<CardBack>()
</script>

<style lang="scss" scoped>
.card__back {
  &-title {
    font-family: 'Caveat', sans-serif;
    font-size: 4rem;
    text-align: center;
  }

  &-content {
    height: 70%;
    width: 100%;
    overflow-y: auto;
    word-wrap: break-word;
    margin-top: 2rem;
  }
  &-translate {
    font-size: 2.7rem;
    margin-bottom: 2rem;
  }
  .text-block {
    margin-bottom: 2rem;
  }
  img {
    cursor: pointer;
    position: absolute;
    left: 50%;
    bottom: 40px;
    transform: translateX(-50%);
  }
}

</style>
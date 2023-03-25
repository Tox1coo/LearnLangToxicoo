<template>
  <div class="card__front">
    <div class="card__front-original">
      <div>
        <h3 class="card__front-word">{{cardInfoFront.original_word}}</h3>
        <UITheSound v-if="cardInfoFront.sound.sound_file" :sound-file="cardInfoFront.sound.sound_file"/>
      </div>
      <p class="card__front-transcription">[{{cardInfoFront.transcription}}]</p>
      <p class="card__front-part">{{cardInfoFront.part_of_speech}}</p>
    </div>
    <div @click="$emit('flipCard')" class="card__front-flip">
      <img src="/arrow_back.png" alt="flip">
      <p class="card__front-flip__text">{{$t('cards.flip')}}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>

defineProps({
  cardInfoFront: {
    type: Object as () => CardFrontInterface,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.card__front {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  text-align: center;
  font-size: 3rem;

  &-original{
    div{
      display: flex;
      align-items: center;
      gap: 5px;
      img {
        cursor: pointer;
      }

      margin-bottom: 0.7rem;
    }
  }
  &__transcription {
    margin-bottom: 0.5rem;
  }
  &-flip {
    cursor: pointer;
    &__text {
      font-size: 2rem;
    }
  }
}
</style>
<template>
  <div :class="{'card--flip': cardFlipped}" class="card">
    <div class="card__content">
      <CardsTheCardFront @flipCard="flipCard"  :card-info-front="cardFront"></CardsTheCardFront>

      <CardsTheCardBack @flipCard="flipCard" :card-info-back="cardBack"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps({
    card: {
      type: Object as () => WordInterface,
      required: true
    },
    cardDisable: {
      type: Boolean,
      default: false
    }
  })
let cardFlipped = $ref(false);
const cardFront: CardFrontInterface = {
    original_word: props.card.original_word,
    transcription: props.card.transcription,
    sound: {
      sid: props.card.sound?.sid,
      abbr: props.card.sound?.abbr,
      sound_file: props.card.sound?.sound_file
    },
  part_of_speech: props.card.part_of_speech,
  image: props.card.image,

}
const cardBack:CardBackInterface  = {
  translate_word: props.card?.translate_word,
  example: props.card?.example,
  comment: props.card?.comment,


}
function flipCard() {
  if(!props.cardDisable) {
    cardFlipped ? cardFlipped = false : cardFlipped = true;
  }

}
</script>

<style lang="scss" scoped>
  .card {
    width: 50rem;
    height: 62rem;
    &__content {
      width: 100%;
      height: 100%;
      position: relative;
      perspective: 1000px;

    }
    &__front, &__back {
      backface-visibility: hidden;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      transition: 1s;
      background-color: #fff;
      border-radius: 2rem;
      padding: 2rem;

    }

    &__back {
      transform: rotateY(180deg);
    }
    &--flip {

      .card__back {
        transform:rotateY(360deg);
      }

      .card__front {
        transform: rotateY(180deg);
      }
    }
  }
</style>
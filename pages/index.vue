<template>
  <div class="home">
    <div class="container">
      <HeroTheHero/>
      <InformationBlocksTheInformationBlockTemplate information-background="#8774FF">
        <div class="information-block__wrapper">
          <InformationBlocksTheInformationBlockText :color-lines="'#CB9D29'" :text="'home.information-block.build.text'" :title="'home.information-block.build.title'"/>
          <CardsTheCard :card-disable="true" :card="cardExample"/>
          <img id="circle-information" src="/circle.png" alt="">
          <img id="heart-information" src="/3d/heart_3d.png" alt="">
        </div>
      </InformationBlocksTheInformationBlockTemplate>
      <InformationBlocksTheInformationBlockTemplate id="vivid-information" information-background="#10B582">
        <div class="information-block__wrapper">
          <div class="lines-information">
            <svg width="500" height="600" viewBox="0 0 500 600">
              <image width="130" x="-30" y="-10" href="/3d/flower_3d.png"></image>
              <path d="M55, 90 C300 380, 210 100, 250 20 S100,150 200,450 Q10,10 400,500" stroke="#fff" stroke-width="4"  fill="none"></path>
              <text x="350" y="550" class="svg-title title">Flower</text>
            </svg>
          </div>
          <InformationBlocksTheInformationBlockText :color-lines="'#215EE6'" :text="'home.information-block.associations.text'" :title="'home.information-block.associations.title'"/>
          <img id="lines-information" src="/lines.svg" alt="">
        </div>
      </InformationBlocksTheInformationBlockTemplate>
      <SearchBlockTheSearchDictionary/>

    </div>
    <TheFooter/>
  </div>
</template>

<script setup lang="ts">

const cardExample: wordInterface = {
  wid: 1,
  original_word: 'Dictionary',
  translate_word: 'Словарь',
  transcription: '\'dɪkʃ(ə)n(ə)rɪ',
  comment: 'Это слово обозначает, где хранятся изученные слова',
  example: 'abridged dictionary, desk dictionary',
  part_of_speech: 'сущ.',
  sound: {
    sid: 1,
    abbr: 'амер.',
    sound_file: 'sound_file.wam'
  }
}
</script>

<style lang="scss">
.home {
  .search-dictionary {
    margin-top: 11rem;
  }
}
  .hero {
    margin-bottom: 25rem;
  }
  #circle-information {
    position: absolute;
    bottom: -35rem;
    left: -25rem;
    pointer-events: none;
  }
  #heart-information {
    position: absolute;
    right:-10rem;
    bottom: -16rem;
    pointer-events: none;
  }
  .card {
    position: absolute;
    right: 0;
    top: -5rem;
    transform: rotate(-20deg);
  }
  #vivid-information {
    margin-top: 8.5rem;
    .info-block {
      order: 2;
      text-align: right;
      &__title{
        margin-left: auto;
      }
    }
    #lines-information {
      position: absolute;
      right:-2rem;
      bottom: -9rem;
      pointer-events: none;
    }
  }
  .lines-information {
    flex: 1 1 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    &__image, &__word {
      position: absolute;
    }
    &__image{
      left: 0;
      top: 0;

    }
    svg {
      text {
        font-size: 6rem;
        fill: #ffffff;
      }
      path {
        stroke-dasharray: 2000;
        stroke-dashoffset: 2000;
        animation: draw 5s forwards;
      }
    }
  }

  @keyframes draw {
    100% {
      stroke-dashoffset: 0;
    }
  }

</style>
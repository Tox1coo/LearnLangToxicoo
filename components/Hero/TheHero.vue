<template>
  <div class="hero">
    <div class="hero__wrapper">
      <div class="hero__wrapper-item" v-for="(text, index) in texts" :key="text.accent + '-' + index">
        <UITheTitleAccent :svg-color="text.svg_color" :number-accent="text.number_accent" :text-accent="text.accent"/>

        <p class="hero__text">
          {{$t(text.usual, text.number_usual)}}
        </p>
      </div>
      <div class="hero_description">
        <p>{{$t('home.hero.description')}}</p>
      </div>
    </div>
    <img id="happy-human" src="/hero/happy.png" alt="happy Man">
    <img id="star" src="/3d/star_3d.png" alt="Star">
  </div>
</template>

<script setup lang="ts">
import TheTitleAccent from "~/components/UI/TheTitleAccent.vue";

const texts = [
  {
    accent: 'home.hero.create',
    usual: 'home.hero.create',
    number_accent:1,
    number_usual: 2,
    svg_color: '#F5050E'
  },
  {
    accent: 'home.hero.complete-text',
    usual: 'home.hero.complete-text',
    number_accent: 1,
    number_usual: 2,
    svg_color: '#215EE6'
  },
  {
    accent: 'home.hero.reach',
    usual: 'home.hero.reach',
    number_accent: 1,
    number_usual: 2,
    svg_color: '#8F21E6'
  },
];
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";

  .hero {
    margin-top: 9rem;
    font-family: 'Roboto', sans-serif;
    position: relative;
    &__wrapper {
      position: relative;
      z-index: 2;
      text-align: center;
      &-item {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    &__text {
      @include  adaptive-font(75, 40);
    }
    &_description {
      @include  adaptive-font(30, 15);
      max-width: 75rem;
      margin: 5rem auto 0;
      text-align: center;
    }

    img {
      position: absolute;

      &#happy-human {
        right: -5rem;
        bottom: -20rem;
        width: 30rem;
        z-index: 1;
      }
      &#star {
        left: 0;
        bottom: 0;
        z-index: 1;

      }
    }
  }
</style>
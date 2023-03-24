<template>
  <div class="navigation-block" :class="{'navigation-block--fixed': activeMenu}">
   <div class="navigation-block__wrapper nav">
     <h2 class="nav__title title">{{ $t('menu') }}</h2>
       <ul class="nav__list">
         <li class="nav__item" v-for="page in pages" :key="page.name">  <NuxtLink  :to="localePath({name:page.name})">{{$t(page.translate)}}</NuxtLink></li>
       </ul>
   </div>
    <div  class="lang" :class="{'lang--ru': language == 'ru','lang--en': language == 'en' }" >
      <span>RU</span>
      <div @click.prevent.stop="changeLanguage" class="lang__switcher ">
        <div class="lang__switcher-circle"></div>
      </div>
      <span>EN</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  activeMenu: {
    type: Boolean,
    required: true
  }
})
const {locale, setLocale} =  useI18n();
const localePath = useLocalePath()
let language = $ref(locale.value);
const pages = [
  {
    name: 'index',
    translate:'pages.index'
  },
  {
    name: 'cards',
    translate:'pages.cards'
  },
  {
    name: 'dictionary',
    translate:'pages.dictionary'
  },
]
function changeLanguage () {
  if(language == 'ru') {
    language = 'en';
    setLocale(language)
  } else {
    language = 'ru';
    setLocale(language)

  }
}

</script>

<style lang="scss" scoped>

%block_decoration {
  content: '';
  display: block;
  position: absolute;
  bottom: 0;
  width: 0;
  height: 4px;
  border-radius: 5px;
  background-color: #fff;
  transition: .2s ease-in width;
}
  .navigation-block {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: $menu-background;
    top: 0;
    left: 0;
    padding: 11rem 14rem 0 14rem;
    &--fixed {
      position: fixed;
    }
  }

  .nav {
    &__title {
      color: #ffffff;
      font-size: 8rem;
    }
    &__list {
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
    }
    &__item {
      font-family: 'Montserrat', sans-serif;
      width: fit-content;
      &:not(&:first-child) {
        margin-top: 1rem;
      }
      a {
        color: #ffffff;
        font-size: 4rem;
        position: relative;
        padding-bottom: 5px;
        &::before {
         @extend %block_decoration;
          left: 0;
        }
        &::after {
          @extend %block_decoration;
          right: 0;
        }
        &:hover {
          &::before, &::after {
            width: 51%;
          }
        }
      }
    }
  }

  @mixin lang-switcher($border-color, $switcher-background, $transform-position) {
    .lang {
      &__switcher{
        border: 1px solid $border-color;
        background-color: rgba($switcher-background, 0.2);

        &-circle {
          background-color: $switcher-background;
          transform: translateX($transform-position);
        }
      }
    }
  }

  .lang {
    margin-top: 4rem;
    display: flex;
    align-items: center;
    gap: 10px;
    &--ru {
      @include lang-switcher(rosybrown, #FD9C0C, 0,);
    }
    &--en {
      @include lang-switcher(greenyellow, greenyellow, 6.85rem,);
    }
    &__switcher {
      width: 10rem;
      height: 3rem;
      border-radius: 20px;
      cursor: pointer;
      transition: .3s ease-in-out all;
      &-circle {
        height: 3rem;
        width: 3rem;
        border-radius: 50%;
        transition: .3s ease-out all;
      }
    }
    &--ru {
      span:first-child {
        color: #FD9C0C;
      }
      span:last-child {
        color: #fff;
      }
    }
    &--en {
      span:last-child {
        color: greenyellow;
      }
      span:first-child {
        color: #fff;
      }
    }

  }


</style>
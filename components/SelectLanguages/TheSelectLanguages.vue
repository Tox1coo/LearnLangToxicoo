<template>
    <div class="select-language">
      <SelectLanguagesTheSelectLanguageItem :language-abbreviation="originalLanguage"  @visibleLanguageList="visibleDropDown"/>
      <button @click="reverseLang" class="select-language__reverse">
        <svg height="40" viewBox="0 0 48 48" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M13.98 22l-7.98 8 7.98 8v-6h14.02v-4h-14.02v-6zm28.02-4l-7.98-8v6h-14.02v4h14.02v6l7.98-8z" /></svg>
      </button>
      <SelectLanguagesTheSelectLanguageItem :language-abbreviation="translateLanguage" @visibleLanguageList="visibleDropDown"/>
      <div v-click-outside="closeDrop" v-show="isVisibleDropDown" class="select-language__drop-languages"
           :class="{'select-language__drop-languages--original': takeVariantLang == originalLanguage,
                     'select-language__drop-languages--translate': takeVariantLang ==  translateLanguage}">
        <div v-for="(tableLanguage, index) in sliceLangList" :key="index"  class="select-language__drop-wrapper">
          <div v-for="language in tableLanguage" :key="language.lid" class="select-language__drop-item background-effect">
            <p>{{$t(`languages.${language.abbr}`)}}</p>
            <span>{{language.abbr}}</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts" setup>
import {Ref} from "vue";
interface visible {
  visible: boolean,
  variant: string
}
let originalLanguage:string = $ref('RU');
let translateLanguage:string = $ref('EN');
let isVisibleDropDown:boolean = $ref(false);
const langList:LanguageInterface[] = [
  {
    lid: 1,
    abbr: "RU",
    code:1044
  },
  {
    lid: 2,
    abbr: "EN",
    code:1044
  },
  {
    lid: 3,
    abbr: "CH",
    code:1044
  },
  {
    lid: 4,
    abbr: "DE",
    code:1044
  },
  {
    lid: 5,
    abbr: "LA",
    code:1044
  },
  {
    lid: 6,
    abbr: "ES",
    code:1044
  },
  {
    lid: 7,
    abbr: "EL",
    code:1044
  },
  {
    lid: 8,
    abbr: "KK",
    code:1044
  },
  {
    lid: 9,
    abbr: "UK",
    code:1044
  },
  {
    lid:10,
    abbr: "FR",
    code:1044
  },
  {
    lid:11,
    abbr: "IT",
    code:1044
  }
]
let takeVariantLang:string = $ref('')
const sliceLangList = computed<LanguageInterface[][]>(() => {
  let count:number = Math.ceil(langList.length / 2);
  const firstTable:LanguageInterface[] = langList.slice(0, count);
  const secondTable:LanguageInterface[] = langList.slice(count, langList.length);
  const sliceLangList:LanguageInterface[][]  = [];
  sliceLangList.push(firstTable);
  sliceLangList.push(secondTable);
  return sliceLangList;
})
const visibleDropDown = (visibleInfo: visible) => {
  isVisibleDropDown = visibleInfo.visible;
  takeVariantLang = visibleInfo.variant;
}
const closeDrop = () => isVisibleDropDown = false

const reverseLang = () =>  originalLanguage = [translateLanguage, translateLanguage = originalLanguage][0];

</script>

<style lang="scss" scoped>
  .select-language {
    display: flex;
    position: relative;
    align-items: center;
    svg {
      path {
        opacity: 0.5;
        transition: opacity 0.1s ease;
      }

      &:hover {
        path {
          opacity:1;
        }
      }
    }
      &__drop {
        &-languages {
          border: 1px solid $primary-accent;
          position: absolute;
          z-index: 3;
          display: flex;
          top: 100%;
          width: 450px;
          flex-wrap: wrap;
          background-color: $primary-background;
          border-radius: 0.8rem;
          padding: 1rem 0;
          &--translate {
            right: 10px;
          }
          &--original {
            right: 80px;
          }
        }

        &-wrapper {
          flex: 1 0 50%;
        }
        &-item {
          p {
            flex: 1 0 70%

          }
          span {
            flex: 0 1 20%;

          }

        }

      }
  }

</style>
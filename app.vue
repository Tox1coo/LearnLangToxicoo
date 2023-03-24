<template>
<!--    <NuxtWelcome />-->
    <TheNavigation :active-menu="mainIsActive"/>
  <div @click="mainIsActive = false" :class="{'burger-close--active': mainIsActive}" class="burger-close">
   <div class="burger-close__wrapper">
     <span></span>
     <span></span>
   </div>
  </div>
  <main :class="{'main--active': mainIsActive}" class="main">
      <TheHeader v-model:show-modal-user="showModal" v-model:main-is-active="mainIsActive"></TheHeader>
    <NuxtPage />

  </main>

  <UITheModal v-model:show="showModal">
    <template v-if="typeFormOpen == 'login'">
      dadsadada
    </template>
    <template v-else-if="typeFormOpen == 'register'">
      афвыффвыфвыф
    </template>
  </UITheModal>
</template>
<!--TODO: сделать регистрацию-->

<script setup lang="ts">
import {Ref} from "vue";

let mainIsActive:Ref<boolean> = ref(false);
let showModal:Ref<boolean> = ref(false);

let typeFormOpen: Ref<string> = ref('login');
</script>

<style lang="scss">

</style>

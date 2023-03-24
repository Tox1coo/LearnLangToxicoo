<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <template v-if="!user">
          <UsersTheUserFront @eventUser="$emit('update:showModalUser', true)">
            <div class="user-front__wrapper">
              <span>{{$t('user.login')}} / {{$t('user.register', 1)}}</span>
              <img src="/account.png" alt="account">
            </div>
          </UsersTheUserFront>
        </template>
        <template v-else>
          <UsersTheUserFront @eventUser="settingUser"><span>Пользователь</span></UsersTheUserFront>
        </template>
        <NuxtLink :to="localePath({name:'index'})"><img class="logo" src="/learn_tox_logo.png"/></NuxtLink>

        <div @click="$emit('update:mainIsActive', true)"  class="burger">
            <span></span>
            <span></span>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
let user = ref(false);
const localePath = useLocalePath()

defineProps({
    mainIsActive: {
      type: Boolean,
      required:true
    },
    showModalUser: {
      type: Boolean,
      required:true
    }
})

function settingUser() {
  console.log('settings');
}

</script>

<style lang="scss" scoped>
  .header {
    padding-top: 1rem;
    &__inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 6rem;
    }
  }
</style>
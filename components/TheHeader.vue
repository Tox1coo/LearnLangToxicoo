<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <template v-if="!userStore.isAuthorized">
          <UsersTheUserFront @eventUser="$emit('update:showModalUser', true)">
            <div class="user-front__wrapper">
              <span>{{$t('user.login')}} / {{$t('user.register', 1)}}</span>
              <img src="/account.png" alt="account">
            </div>
          </UsersTheUserFront>
        </template>
        <template v-else>
          <div  class="header__user">
            <UsersTheUserFront  @eventUser="visibleSetting = true">
              <div :class="{'active-setting':visibleSetting}" class="header__user-info">
                <UsersTheUserAvatar/>
                <span>{{user?.user_metadata?.name}}</span>
              </div>
              <div v-click-outside="closeSetting" v-show="visibleSetting" class="user-setting">
                <ul class="user-setting__list">
                  <li @click="visibleSetting = false" class="user-setting__item"><NuxtLink :to="localePath({name:'profile'})">{{$t('user.my_profile')}}</NuxtLink> </li>
                  <li @click="userStore.logOutUser()" class="logout user-setting__item">{{$t('user.log_out')}}</li>
                </ul>
              </div>
            </UsersTheUserFront>

          </div>
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
import {useUserStore} from "~/store/User/user";
import {useDataBase} from "~/store/DataBase/db";

const userStore = useUserStore();
const localePath = useLocalePath()
const user = useSupabaseUser();
let visibleSetting = $ref<boolean>(false)
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
const logOutUser = () => {
  userStore.isAuthorized = false;
  userStore.logOutUser();
}
const closeSetting = () => visibleSetting = false;
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
  &__user {
    position: relative;
    &-info{
      display: flex;
      align-items: center;
      &.active-setting {
        span::after {
          transform: translateY(-25%) rotate(135deg);
        }
      }
      span {
        margin-left: 1.5rem;
        font-weight: 700;
        position: relative;
        &::after {
          content: '';
          display: block;
          position: absolute;
          right: -1.8rem;
          top: 50%;
          width: 1rem;
          height: 1rem;
          transform: translateY(-60%) rotate(-45deg);
          border-left: 1px solid #000;
          border-bottom: 1px solid #000;
          transition: transform .2s ease-in-out;
        }
      }
    }
  }
}

.user-setting {
  position: absolute;
  top:110%;
  min-width: 200px;
  border: 1px solid #c9c9c9;
  border-radius: 0.5rem;
  background-color: $primary-background;
  &__list {
    li {
      padding-top: 1rem;
      cursor: pointer;
      font-size: 1.4rem;
      padding: 1rem;
      transition: color .08s ease, background-color .08s ease;

      &:not(:last-child) {
        border-bottom: 1px solid #c9c9c9;
      }
      &.logout {
      }
      a {
        color:#333333;
        font-weight: 500;
        transition: color .08s ease;
      }
      color:#333333;
      font-weight: 500;
      &:hover {
        background-color: rgba(#34334A, 0.5);
        color: #fff;
        a {
          color: #fff;
        }
      }
    }
  }
}
</style>
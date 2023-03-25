<template>
  <form @submit.prevent="typeForm === 'login' ? signIn : signUp" class="form">
    <UITheTitleAccent class="form__title" :svg-color="'#10B582'" :text-accent="returnTitle"/>
    <template v-if="typeForm === 'auth'">
      <div class="form__inner">
        <UITheInputBlock v-for="inputBlock in inputBlocksAuth" :key="inputBlock.inputItem" :input-item="vAuth$[inputBlock.inputItem]"
                         :placeholder-input="inputBlock.placeholderInput"
                         v-model:value="authUser[inputBlock.inputItem]"
                         :type="inputBlock.type"/>
      </div>
    </template>
    <template v-else-if="typeForm === 'login'">
      <div class="form__inner">
        <UITheInputBlock v-for="inputBlock in inputBlocksLogin" :key="inputBlock.inputItem" :input-item="vLogin$[inputBlock.inputItem]"
                         :placeholder-input="inputBlock.placeholderInput"
                         v-model:value="loginUser[inputBlock.inputItem]"
                         :type="inputBlock.type"/>
      </div>
    </template>
    <UITheButton class="btn--search" type="submit">{{$t(returnTitle)}}</UITheButton>
  </form>
</template>

<script setup lang="ts">
import {Ref} from "vue";
import {required, email, minLength, sameAs, helpers, not, numeric, integer, alpha, and} from '@vuelidate/validators';
import useVuelidate from "@vuelidate/core";
import {react} from "@babel/types";

const validateRussianAlphabet = (value:string):boolean => {
  const result:RegExpMatchArray | null = value.match(/\d/g);
  if(result.length > 0) {
    return false;
  }
  return false;
}

let typeForm = $ref('auth');

const authUser:AuthUser = $ref({
  name: '',
  email: '',
  password: '',
  repeat_password: ''
})

const rulesAuth = computed(() => {
   return {
     name: {
       required: helpers.withMessage('form.errors.required', required),
       alpha: helpers.withMessage('form.errors.alpha', helpers.regex(/^[а-яА-Яa-zA-Z]*$/)),
     },
     email: {
       required: helpers.withMessage('form.errors.required', required),
       email: helpers.withMessage('form.errors.format', email),
     },
     password: {
       required: helpers.withMessage('form.errors.required', required),
       minLength: helpers.withMessage('form.errors.min_length', minLength(8)),
     },
     repeat_password: {
       required: helpers.withMessage('form.errors.required', required),
       sameAs: helpers.withMessage('form.errors.same_as', sameAs(authUser.password))
     },
  }
})

const vAuth$ = useVuelidate(rulesAuth, authUser);

const inputBlocksAuth = [
  {
    placeholderInput: 'form.name',
    inputItem: 'name',
    type: 'text'
  },
  {
    placeholderInput: 'form.email',
    inputItem: 'email',
    type: 'text'
  },
  {
    placeholderInput: 'form.password',
    inputItem: 'password',
    type: 'password'
  },
  {
    placeholderInput: 'form.repeat_password',
    inputItem: 'repeat_password',
    type: 'password'
  }
];

const loginUser:LoginUser = $ref({
  email: '',
  password: '',
});
const rulesLogin = computed(() => {
  return {
    email: {
      required: helpers.withMessage('form.errors.required', required),
      email: helpers.withMessage('form.errors.format', email),
    },
    password: {
      required: helpers.withMessage('form.errors.required', required),
      minLength: helpers.withMessage('form.errors.min_length', minLength(8)),
    },
  }
})
const vLogin$ = useVuelidate(rulesLogin, loginUser);

const inputBlocksLogin = [
  {
    placeholderInput: 'form.email',
    inputItem: 'email',
    type: 'text'
  },
  {
    placeholderInput: 'form.password',
    inputItem: 'password',
    type: 'password'
  },
];

const returnTitle = computed(():string => {
  return typeForm === 'login' ? 'title.form.login' : 'title.form.auth'
})

</script>

<style lang="scss" scoped>

</style>
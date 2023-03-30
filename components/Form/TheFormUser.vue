<template>
  <form @submit.prevent="typeForm === 'login' ? signIn() : signUp()" class="form">
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
    <pre v-if="isError" class="not-correct">{{$t(`errors-message.${user.errorMessage}`)}}</pre>
    <pre v-if="isCorrect" class="is-correct">  {{$t(`${user.correctMessage}`)}}</pre>

    <UITheButton :disabled="isLoading" class="btn--search" type="submit"><span v-if="!isLoading">
      {{$t(returnTitle)}}</span>
      <div class="loading-form" v-else></div>
    </UITheButton>
    <p>{{typeForm === 'login' ? $t('form.go_to_auth') : $t('form.go_to_login')}} <a @click.prevent="changeForm" href="#">{{typeForm === 'login' ? $t('title.form.auth') : $t('title.form.login')}}</a></p>
  </form>
</template>

<script setup lang="ts">
import {Ref} from "vue";
import {required, email, minLength, sameAs, helpers, not, numeric, integer, alpha, and} from '@vuelidate/validators';
import useVuelidate from "@vuelidate/core";
import {useUserStore} from "~/store/User/user";
defineProps({
  showModal: {
    type: Boolean,
    required:true,
  }
})
const emit = defineEmits(['update:show-modal'])
const user = useUserStore();
const validateRussianAlphabet = (value:string):boolean => {
  const result:RegExpMatchArray | null = value.match(/\d/g);
  if(result.length > 0) {
    return false;
  }
  return false;
}
let isLoading = $ref<boolean>(false);
let typeForm = $ref('login');

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
const userSupabase = useSupabaseUser();
console.log(userSupabase.value)
const loginUser:LoginUser = $ref({
  email: '',
  password: '',
});
let isError = $ref<boolean>(false);
let isCorrect = $ref<boolean>(false);

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

const changeForm = ():void => {
  typeForm === 'login' ? typeForm = 'auth' : typeForm = 'login'
  isError = false
}

const signIn = async () => {
  isLoading = true;
  const result = await vLogin$.value.$validate()
  if(result) {
    isError = await user.loginUser(loginUser)
    isLoading = false;
    if(!isError) {
      isCorrect = true;
      setTimeout(() => {
        emit('update:show-modal', false);
      }, 1000)
    }

  } else {
    isLoading = false;
  }
}

const signUp = async () => {
  isLoading = true;
  const result = await vAuth$.value.$validate()
  if(result) {
    isError = await user.authUser(authUser)
    isLoading = false;
    if(!isError) {
      isCorrect = true;
      setTimeout(() => {
        emit('update:show-modal', false);
      }, 3000)
    }
  } else {
    isLoading = false;
  }
}

</script>

<style lang="scss" scoped>
p {
  margin-top: 1rem ;

}
pre {
  margin-bottom: 1rem;
}
.loading-form {
  background-color: #fff;
  height: 30px;
  width: 30px;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  animation: loading 0.6s ease-in-out infinite;
  animation-fill-mode: forwards;
  animation-direction: alternate;
}

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
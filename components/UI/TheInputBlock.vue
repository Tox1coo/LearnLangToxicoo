<template>
  <div class="input-block">
    <label :class="{'required': inputItem?.required}" for="repeat_password">{{$t(placeholderInput)}}</label>
    <UITheInputText id="input" :is-invalid="inputItem.$invalid" :is-error="inputItem.$error" name="repeat_password" :type-input="`${typeInput == 'text' ? 'text' : 'password'}`"  :placeholder-input="$t(placeholderInput)" v-model="valueInput" @change="inputItem.$touch">
      <Icon size="30" v-if="!inputItem.$invalid || inputItem.$error" class="input-icon" :class="{'is-correct': !inputItem.$invalid, 'not-correct': inputItem.$error}" :name="`heroicons-solid:${!inputItem.$error ? 'check-circle' : 'exclamation'}`"/>
      <Icon class="input-icon__password" @click="showPass" v-if="type == 'password'" size="30" :name="`heroicons:${typeInput === 'password' ? 'eye-20-solid' : 'eye-slash-20-solid'}`"/>
    </UITheInputText>

    <span :class="{'not-correct': inputItem.$error}">{{$t(inputItem.$errors[0]?.$message || '')}}  {{inputItem.$errors[0]?.$params.min}}</span>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  inputItem: {
    type: Object,
    required: true
  },
  value: {
    type: String,
    required:true
  },
  placeholderInput: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text'
  }
});
let typeInput = $ref<string>(props.type);
let valueInput:string = $ref('');
const emit =  defineEmits( ['update:type-input', 'update:value']);

watch(() => valueInput, () => {
  emit('update:value', valueInput)
})

const showPass = () => {
  typeInput === 'password' ? typeInput = 'text' : typeInput = 'password'
}

</script>

<style lang="scss">
  .input-block {
    &:hover {
      .input-icon__password {
        visibility: visible;
        opacity: 1;
      }
      .input-icon {
        visibility: hidden;
        opacity: 0;
      }
    }
  }

  .input {

  }

  .input-icon {
    transition: visibility 0.05s ease-in, opacity 0.05s ease-in;

    &__password {
      visibility: hidden;
      opacity: 0;
      transition: visibility 0.1s ease-in, opacity 0.1s ease-in;
      cursor: pointer;
    }
  }
</style>
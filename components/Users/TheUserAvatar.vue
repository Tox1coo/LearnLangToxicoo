<template>
  <div :style="{width: size + 'px', height: size + 'px'}"   class="avatar">
    <img :src="useUserStore().getAvatar" alt="avatar">
  </div>
</template>

<script lang="ts" setup>
import {useUserStore} from "~/store/User/user";

defineProps({
  size: {
    type: Number,
    default: 50
  }
})


</script>

<style lang="scss" scoped>
.avatar {
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
  }
}
</style>
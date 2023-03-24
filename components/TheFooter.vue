<template>
  <div class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__top">
          <FooterTheFooterStart />
        </div>
       <div class="footer__bottom">
         <UITheCopyright/>
         <div class="footer__bottom-links">
           <UITheLinks v-for="link in links" :key="link.text" :links-url="link.url">{{$t(`${link.text}`)}}</UITheLinks>

         </div>
       </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

interface Links {
  text:string,
  url: string,
  color?: string
}
const links:Links[] = [
  {
    text: "vk",
    url: 'https://vk.com/rusbatka1'
  },
  {
    text: "telegram",
    url: 'https://t.me/Toxicoo23'
  }
]
</script>

<style lang="scss" scoped>
  .footer {
    margin-top: 15rem;
    background-color: #000;

    .footer__top {
      width: 100%;
      padding: 8rem 0 10rem;
      border-bottom: 1px solid #ccc;
    }
    &__bottom {
      display: flex;
      align-items: stretch;
      justify-content: space-between;
      padding: 1.5rem 0;
    }
  }


</style>
<template>
  <div class="footer__start">
    <div  class="footer__start-wrapper">
      <div class="footer__start-title title">{{$t('footer.start')}}</div>
      <div class="fill">

      </div>
<!--      <svg x="0px" y="0px" width="900px" height="900px" viewBox="0 0 300 300" enable-background="new 0 0 300 300" xml:space="preserve">
        <linearGradient id="Gradient1" x1="0" x2="0" y1="0" y2="1">
        <stop offset="5%" stop-color="#040341"/>
          <stop offset="33%" stop-color="#191196"/>
          <stop offset="50%" stop-color="#04046a" />
          <stop offset="100%" stop-color="#00d4ff"/>
        </linearGradient>
        <path fill="url(#Gradient1)" id="waveShape" d="M300,300V2.5c0,0-0.6-0.1-1.1-0.1c0,0-25.5-2.3-40.5-2.4c-15,0-40.6,2.4-40.6,2.4
        c-12.3,1.1-30.3,1.8-31.9,1.9c-2-0.1-19.7-0.8-32-1.9c0,0-25.8.3-40.8-2.4c-15,0-40.8,2.4-40.8,2.4c-12.3,1.1-30.4,1.8-32,1.9
        c-2-0.1-20-0.8-32.2-1.9c0,0-3.1-0.3-8.1-0.7V300H300z"/>
</svg>-->
    </div>
  </div>
</template>


<style lang="scss" scoped>
  .footer__start{
    margin: 0 auto;

    cursor: pointer;
    width: 600px;
    height: 600px;
    border: 2px solid #3f00fd;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: inset 0 0 10px 0 rgba(#3f00fd,.8), 0 0 100px 0 rgba(#3f00fd,0.8);
    &-title {
      position: absolute;
      font-size: 10rem;
      color: transparent;
      -webkit-text-stroke:2px #fff;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      z-index: 4;
    }
    &-wrapper {
      position: relative;
      height: 100%;
      svg {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }
      #waveShape {
        transform: translate(0, 900px);
        transition: transform 1.5s cubic-bezier(.53,.42,.41,.45);
      }
      &:hover {
        #waveShape {
          transform: translate(0, -5px);
        }
      }
      &:hover {
        .fill {
          transform: translateY(-200px);
        }
      }
    }
  }
  .fill {
    transform: translateY(500px);
    width: 100%;
    height: 100%;
    transition: transform 4s cubic-bezier(.2,.9,.75,.45);
    &::before {
      content: '';
      display: block;
      position: absolute;
      width: 600px;
      height: 1000px;
      left: 0;
      top: 0;
      background-image: url("/wave-2.svg");
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      animation-name: waveAction;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;
      animation-duration: 2s;
      animation-direction: alternate;
    }
  }
  @keyframes waveAction {
    0% {
      background-position-x: -1000px;
    }
    100% {
      background-position-x: 0;
    }
  }


</style>
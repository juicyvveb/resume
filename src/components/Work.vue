<template>
  <div class="container" id="work">
    <div class="work">
      <div class="work-title">
        <h3>Latest Products</h3>
      </div>
      <p class="work-description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut rerum libero minus nemo quidem, aperiam nisi.
      </p>
      <TransitionGroup tag="ul" name="fade" class="work-examples">
        <li class="work-examples--item" 
          v-for="(item, i) in examples" 
          :key="i"
          v-show="i+1 <= show">
          <Item :info="item"/>
          </li>
      </TransitionGroup>
      <button class="work-button work-button__show" v-if="show < examples.length" @click="show++">ещё</button>
      <button class="work-button work-button__hidden" v-if="show >= 2" @click="show--" >скрыть</button>
    </div>
    
  </div>
</template>

<script>
import Item from './WorkItem.vue'

export default {
  data(){
    return{
      show: 2,
      examples: [
        {
          title: 'Clothes-Shop',
          img: 'shop',
          stack: 'Vue.js GSAP vuex Firebase.auth RealtimeDatabse VueRouter Sass',
          text: 'Some txt',
          link: 'https://juicyvveb.github.io/clothes-shop/#/'
        },
        {
          title: 'Weather-app',
          img: 'weather',
          stack: 'Vue.js SASS LocalStorage WeatherApi',
          text: 'Some txt',
          link: 'https://luisfendi.github.io/Weather-Forecast/#'
        },
         {
          title: 'German numbers',
          img: 'german',
          stack: 'Vue.js GSAP JavaScript',
          text: 'Some txt',
          link: 'https://juicyvveb.github.io/germanNumbers/'
        },
      ]
    }
  },
  components: {
    Item
  },
  methods: {
    scale(){
      window.onresize = (e) => {
        if(document.body.clientWidth > 720){
          this.show = this.examples.length
        }
        else{
          this.show = 2
        }
      }
    }
  },
  created(){
    this.scale()
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';

.container {
  padding: 25px $paddingMob;
  .work {
    &-title{
      h3{
        @include text(30px, 700, $gray);
        visibility: visible !important;
      }
    }
    &-description {
      @include text(15px, 400, #a6a7aa);
      margin-bottom: 7%;
    }
    &-button{
      min-width: 100px;
      border: none;padding: 2% 6%;
      border-radius: 10px;
      @include text(14px, 500, white);
      margin-right: 5%;
    }
    &-button__show{
      background: rgb(48, 184, 48);
    }
    &-button__hidden{
      background: $blue;
    }
  }
}


@media (min-width: $laptop) {
  .container {
  padding: 25px $paddingLap;
  .work {
    &-title{
      h3{
        @include text(30px, 700, $gray);
        visibility: visible !important;
      }
    }
    &-description {
      @include text(15px, 400, #a6a7aa);
      margin-bottom: 7%;
    }

    .work-examples{
      display: flex;
      align-items: stretch;
    }

    &-button{
      min-width: 100px;
      border: none;padding: 2% 6%;
      border-radius: 10px;
      @include text(14px, 500, white);
      margin-right: 5%;
    }
    &-button__show{
      background: rgb(48, 184, 48);
    }
    &-button__hidden{
      background: $blue;
    }
  }
}
}


// .fade-move,
.fade-enter-active,
.fade-leave-active{
  transition: all 0.2s ease;
  position: absolute;
}

.fade-enter-from,
.fade-leave-to{
  opacity: 0;
  transform: scale(.3);
}
</style>
<template>
  <div class="container">
    <div class="header">
      <div class="header-logo">
        <h3>LOGO {{active}}</h3>
      </div>
      <div class="header-burger">
        <input type="checkbox" v-model="burger" id="burger">
        <label for="burger" :class="{'header-burger--label': 1, open: burger}">
          <span></span>
        </label>
      </div>
      <div :class="{'header-list': true, open: !burger}">
        <ul>
          <li v-for="(item, i) in nav" :key="i" :class="{active: active == item}">
            <a :href="`#${item}`">{{item}}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {scroll} from '../assets/js/activeLink';


export default {
  data(){
    return{
      nav: ['home', 'about', 'experience', 'work', 'contact'],
      burger: false,
      active: ' '
    }
  },
  methods: {
    scrollListen(){
      window.addEventListener('scroll', () => {
        if(pageYOffset > 100){
          this.burger = 0;
        }
      })
    },
    activeBlock(){
      this.active = 'home'
      window.addEventListener('scroll', () => {
        this.active = scroll()
      })
    }
  },
  watch: {
    active(n){
      //remove class from unactive blocks
      Array.from(document.querySelectorAll('.container'))
        .forEach(el => el.classList.remove('active'));
      
      //add class to current block
      document.querySelector(`#${n}`).classList.add('active');
    }
  },
  created(){
    this.scrollListen();
    this.activeBlock()
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';
// mobile
  .container{
    background: rgb(230, 119, 119);
    width: 100%;
    top: 0;
    left: 0;
    position: fixed;
    padding: $paddingMob 0 $paddingMob 0;
    .header{
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      position: relative;
      align-items: center;
      padding: 0 $paddingMob 0 $paddingMob;
    &-list {
      width: 100%;
      padding: 0 $paddingMob 0 $paddingMob;
      position: absolute;
      top: 100%;
      left: 0;
      background: rgb(230, 119, 119);
      transition: all .5s ease;
      max-height: 50vh;
      overflow: hidden;
      ul {
        li {
          padding: 3%;
          position: relative;
          line-height: 1;
          text-transform: uppercase;
          &:before{
            content: '';
            position: absolute;
            width: 2%;
            height: 5%;
            left: 0;
            top: 47.5%;
            background: $blue;
          }
          a{
            color: black;
            text-decoration: none;
          }
        }
        li.active{
          a{
            color: white;
          }
        }
      }
    }
    &-list.open{
      max-height: 0px;
      min-height: 0px; 
    }
    &-burger{
      input{
        display: none;
      }
      &--label{
        width: 5vw;
        height: 5vw;
        @include flexCenter;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        span, &:before, &:after{
          content: '';
          width: 90%;
          height: 0.5vw;
          background: black;
          transition: all .3s ease-in-out;
        }
        &:before{
          width: 50%;
        }
        &:after{
          width: 100%;
        }
        span{
          width: 75%;
           transition-delay: 0s;
        }
      }
      &--label.open{
         span, &:before, &:after{
           width: 100%;
         }
         span{
          transition-delay: .15s;
         }
      }
    }
  }
}



// laptop
@media (min-width: $laptop){
    .container{
    padding: $paddingLap 0 $paddingLap 0;
    .header{
      padding: 0 $paddingLap 0 $paddingLap;
    &-list {
      padding: 0 $paddingLap 0 $paddingLap;
      max-height: 180px;
    }
    &-burger{
      &--label{
        width: 3vw;
        height: 3vw;        
        span, &:before, &:after{
          height: 0.4vw;
        }
      }
    }
  }
}
}
  


</style>
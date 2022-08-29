<template>
  <div class="block">
    <div class="item">
      <div class="item-img">
        <img :src="img" :alt="img">
      </div>
      <div class="item-text">
        <div class="item-title"><a :href="info.link"><h3>{{info.title}}</h3></a></div>
        <div class="item-stack">
          <ul class="item-stack--list">
            <li v-for="(elem,i) in stack" :key="i">#{{elem}}</li>
          </ul>
        </div>
        <div class="item-description">
          <p>{{info.text}}</p>
        </div>
        <div class="item-button">
          <button class="read-more"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['info'],
  data(){
    return {
      
    }
  },
  computed: {
    img(){
      return new URL(`../assets/img/${this.info.img}.jpg`, import.meta.url).href
    },
    stack(){
      return this.info.stack.split(' ')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';

.block {
  margin-bottom: 8%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 1px 0px 5px 2px $gray;
  .item {
    
    &-title{
      padding: 0 $paddingMob;
      a{
        color: $gray;
        text-decoration: none;
        h3 {
        @include text(20px, 700, $gray);
        }
      }
      margin-bottom: 2%;
    }
    &-stack{
      padding: 0 $paddingMob;
      margin-bottom: 2%;
      &--list{
        display: flex;
        flex-wrap: wrap;
        li {
          line-height: 1;
          margin-right: 5%;
          @include text(14px, 600, $gray);
        }
      }
    }
    &-description{
      padding: 0 $paddingMob;
    }
  }
}

@media (min-width: $laptop) {
  .block {
    margin-right: 5%;
    height: 100%;
    box-shadow: none;
    border: 1px solid $gray;
    .item {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      &-img{
        height: auto;
        img{
          height: auto;
        }
      }
      &-text{
        
      }
      &-title{
        a{
          h3 {
          }
        }
        margin-bottom: 2%;
      }
      &-stack{
        margin-bottom: 2%;
        &--list{
          display: flex;
          flex-wrap: wrap;
          li {
            line-height: 1;
            margin-right: 5%;
            @include text(14px, 600, $gray);
          }
        }
      }
      &-description{
        padding: 0 $paddingMob;
      }
    }
  }
}
</style>
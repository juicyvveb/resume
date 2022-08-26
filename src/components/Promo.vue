<template>
  <div class="container">
    <div class="promo">
      <div class="promo-text">
        <div class="promo-text--name">
          <h2>Alisa</h2>
          <h2>Portman</h2>
        </div>
        <div class="promo-text--profession">
          <h4>Web & UI/UX Designer</h4>
        </div>
        <div class="promo-text--social">
          <ul>
            <li v-for="(link,i) in social" :key="i">
              <!-- <a 
                :href="link.link" 
                :style="{backgroundImage: `url(../assets/img/${link.name}.png)`}"
              > -->
              <a>
                <img :src="'../assets/img/' + link.name + '.png'" :alt="link.name">
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="promo-img">
        <img src="../assets/img/avatar.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
// <img :src="require(`../assets/img/product_${i + 1}.jpg`)" class="slider-item--images---item">                


export default {
  data(){
    return {
      social: [
        {name: 'gh', link: ''},
        {name: 'in', link: ''},
        {name: 'inst', link: ''},
        {name: 'tg', link: ''},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';
  .container {
    padding: 14vh $paddingMob 0 $paddingMob;

    .promo{
      &-text{
        @include flexCenter;
        flex-direction: column;
        &--name {
          width: 100%;
          @include flexCenter;
          flex-direction: column;
          h2{
            text-transform: uppercase;
          }
        }
        &--profession{
          width: 100%;
          text-align: center;
          h4{
            color: $gray;
          }
        }
        &--social{
          width: 100%;
          text-align: center;
          ul{
            @include flexCenter;
            width: 100%;
            li{
              padding: 0 5% 0 5%;
            }
          }
        }
      }
    }
  }
</style>
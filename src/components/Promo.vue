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
              <a>
                <img :src="img(`${link.name}.png`)" :alt="link.name" :href="link.link">
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="promo-img">
        <img :src="img('avatar.png')" alt="">
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
      ],
    }
  },
  methods: {
    img(name){
      return  new URL(`../assets/img/${name}`, import.meta.url).href
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';
  .container {
    padding: 14vh $paddingMob 0 $paddingMob;

    .promo{
      @include flexCenter;
      flex-direction: column;
      &-text{
        @include flexCenter;
        flex-direction: column;
        &--name {
          margin-bottom: 5%;
          width: 100%;
          @include flexCenter;
          flex-direction: column;
          h2{
            text-transform: uppercase;
          }
        }
        &--profession{
          margin-bottom: 5%;
          width: 100%;
          text-align: center;
          h4{
            color: $gray;
          }
        }
        &--social{
          margin-bottom: 10%;
          width: 100%;
          text-align: center;
          ul{
            @include flexCenter;
            width: 100%;
            li{
              width: 10%;
              height: 10%;
              margin: 0 3%;
              a{
                height: 100%;
                display: block;
                img{
                  max-width: 100%;
                  max-height: 100%;
                }
              }
            }
          }
        }
      }
    }
  }



  //laptop
  @media (min-width: $laptop) {
    .container {
    padding: 14vh $paddingLap 0 $paddingLap ;

    .promo{
      flex-direction: row;
      align-items: center;
      &-text{
        transform: translateY(-40%);
        &--name {
          margin-bottom: 5%;
         
          h2{
          }
        }
        
      }
    }
  }

  }
  //desktop
  @media (min-width: $desktop) {
    .container {
    padding: 14vh $paddingDesk 0 $paddingDesk ;

    .promo{
      justify-content: space-between;
      &-text {
        align-items: flex-start;
      }
      &-text{
        transform: translateY(-20%);
        &--name {
          align-items: flex-start;
          h2{
            font-size: 60px;
            color: $gray;
          }
        }
        &--profession{
          text-align: left;
        }
        &--social{
          margin-bottom: 10%;
          width: 100%;
          text-align: left;
          ul{
            justify-content: flex-start;
            li{
              a{
                transition: all .3s ease-in-out;
                
                &:hover{
                  padding: 10%;
                }
              }
              &:first-child{
                margin-left:0;
              }
            }
          }
        }
      }
    }
  }

  }
</style>
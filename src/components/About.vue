<template>
  <div class="container">
    <div class="about">
      <div class="about-img">
        <img src="../assets/img/about.jpg" alt="">
      </div>
      <div class="about-text">
        <div class="about-text--me">
          <h3>About me</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam velit commodi natus similique laborum laboriosam, nisi repudiandae voluptate accusantium, tempora eos perspiciatis consequatur inventore pariatur, nobis explicabo iure. Consequatur reprehenderit debitis tenetur fugiat veniam! Aut sunt placeat 
            </p><p>voluptatem in et non? Neque nesciunt sequi blanditiis!</p>
        </div>
        <div class="about-text--skills">
          <h3>My Skills</h3>
          <ul>
            <li class="skill" v-for="(skill, i) in skills" :key="i">
              <h5 class="skill-name">{{skill.name}}</h5>
              <p class="skill-power">{{skill.power}}%</p>
              <div class="skill-rate">
                <span class="skill-rate--span"  :width="skill.power"></span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';

.container{
  padding: 10% 0;
  .about {
    &-text {
      @include flexCenter;
      flex-direction: column;
      padding: 0 $paddingMob 0 $paddingMob;

      &--me{
        margin-bottom: 5%;
        h3{
          @include text(35px, 700, $gray);
          margin-bottom: 5%;
        }
        p{
          margin-bottom: 3%;
        }
      }

      &--skills{
        width: 100%;
        text-align: left;
        h3{
          margin-bottom: 5%;
          @include text(35px, 700, $gray);
        }
        ul{
          width: 100%;
          display: flex;
          flex-direction: column;
          .skill{
            margin-bottom: 3%;
            @include flexCenter;
            justify-content: flex-start;
            flex-wrap: wrap;
            &-name, &-power{
              line-height: 1.4;
            }
            &-name{
              @include text(15px, 500, $gray)
            }
            &-power{
              margin-left: auto;
            }
            &-rate{
              width: 100%;
              height: 2vw;
              // border: 1px solid black;
              border-radius: 15px;
              overflow: hidden;
              background: $grayLight;
              span {
                width: 0;
                height: 100%;
                background: $blue;
                display: block;
              }
            }
          }
        }
      }
    }
  }
}

@media (min-width: $laptop){
  .container {
    padding: $paddingLap;
    .about{
      display: flex;
      &-img, &-text {
        width: 50%;
      }
      &-text {
        padding: 0 $paddingLap 0 $paddingLap;
        &--skills{
          ul{
            .skill{
              &-rate{
                height: 1vw;
              }
            }
          }
        }
      }
    }
  }
}

@media (min-width: $desktop){
  .container {
    padding: 0 $paddingDesk 0 $paddingDesk;
    .about{
      &-img, &-text {
      }
      &-text {
        padding: 0 3%;
        &--skills{
          ul{
            .skill{
              &-rate{
                height: 0.5vw;
              }
            }
          }
        }
      }
    }
  }
}


</style>


<script>
import skillPower from '../assets/js/skillPower';

export default {
  data(){
    return {
      skills: [
        {
          name: 'JavaScript',
          power: 85
        },
        {
          name: 'HTML&&CSS',
          power: 90
        },
        {
          name: 'Vue.js Option api',
          power: 85
        }
      ]
    }
  },
  mounted(){
    skillPower();
  }
}
</script>
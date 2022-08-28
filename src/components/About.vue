<template>
  <div class="container">
    <div class="about">
      <div class="about-img">
        <img src="../assets/img/about.jpg" alt="">
      </div>
      <div class="about-text">
        <div class="about-text--me">
          <h3>About me</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam velit commodi natus similique laborum laboriosam, nisi repudiandae voluptate accusantium, tempora eos perspiciatis consequatur inventore pariatur, nobis explicabo iure. Consequatur reprehenderit debitis tenetur fugiat veniam! Aut sunt placeat voluptatem in et non? Neque nesciunt sequi blanditiis!</p>
        </div>
        <div class="about-text--akills">
          <div class="skill skill-illustrator">
            <h5>ill</h5>
            <div class="rate"></div>
          </div>
          <div class="skill skill-photoshop">
            <h5>phtsp</h5>
            <div class="rate"></div>
          </div>
          <div class="skill skill-illustrator">
            <h5>ill</h5>
            <div class="rate"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';

.about {
  &-text {
    @include flexCenter;
  }
}
</style>
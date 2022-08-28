

<template>
  <header>
    <Header/>
  </header>
    <h3>{{activeBlock}}</h3>
  <main>
    <Promo id="home"/>
    <About id="about"/>
    <Promo id="experience"/>
    <Promo id="work"/>
    <Promo id="contact"/>
  </main>
</template>

<script>
import Header from './components/Header.vue';
import Promo from './components/Promo.vue';
import About from './components/About.vue';

export default {
  data(){
    return {
      activeBlock: '',
    }
  },
  components:{
    Header,
    Promo,
    About
  },
}
</script>

<style scoped>


</style>

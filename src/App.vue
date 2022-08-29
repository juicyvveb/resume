

<template>
  <header>
    <Header/>
  </header>
    <h3>{{activeBlock}}</h3>
  <main>
    <Promo id="home"/>
    <About id="about"/>
    <Work id="work"/>
    <Promo id="contact"/>
  </main>
</template>

<script>
import Header from './components/Header.vue';
import Promo from './components/Promo.vue';
import About from './components/About.vue';
import Work from './components/Work.vue';

export default {
  data(){
    return {
      activeBlock: '',
    }
  },
  components:{
    Header,
    Promo,
    About,
    Work
  },
}
</script>

<style scoped>


</style>

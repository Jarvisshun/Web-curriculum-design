<template>
  <div id="app">
    <VueHeader/>
    <router-view></router-view> 
    <VueFooter/>
  </div>
</template>

<script>
import VueHeader from './components/VueHeader.vue'
import VueFooter from './components/VueFooter.vue'


export default {
  components: {
    VueHeader,
    VueFooter,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
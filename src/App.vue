<template>
  <div id="app">
    <!-- <router-view /> -->
    <home-page-view></home-page-view>
  </div>
</template>

<script>
import HomePageView from './views/HomePageView.vue'
export default{
  components: { HomePageView },

}
</script>
<style>
  #app {
    margin-top: 0px;
  }

  body {
    margin: 0;
    padding: 0;
    border: 0
  }
</style>
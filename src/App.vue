<template>
  <div id="app">
    <!--img src="./assets/logo.png"-->
    <bcs-header></bcs-header>
    <div id="wrapper">
      <router-view/>
    </div>
  </div>
</template>

<script>
import bcsHeader from './components/header/header'

export default {
  name: 'App',
  data() {
    return {}
  },
  components: {
    bcsHeader
  },
}
</script>

<style>
@import './style/common.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  background: hsl(0, 0%, 98%);
}
#wrapper {
    width: 950px;
    margin: 0 auto;
}
</style>

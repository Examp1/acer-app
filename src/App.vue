<template>
  <div id="app">
    <!-- <Login v-if="!isAutorisated"></Login>
    <Home v-else></Home> -->
    <router-view></router-view>
  </div>
</template>


<script>
// import Login from './views/Login'
// import Home from './views/Home'
export default {
  components: {
    // Home,
    // Login
  },
  data() {
    return {
      isAutorisated: true
    }
  },
}
</script>

<style lang="sass">
  @font-face 
    font-family: Acer-Rg
    src: url('/assets/fonts/AcerFoco_Rg.ttf')
  #app 
    font-family: Avenir, Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50
    display: flex
    justify-content: center
    width: 100%
  #nav
    padding: 30px
    a 
      font-weight: bold
      color: #2c3e50
      &.router-link-exact-active 
        color: #42b983
  body
    width: 100vw
    margin: 0
    padding: 0
    overflow-x: hidden
    min-height: 100vh
    color: #fff
    background: rgb(101,220,90)
    background: linear-gradient(145deg, rgba(101,220,90,1) 0%, rgba(1,62,90,1) 30%, rgba(15,30,33,1) 50%, rgba(1,62,90,1) 70%, rgba(101,220,90,1) 100%)
    position: relative
    z-index: 1
    &::before
      content: ''
      z-index: -1
      background-image: url(./assets/img/bg1.png) 
      width: 100%
      height: 100%
      position: absolute
      top: 0
      left: 0
</style>

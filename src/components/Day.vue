<template>
  <div class="day">
      <iframe class="video" width="1346" height="756" :src="videoSrc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$router.currentRoute.params['id']
    }
  },
  props: {
    videoSrc: {
      type: String,
      default: 'https://www.youtube.com/embed/aJVz57aFHxg'
    },
  },
}
</script>

<style lang="sass">
  .day
    display: flex
    justify-content: center
    align-items: center
    width: 100%
    height: 100%
  .video 
    margin-top: 70px
    margin-bottom: 70px
    position: relative
    max-width: 1346px
    max-height: 756px
  .day
    &::before
      position: absolute
      content: ''
      top: 50%
      transform: translateY(-50%)
      left: 0px
      width: 100%
      height: 72%
      background: url(../assets/img/videoBg.png) center/contain no-repeat
</style>
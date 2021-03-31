<template>
  <div class="day">
      <iframe class="video" width="1346" height="756" src="https://www.youtube.com/embed/aJVz57aFHxg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass">
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
      background: url(../../assets/img/videoBg.png) center/contain no-repeat
</style>
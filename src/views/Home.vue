<template>
  <div class="home">
    <Header></Header>
      <!-- <Day-1 v-if="day == 1"></Day-1>
      <Day-2 v-else></Day-2> -->
      <router-view :videoSrc="videoSrc"></router-view>
    <Footer @dayNumber="dayNumber"></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
// import Day1 from '@/components/day/Day1.vue'
// import Day2 from '@/components/day/Day2.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    // Day1,
    // Day2
  },
  data() {
    return {
      day: 1,
      videoSrc: undefined,
      days: [
        {
          src: 'https://www.youtube.com/embed/aJVz57aFHxg',
        },
        {
          src: 'https://www.youtube.com/embed/HPKHQOeV-Rw'
        }
      ]
    }
  },
  methods: {
    dayNumber(number) {
      this.day = number;
      this.videoSrc = this.days[number-1].src
      console.log(this.videoSrc);
    }
  },
}
</script>
<style lang="sass" scoped>
  .home
    width: 100%
    display: flex
    flex-direction: column
    justify-content: space-between
    min-height: 100vh 
</style>

<template>
  <footer class="footer" id="footer">
      <div class="title">
          AGENDA
      </div>
      <ul>
          <li @click="$emit('dayNumber', 1)">
            <router-link :to="{name: 'day', params: {id: 1}}">Day1</router-link>
          </li>
          <li @click="$emit('dayNumber', 2)">
              <router-link :to="{name: 'day', params: {id: 2}}">Day2</router-link>
          </li>
      </ul>
  </footer>
</template>

<script>
export default {
    dayNumb: undefined
}
</script>

<style scoped lang="sass">
    .footer
        background-color: #fff
        height: 120px
        display: flex
        justify-content: space-around
        align-items: center
        ul
            display: flex
            padding-left: 0px
            list-style: none
    .title
        font-family: AcerRg
        font-style: normal
        font-weight: bold
        font-size: 66px
        line-height: 77px
        color: #000000
    ul
        li
            font-family: AcerRg
            font-style: normal
            font-weight: bold
            cursor: pointer
            font-size: 34px
            line-height: 40px
            color: #80C342
            &:first-of-type
                margin-right: 40px
</style>
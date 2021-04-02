<template>
  <header class="header">
    <img src="../assets/img/logo.png" alt="">
    <ul>
      <li>
        <a href="#footer">AGENDA</a>
      </li>
      <li>
        <a href="#">SPEAKERS</a>
      </li>
    </ul>
    <img src="../assets/img/acer-g.svg" alt="">
  </header>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
  .header
    height: 124px
    background-color: #08232E
    display: flex
    align-items: center
    padding: 0px 5%
    justify-content: space-between
    ul
      display: flex
      list-style-type: none
      padding-left: 0px
      li
        &:first-of-type
          margin-right: 70px
        a
          font-family: AcerRg
          text-decoration: none
          font-style: normal
          font-weight: normal
          font-size: 26px
          line-height: 30px
          color: #FFFFFF
</style>
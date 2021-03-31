<template>
  <div class="loginform">
        <img src="../assets/img/logo.png" alt="" class="logo">
        <form action="#" class="form">
            <div class="form__content">
                <label class="title">ВІТАЄМО</label>
                <input type="text" name="name" placeholder="name" @click="test">
                <input type="email" name="email" placeholder="e - mail">
                <input type="tel" name="phone" placeholder="phone">
                <div class="wrap">
                    <div class="l">
                        <input type="checkbox"><span>Запомнить меня</span>
                    </div>
                    <a href="#" class="forgot">Забыли пароль?</a>
                </div>
            </div>
            <input type="submit" class="btn" value="ВОЙТИ">
        </form>
        <!-- <a href="#" :to="{name: 'Home'}">perehod</a> -->
        <router-link :to="{name: 'Home'}">1231</router-link>
        <div class="img-wrap">
            <img src="../assets/img/acer.png" alt="">
            <img src="../assets/img/predator.png" alt="">
            <img src="../assets/img/conceptD.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
}
</script>

<style lang="sass">
  body
    display: flex
    justify-content: center
    align-items: center
  @import '../styles/login'
</style>
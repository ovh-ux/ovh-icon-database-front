<template>
    <header class="header">
      <h1 class="header__title">
          <router-link class="header__title-link"
            to="/">
            <img class="header__title-logo" src="../../assets/logo.svg" alt="OVH group logo">
            <span class="header__title-app-name">
              UI Kit
              <span class="header__title-app-name--colored">{{ title }}</span>
            </span>
          </router-link>
      </h1>
      <login-button></login-button>
    </header>
</template>

<script>
import LoginButton from '@/components/AppHeader/LoginButton/LoginButton';

export default {
    name: 'AppHeader',
    data () {
        return {
            title: 'Icon Database'
        }
    },
    components: {
        LoginButton
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import "./AppHeader.scss";
</style>

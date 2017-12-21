<template>
    <header class="header">
      <h1 class="header__title">
          <router-link class="header__title-link"
            to="/">
            <svg xmlns="http://www.w3.org/2000/svg"
                    class="header__title-logo">
                   <use href="#logo" />
               </svg>
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

<style lang="scss" scoped>
    @import "./AppHeader.scss";
</style>

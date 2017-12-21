<template>
    <router-link class="loginButton"
            to="/login">
      <svg xmlns="http://www.w3.org/2000/svg"
           class="loginButton__icon">
          <use href="#user_16px" />
      </svg>
      <span class="loginButton__label">Log In</span>
    </router-link>
</template>

<script>
export default {
    name: 'LoginButton'
}
</script>
<style lang="scss" scoped>
    @import "./LoginButton.scss";
</style>

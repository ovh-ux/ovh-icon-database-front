<template>
    <router-link class="loginButton"
            type="button"
            to="/login">
      <svg xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 16 16"
           class="loginButton__icon">
          <circle cx="8" cy="3" r="2.5"/>
          <path d="M12.5,13a4.5,4.5,0,0,0-9,0v2.5h9Z"/>
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

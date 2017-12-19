<template>
  <form action="" class="login-form">
    <label for="username"
      class="input-text-label">Username</label>
    <input id="username"
      name="username"
      type="text"
      class="input-text login-form__input">
    <label for="password"
      class="input-text-label">Password</label>
    <input id="password"
      name="password"
      type="text"
      class="input-text login-form__input">
    <button class="btn btn--primary login-form__btn"
      type="submit"
      name="button">Login</button>
    <a href=""
      class="btn btn--link login-form__btn">Forgot your password ?</a>
  </form>
</template>

<script>
export default {
    name: 'LoginForm'
}
</script>

<style lang="scss" scoped>
    @import "./LoginForm.scss";
</style>

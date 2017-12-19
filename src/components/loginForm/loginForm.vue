<template>
  <form action="" class="login-form">
    <div class="input-text-row">
      <input id="username"
        name="username"
        type="text"
        class="input-text login-form__input">
      <label for="username"
        class="input-text-label">Username</label>
    </div>
    <div class="input-text-row">
      <input id="password"
        name="password"
        type="text"
        class="input-text login-form__input">
      <label for="password"
        class="input-text-label">Password</label>
    </div>
    <div class="login-form__footer">
      <button class="btn btn--primary login-form__btn"
        type="submit"
        name="button">Login</button>
      <a href=""
        class="btn btn--link login-form__btn login-form__btn--password">Forgot your password ?</a>
    </div>
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

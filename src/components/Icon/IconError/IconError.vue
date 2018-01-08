<template>
  <div class="icon-error">
    <div class="icon-error__illustration">
      <span class="icon-error__visual-container">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon-error__visual">
          <use href="#question_16px" />
        </svg>
      </span>
      <span class="icon-error__placeholder-name"></span>
    </div>
    <p class="icon-error__text">
      Sorry, your icons couldn't be loaded. Please try again later.
    </p>
  </div>
</template>

<script>
export default {
    name: 'IconError'
}
</script>

<style lang="scss" scoped>
  @import "./IconError.scss";
</style>

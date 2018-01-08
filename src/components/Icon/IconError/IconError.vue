<template>
  <div class="icon-error">
    <div class="icon-error__illustration-row">
      <div class="icon-error__illustration" v-for="n in illustrationNumber">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon-error__visual">
          <use href="#cross2_32px" />
        </svg>
        <span class="icon-error__placeholder-name"></span>
      </div>
    </div>
    <p class="icon-error__text">
      Sorry, your icons couldn't be loaded.
      <br>Please try again later.
    </p>
  </div>
</template>

<script>
export default {
    name: 'IconError',
    data: () => {
      return {
        illustrationNumber: 3
      }
    }
}
</script>

<style lang="scss" scoped>
  @import "./IconError.scss";
</style>

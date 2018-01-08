<template>
    <ul class="icons-loading">
      <li class="icons-loading__item" v-for="n in loadingItemsNumber">
        <span class="icons-loading__placeholder-visual"></span>
        <span class="icons-loading__placeholder-name"></span>
      </li>
    </ul>
</template>

<script>
export default {
    name: 'IconLoading',
    data: () => {
      return {
        loadingItemsNumber : 3
      };
    }
}
</script>

<style lang="scss" scoped>
  @import "./IconLoading.scss";
</style>

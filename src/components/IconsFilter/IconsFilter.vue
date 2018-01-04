<template>
  <form action=""
    class="icons-filter">
    <div class="icons-filter__content">
      <div class="icons-filter__search">
        <input type="text"
          id="icon-search-field"
          placeholder="Search icon"
          v-model="search"
          class="input-text icons-filter__search-field">
        <svg xmlns="http://www.w3.org/2000/svg"
             class="icons-filter__search-icon">
            <use href="#magnifyingglass_16px" />
        </svg>
      </div>
    </div>
  </form>
</template>

<script>
export default {
    name: 'IconsFilter',
    data: () => {
      return {
        search: ''
      }
    }
}
</script>

<style lang="scss" scoped>
    @import "./IconsFilter.scss";
</style>

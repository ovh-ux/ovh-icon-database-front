<template>
  <form action=""
    class="icons-filter">
    <div class="icons-filter__search">
        <input type="text"
          id="icon-search-field"
          placeholder="Search icon"
          v-model="search"
          :change="setSearchName(search)"
          class="input-text icons-filter__search-field">
        <svg xmlns="http://www.w3.org/2000/svg"
             class="icons-filter__search-icon"
             aria-hidden="true">
            <use href="#magnifyingglass_16px" />
        </svg>
      </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'IconFilter',
    data: () => {
      return {
        search: ''
      }
    },
    methods: mapActions({
      'setSearchName': 'icons/setSearchName'
    })
}
</script>

<style lang="scss" scoped>
    @import "./IconFilter.scss";
</style>

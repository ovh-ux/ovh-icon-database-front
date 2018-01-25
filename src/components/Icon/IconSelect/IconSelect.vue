<template>
  <div class="icon-select">
    <button class="btn btn--primary icon-select__button" @click="selectAllIcons" type="button">
      <span>Select all</span>
    </button>
    <button class="btn btn--default icon-select__button" v-if="hasSelected > 0" @click="unSelectAllIcons" type="button">
      <span>Unselect all</span>
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "IconSelect",
  computed: mapGetters({
    hasSelected: "icons/hasSelected",
  }),
  methods: mapActions({
    fetchIcons: "icons/fetch",
    selectAllIcons: "icons/selectAll",
    unSelectAllIcons: "icons/unSelectAll"
  })
};
</script>

<style lang="scss" scoped>
@import "./IconSelect.scss";
</style>

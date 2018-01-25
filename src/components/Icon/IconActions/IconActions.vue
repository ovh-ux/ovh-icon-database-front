<template>
  <div class="icon-actions">
    <div class="icon-actions__content">
      <icon-filter></icon-filter>
      <icon-select></icon-select>
    </div>
  </div>
</template>

<script>
import IconFilter from "@/components/Icon/IconFilter/IconFilter";
import IconSelect from "@/components/Icon/IconSelect/IconSelect";

export default {
  name: "IconActions",
  components: {
    IconFilter,
    IconSelect
  }
};
</script>

<style lang="scss" scoped>
@import "./IconActions.scss";
</style>

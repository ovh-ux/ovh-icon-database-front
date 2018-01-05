<template>
  <ul class="icons-list">
      <add-button></add-button>
      <icon
          v-for="(icon, index) in icons"
          v-bind:key="icon.id"
          v-bind:icon="icon"
          v-bind:index="index"
      ></icon>
  </ul>
</template>

<script>
import AddButton from '@/components/AddButton/AddButton'
import Icon from '@/components/Icon/Icon'

export default {
    name: 'IconList',
    computed: {
        total() {
            return this.$store.state.moduleIcons.icons.length;
        },
        icons() {
            return this.$store.state.moduleIcons.icons;
        }
    },
    components: {
        AddButton,
        Icon
    }
}
</script>

<style lang="scss" scoped>
    @import './IconList.scss';
</style>

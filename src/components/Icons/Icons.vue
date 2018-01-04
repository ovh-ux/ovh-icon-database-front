<template>
  <ul class="icons-list">
      <add-button></add-button>
      <icon
          v-for="icon in icons"
          v-bind:key="icon.id"
          v-bind:icon="icon"
      ></icon>
  </ul>
</template>

<script>
import AddButton from '@/components/AddButton/AddButton'
import Icon from '@/components/Icon/Icon'

export default {
    name: 'IconsList',
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
    @import './Icons.scss';
</style>

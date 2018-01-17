<template>
  <ul class="icons-list">
      <add-button></add-button>
      <icon
          v-for="(icon, index) in filteredIcons"
          v-bind:key="icon.id"
          v-bind:icon="icon"
          v-bind:index="index"
      ></icon>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';


import AddButton from '@/components/AddButton/AddButton'
import Icon from '@/components/Icon/Icon'

export default {
    name: 'IconList',
    computed: mapGetters({
      'total': 'icons/count',
      'filteredIcons': 'icons/filtered'
    }),
    components: {
        AddButton,
        Icon
    }
}
</script>

<style lang="scss" scoped>
    @import './IconList.scss';
</style>

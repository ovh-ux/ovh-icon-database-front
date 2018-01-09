<template>
    <transition appear>
      <li class="icon-container" :style="{'--idx' : index}">
          <button type="button"
             class="icon"
             @click="selectIcon(icon)"
             v-bind:class="{ 'icon--selected': icon.selected }">
             <img class="icon__visual" :src="icon.url" :alt="icon.name" />
             <span class="icon__name">{{icon.name}}</span>
          </button>
      </li>
    </transition>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'Icon',
    methods: mapActions(['selectIcon']),
    props: {
        icon: {
            type: Object
        },
        index: {
            type: Number
        }
    }
}
</script>

<style lang="scss" scoped>
    @import './Icon.scss';
</style>

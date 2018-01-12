<template>
    <transition appear>
      <li class="icon-container" :style="{'--idx' : index}">
          <button type="button"
             class="icon"
             @click="selectIcon(icon)"
             v-bind:class="{ 'icon--selected': icon.selected }">
             <div class="icon__visual" v-html="icon.raw"></div>
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

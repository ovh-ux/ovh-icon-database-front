<template>
    <li class="icon-container">
        <button type="button"
           class="icon"
           @click="selectIcon(icon)"
           v-bind:class="{ 'icon--selected': icon.selected }">
           <svg xmlns="http://www.w3.org/2000/svg"
             class="icon__visual"
             v-html="icon.svg"></svg>
           <span class="icon__name">{{icon.name}}</span>
        </button>
    </li>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'Icon',
    methods: mapActions(['selectIcon']),
    props: {
        icon: {
            type: Object
        }
    }
}
</script>

<style lang="scss" scoped>
    @import './Icon.scss';
</style>

<template>
    <li class="icon-container">
        <button type="button"
           class="icon"
           @click="selectIcon(icon)"
           v-bind:class="{ 'icon--selected': icon.selected }">
           <img class="icon__visual" :src="icon.url" :alt="icon.name" />
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

<template>
    <li class="icon icon-list__item" @click="selectIcon(icon)"
        v-bind:class="{ 'icon-list__item--selected': icon.selected }">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon__visual" v-html="icon.svg"></svg>
        <span class="icon__name">{{icon.name}}</span>
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

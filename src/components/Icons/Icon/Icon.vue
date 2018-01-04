<template>
    <li class="icon icon-list__item" @click="selectIcon(icon)" v-bind:class="{ 'icon-list__item--selected': icon.selected }">
        <img class="icon__visual" :src="icon.url" :alt="icon.name" />
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

<template>
    <li class="icon icon-list__item">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon__visual" v-html="icon.svg"></svg>
        <span class="icon__name">{{icon.name}}</span>
    </li>
</template>

<script>
    export default {
        name: 'Icon',
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

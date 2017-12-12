<template>
    <li class="icon icon-list__item">
        <a @click="addIcon('toto')">Add</a>
    </li>
</template>

<script>
    export default {
        name: 'AddButton',
        methods: {
            addIcon(icon) {
                console.log(icon);
            }
        }
    };
</script>

<style lang="scss" scoped>
</style>

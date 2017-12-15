<template>
    <li class="addButton">
        <a @click="addIcon('toto')">
          <span class="addButton__icon"></span>
          <span class="addButton__label">Add icon</span>
        </a>
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

<template>
    <div>
        <router-link to="/upload"></router-link>
            <i></i>
            Add Icon
        </a>
    </div>
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
-

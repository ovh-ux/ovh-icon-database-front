<template>
    <header class="header">
        <h1 class="header__title">{{ title }}</h1>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data () {
        return {
            title: 'Icon Database'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import "./Header.scss";
</style>

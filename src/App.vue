<template>
    <div id="app">
        <app-header></app-header>
        <router-view/>
    </div>
</template>

<script>
import AppHeader from '@/components/AppHeader/AppHeader'
export default {
    name: 'app',
    components: {
        AppHeader
    }
}
</script>

<style lang="scss">
    @import './main.scss';
</style>

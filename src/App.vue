<template>
    <div id="app">
        <AppHeader></AppHeader>
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

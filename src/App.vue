<template>
    <div id="app" :class="{'app--panel-opened': modalState}">
        <app-header></app-header>
        <router-view/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

import AppHeader from '@/components/AppHeader/AppHeader'

export default {
    name: 'app',
    components: {
        AppHeader
    },
    computed: mapGetters({
      'modalState': 'downloadModal/isOpen'
    })
}
</script>

<style lang="scss">
    @import './main.scss';
</style>

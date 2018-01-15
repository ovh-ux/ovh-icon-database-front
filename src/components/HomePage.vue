<template>
    <section>
        <page-title :pagename="'OVH Icon Database'"></page-title>
        <icon-filter></icon-filter>
        <transition name="icon-loading" mode="out-in">
          <icon-loading v-if="loading"></icon-loading>
          <icon-list v-else></icon-list>
        </transition>
        <download-panel v-if="hasSelectedIcon"></download-panel>
    </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import PageTitle from '@/components/PageTitle/PageTitle'
import IconFilter from '@/components/Icon/IconFilter/IconFilter'
import IconLoading from '@/components/Icon/IconLoading/IconLoading'
import IconList from '@/components/Icon/IconList/IconList'
import DownloadPanel from '@/components/DownloadPanel/DownloadPanel'

export default {
    name: 'HomePage',
    data: () => {
        return {
            loading: true
        };
    },
    created: function () {
        this.loading = true;
        this.fetchIcons().then(() => {
            this.loading = false;
        });
    },
    computed: mapGetters([
      'hasSelectedIcon'
    ]),
    methods: mapActions([
        'fetchIcons'
    ]),
    components: {
      PageTitle,
      IconFilter,
      IconLoading,
      IconList,
      DownloadPanel
    }
}
</script>

<style lang="scss" scoped>
    @import './HomePage.scss';
</style>

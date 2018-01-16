<template>
    <section>
        <page-title :pagename="'OVH Icon Database'"></page-title>
        <icon-error v-if="error"></icon-error>
        <div v-else>
            <icon-filter></icon-filter>
            <transition name="icon-loading" mode="out-in">
                <icon-loading v-if="loading"></icon-loading>
                <icon-list v-else></icon-list>
            </transition>
            <download-panel v-if="hasSelectedIcon"></download-panel>
            <download-code-modal ></download-code-modal>
        </div>
    </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import PageTitle from '@/components/PageTitle/PageTitle'
import IconFilter from '@/components/Icon/IconFilter/IconFilter'
import IconLoading from '@/components/Icon/IconLoading/IconLoading'
import IconList from '@/components/Icon/IconList/IconList'
import DownloadPanel from '@/components/Download/DownloadPanel/DownloadPanel'
import IconError from '@/components/Icon/IconError/IconError'
import DownloadCodeModal from '@/components/Download/DownloadCodeModal/DownloadCodeModal'

export default {
    name: 'HomePage',
    data: () => {
        return {
            loading: true,
            error: false
        };
    },
    created: function () {
        this.loading = true;
        this.fetchIcons().then(() => {
            this.loading = false;
        });
    },
    computed: mapGetters([
      'hasSelectedIcon',
      'modalState'
    ]),
    methods: mapActions([
        'fetchIcons'
    ]),
    components: {
      PageTitle,
      IconFilter,
      IconLoading,
      IconList,
      DownloadPanel,
      IconError,
      DownloadCodeModal
    }
}
</script>

<style lang="scss" scoped>
    @import './HomePage.scss';
</style>

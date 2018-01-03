<template>
    <section>
        <page-title :pagename="'OVH Icon Database'"></page-title>
        <icons-filter></icons-filter>
        <icons></icons>
        <download-panel></download-panel>
    </section>
</template>

<script>
import PageTitle from '@/components/PageTitle/PageTitle'
import IconsFilter from '@/components/IconsFilter/IconsFilter'
import { mapActions } from 'vuex'
import Icons from '@/components/Icons/Icons'
import DownloadPanel from '@/components/DownloadPanel/DownloadPanel'

export default {
    name: 'HomePage',
    data: () => {
        return {
            loading: true
        };
    },
    methods: mapActions([
        'fetchIcons'
    ]),
    created: function () {
        this.loading = true;
        this.fetchIcons().finally(() => {
            this.loading = false;
        });
    },
    components: {
        Icons,
        PageTitle,
	IconsFilter,
        DownloadPanel
    }
}
</script>

<template>
    <section>
        <page-title :pagename="'OVH Icon Database'"></page-title>
        <icons-filter></icons-filter>
        <icons></icons>
        <download-panel v-if="hasSelectedIcon"></download-panel>
    </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import PageTitle from '@/components/PageTitle/PageTitle'
import IconsFilter from '@/components/IconsFilter/IconsFilter'
import Icons from '@/components/Icons/Icons'
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
      Icons,
      PageTitle,
      IconsFilter,
		  DownloadPanel
    }
}
</script>

<template>
    <section>
        <page-title :pagename="'OVH Icon Database'"></page-title>
        <icon-error v-if="error"></icon-error>
        <div v-else>
          <icon-filter></icon-filter>
          <icon-list></icon-list>
          <download-panel v-if="hasSelectedIcon"></download-panel>
        </div>
    </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import PageTitle from '@/components/PageTitle/PageTitle'
import IconFilter from '@/components/Icon/IconFilter/IconFilter'
import IconList from '@/components/Icon/IconList/IconList'
import DownloadPanel from '@/components/DownloadPanel/DownloadPanel'
import IconError from '@/components/Icon/IconError/IconError'

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
      'hasSelectedIcon'
    ]),
    methods: mapActions([
        'fetchIcons'
    ]),
    components: {
      IconList,
      PageTitle,
      IconFilter,
		  DownloadPanel,
      IconError
    }
}
</script>

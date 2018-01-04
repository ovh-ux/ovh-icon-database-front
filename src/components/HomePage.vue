<template>
    <section>
        <page-title :pagename="'OVH Icon Database'"></page-title>
        <icons-filter></icons-filter>
        <icons v-if="!loading"></icons>
        <icons-loading v-else></icons-loading>
    </section>
</template>

<script>
import { mapActions } from 'vuex'

import PageTitle from '@/components/PageTitle/PageTitle'
import IconsFilter from '@/components/IconsFilter/IconsFilter'
import Icons from '@/components/Icons/Icons'
import IconsLoading from '@/components/Icons/IconsLoading/IconsLoading'

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
        IconsLoading
    }
}
</script>

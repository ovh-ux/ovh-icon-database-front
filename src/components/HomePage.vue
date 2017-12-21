<template>
    <section>
        <page-title :pagename="'OVH Icon Database'"></page-title>
        <icon-search></icon-search>
        <icons></icons>
    </section>
</template>

<script>
import PageTitle from '@/components/PageTitle/PageTitle'
import IconSearch from '@/components/IconSearch/IconSearch'
import { mapActions } from 'vuex'
import Icons from '@/components/Icons/Icons'

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
        IconSearch
    }
}
</script>

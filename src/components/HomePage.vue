<template>
    <section>
        <h2>OVH Icon Database</h2>
        <icons v-show="!loading"></icons>

    </section>
</template>

<script>
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
        Icons
    }
}
</script>

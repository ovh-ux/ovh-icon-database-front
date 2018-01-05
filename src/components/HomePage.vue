<template>
    <section>
        <page-title :pagename="'OVH Icon Database'"></page-title>
        <icons-filter></icons-filter>
        <transition name="icon-loading" mode="out-in">
          <icons-loading v-if="loading"></icons-loading>
          <icons v-else></icons>
        </transition>
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

<style lang="scss" scoped>
.icon {
  &-loading {
    &-enter,
    &-leave-to {
      opacity: 0;
    }

    &-enter-active {
      transition: opacity .2s ease-out;
    }

    &-enter-to,
    &-leave {
      opacity: 1;
    }

    &-leave-active {
      transition: opacity .2s ease-in;
    }
  }
}
</style>

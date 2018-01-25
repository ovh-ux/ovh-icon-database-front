<template>
    <section>
        <page-title :pagename="'OVH Icon Database'"></page-title>
        <icon-error v-if="error"></icon-error>
        <div v-else>
            <icon-actions></icon-actions>
            <transition name="icon-loading" mode="out-in">
                <icon-loading v-if="loading"></icon-loading>
                <icon-list v-else></icon-list>
            </transition>
            <download-panel v-if="hasSelectedIcon"></download-panel>
        </div>
    </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import PageTitle from "@/components/PageTitle/PageTitle";
import IconActions from "@/components/Icon/IconActions/IconActions";
import IconLoading from "@/components/Icon/IconLoading/IconLoading";
import IconList from "@/components/Icon/IconList/IconList";
import DownloadPanel from "@/components/Download/DownloadPanel/DownloadPanel";
import IconError from "@/components/Icon/IconError/IconError";

export default {
  name: "HomePage",
  data: () => {
    return {
      loading: true,
      error: false
    };
  },
  created: function() {
    this.loading = true;
    this.fetchIcons().then(() => {
      this.loading = false;
    });
  },
  computed: mapGetters({
    hasSelectedIcon: "icons/hasSelected"
  }),
  methods: mapActions({
    fetchIcons: "icons/fetch",
    selectAllIcons: "icons/selectAll",
    unSelectAllIcons: "icons/unSelectAll"
  }),
  components: {
    PageTitle,
    IconActions,
    IconLoading,
    IconList,
    DownloadPanel,
    IconError
  }
};
</script>

<style lang="scss" scoped>
@import "./HomePage.scss";
</style>

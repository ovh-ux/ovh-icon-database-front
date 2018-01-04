<template>
  <div class="download-panel">
    <span class="download-panel__title">{{ selectedIcons.length }} icon(s) selected</span>
    <button class="btn btn--primary download-panel__button"
      type="submit">
      Download svg
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'DownloadPanel',
    computed: mapGetters([
      'selectedIcons'
    ]),
}
</script>

<style lang="scss" scoped>
    @import "./DownloadPanel.scss";
</style>

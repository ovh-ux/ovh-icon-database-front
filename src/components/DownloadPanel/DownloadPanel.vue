<template>
  <div class="download-panel">
    <span class="download-panel__title">{{ selectedIcons.length }} icon(s) selected</span>
    <button class="btn btn--primary download-panel__button"
      v-on:click="downloadSVGs"
      type="button">
      Download svg
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import download from 'downloadjs';

export default {
    name: 'DownloadPanel',
    computed: mapGetters([
      'selectedIcons'
    ]),
    methods: {

      downloadSVGs() {
        this.selectedIcons.forEach(icon => {
          download(icon.raw, `${icon.name}.svg`, "image/svg+xml");
        });

        document.body.removeChild(link);
      }
    }
}
</script>

<style lang="scss" scoped>
    @import "./DownloadPanel.scss";
</style>

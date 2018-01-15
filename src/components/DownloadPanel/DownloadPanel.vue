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
import Zip from 'jszip';

export default {
    name: 'DownloadPanel',
    computed: mapGetters([
      'selectedIcons'
    ]),
    methods: {

      downloadSVGs() {
        if (this.selectedIcons.length === 1 ) {
          this.selectedIcons.forEach(icon => {
            download(icon.raw, `${icon.name}.svg`, "image/svg+xml");
          });
        } else {
          let zip = new Zip();

          this.selectedIcons.forEach(icon => {
            zip.file(`${icon.name}.svg`, icon.raw);
          });

          zip.generateAsync({type : "blob"})
          .then( blob => {
            download(blob, "icons.svg", "application/zip");
          });
        }

      }
    }
}
</script>

<style lang="scss" scoped>
    @import "./DownloadPanel.scss";
</style>

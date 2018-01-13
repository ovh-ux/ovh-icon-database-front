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
import { mapGetters } from 'vuex'

export default {
    name: 'DownloadPanel',
    computed: mapGetters([
      'selectedIcons'
    ]),
    methods: {

      downloadSVGs() {
        let link = document.createElement('a');
        link.setAttribute('download', null);
        link.style.display = 'none';
        document.body.appendChild(link);


        this.selectedIcons.forEach(icon => {
            link.setAttribute('href', icon.url);
            link.click();
        });

        document.body.removeChild(link);
      }
    }
}
</script>

<style lang="scss" scoped>
    @import "./DownloadPanel.scss";
</style>

<template>
  <div class="download-panel">
    <span class="download-panel__title">
      {{ selectedIcons.length }} icon(s) selected
    </span>
    <div class="download-panel__button-row">
      <!--<button class="btn btn--default download-panel__button"
        type="button"
        @click="toggleModal(true)">
        Get code
      </button>-->
      <button class="btn btn--primary download-panel__button"
        @click="downloadSVGs"
        type="button">
        Download svg
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'DownloadPanel',
    computed: mapGetters([
      'selectedIcons',
      'modalState'
    ]),
    methods: mapActions([
      'toggleModal',
      'downloadSVGs'
    ])
}
</script>

<style lang="scss" scoped>
    @import "./DownloadPanel.scss";
</style>

<template>
  <div>
    <div v-if="modalState" class="download-panel__overlay"></div>

    <div class="download-panel">
      <div v-if="!modalState" class="download-panel__header">
        {{ selectedIcons.length }} icon(s) selected
      </div>

      <div v-else class="download-panel__header">
        <button type="button"
          class="btn btn--close download-panel__back"
          @click="toggleModal(false)">
          <svg xmlns="http://www.w3.org/2000/svg"
               class="btn__icon">
               <title>Close modal</title>
              <use href="#leftarrow_16px" />
          </svg>
        </button>
        <h2 class="download-panel__title">
          SVGs source code
        </h2>
      </div>

      <div v-if="modalState" class="download-panel__body">
        <download-get-code
          v-for="icon in selectedIcons"
          :key="icon.id"
          :icon="icon">
        </download-get-code>
      </div>

      <div class="download-panel__footer">
        <button v-if="!modalState"
          class="btn btn--default download-panel__button"
          type="button"
          @click="toggleModal()">
          Get code
        </button>
        <button class="btn btn--primary download-panel__button"
          @click="downloadSVGs"
          type="button">
          Download svg
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import DownloadGetCode from '@/components/Download/DownloadGetCode/DownloadGetCode'

export default {
    name: 'DownloadPanel',
    computed: mapGetters({
      'selectedIcons': 'selectedIcons',
      'modalState': 'downloadModal/isOpen'
    }),
    methods: mapActions({
      'toggleModal': 'downloadModal/toggle',
      'downloadSVGs': 'downloadSVGs'
    }),
    components: {
      DownloadGetCode
    }
}
</script>

<style lang="scss" scoped>
    @import "./DownloadPanel.scss";
</style>

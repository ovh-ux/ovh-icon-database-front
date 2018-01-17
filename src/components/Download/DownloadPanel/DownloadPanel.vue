<template>
  <div>
    <transition name="download-panel-overlay">
      <div v-if="modalState" class="download-panel__overlay"></div>
    </transition>

    <div class="download-panel"
      :class="[modalState ? 'download-panel--maximized': 'download-panel--minimized']">

      <transition mode="in-out">
        <div class="download-panel__content" v-if="!modalState">
          <div class="download-panel__title">
            {{ selectedIcons.length }} icon(s) selected
          </div>
          <div>
            <button class="btn btn--default download-panel__button"
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

        <div class="download-panel__content" v-else>
          <div class="download-panel__header">
            <button type="button"
              class="btn btn--close download-panel__back"
              @click="toggleModal(false)">
              <svg xmlns="http://www.w3.org/2000/svg"
                   class="btn__icon">
                   <title>Close modal</title>
                  <use href="#leftarrow_16px" />
              </svg>
            </button>
            <h2 class="download-panel__title">SVGs source code</h2>
          </div>

          <div class="download-panel__body">
            <download-get-code
              v-for="icon in selectedIcons"
              :key="icon.id"
              :icon="icon">
            </download-get-code>
          </div>

          <div class="download-panel__footer">
            <button class="btn btn--primary download-panel__button"
              @click="downloadSVGs"
              type="button">
              Download svg
            </button>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import DownloadGetCode from '@/components/Download/DownloadGetCode/DownloadGetCode'

export default {
    name: 'DownloadPanel',
    computed: mapGetters({
      'selectedIcons': 'icons/selected',
      'hasSelectedIcon': 'icons/hasSelected',
      'modalState': 'downloadModal/isOpen'
    }),
    methods: mapActions({
      'toggleModal': 'downloadModal/toggle',
      'downloadSVGs': 'icons/downloadSVGs'
    }),
    components: {
      DownloadGetCode
    }
}
</script>

<style lang="scss" scoped>
    @import "./DownloadPanel.scss";
</style>

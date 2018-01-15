<template>
  <div class="download-code-modal__overlay">
    <div class="download-code-modal">
      <h2 class="download-code-modal__title">
        SVGs source code
      </h2>
      <pre class="download-code-modal__svg-code">
        <span v-for="icon in selectedIcons">
          {{ icon.raw }}
        </span>
      </pre>
      <button type="button"
        class="btn btn--close download-code-modal__close"
        @click="toggleModal(false)">
        <svg xmlns="http://www.w3.org/2000/svg"
             class="btn__icon">
             <title>Close modal</title>
            <use href="#cross_16px" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'DownloadCodeModal',
  computed: mapGetters([
    'selectedIcons',
    'modalState'
  ]),
  methods: mapActions([
    'toggleModal'
  ])
}
</script>

<template>
  <div class="download-code-modal__overlay">
    <div class="download-code-modal">
      <header class="download-code-modal__header">
        <h2 class="download-code-modal__title">
          SVGs source code
        </h2>
        <button type="button"
          class="btn btn--close download-code-modal__close"
          @click="toggleModal(false)">
          <svg xmlns="http://www.w3.org/2000/svg"
               class="btn__icon">
               <title>Close modal</title>
              <use href="#cross_16px" />
          </svg>
        </button>
      </header>

      <div class="download-code-modal__body">
        <div class="download-code-modal__icon-block"
          v-for="icon in selectedIcons">
          <h3 class="download-code-modal__icon-name">
            {{ icon.name }}
          </h3>
          <pre class="download-code-modal__icon-code"><!--
            <code>
              {{ icon.raw }}
            </code>
          --><span class="download-code-modal__icon-code-line">{{ icon.raw }}</span><!--
          --></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import VuePrism from 'vue-prism';
import { mapGetters, mapActions } from 'vuex';

// Vue.use(VuePrism);

// import 'prismjs/themes/prism.css';

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

<style lang="scss" scoped>
    @import "./DownloadCodeModal.scss";
</style>

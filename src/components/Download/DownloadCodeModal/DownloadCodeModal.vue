<template>
  <div class="download-code-modal__overlay">
    <div class="download-code-modal">
      <h2 class="download-code-modal__title">
        SVGs source code
      </h2>
      <pre class="download-code-modal__svg-code">
        lekfijg
      </pre>
      <button type="button"
        class="btn btn--close download-code-modal__close">
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
export default {
  name: 'DownloadCodeModal'
}
</script>

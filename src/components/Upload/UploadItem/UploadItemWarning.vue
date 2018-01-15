<template>
  <div class="upload-item upload-item--warning">
    <svg xmlns="http://www.w3.org/2000/svg"
      class="upload-item__icon"
      aria-hidden="true">
      <use href="#warning_32px"></use>
    </svg>
    <p class="upload-item__message">
      {{ file.name }}
      <br>
      This is not a valid file : please upload .svg files.
    </p>
    <button type="button"
      class="btn btn--close upload__item-close"
      @click="deleteMessage(filesList, index)">
      <svg xmlns="http://www.w3.org/2000/svg"
           class="btn__icon">
           <title>Remove this message</title>
          <use href="#cross_16px" />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: 'UploadItemWarning',
  methods: {
    deleteMessage: (files, index) => {
      files.splice(index, 1);
    }
  },
  props: {
    filesList: {
      type: Array
    },
    file: {
      type: Object
    },
    index: {
      type: Number
    },
  }
}
</script>

<style lang="scss" scoped>
    @import './UploadItem.scss';
</style>

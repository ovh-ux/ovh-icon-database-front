<template>
  <div class="upload-item upload-item--error">
    <svg xmlns="http://www.w3.org/2000/svg"
      class="upload-item__icon"
      ariz-hidden="true">
      <use href="#cross2_32px"></use>
    </svg>
    <p class="upload-item__message">
      {{ file.name }}
      <br>
      Sorry, something went wrong with the upload of this file. Please retry.
    </p>
    <button type="button"
      class="btn btn--close upload-item__close"
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
  name: 'UploadItemError',
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

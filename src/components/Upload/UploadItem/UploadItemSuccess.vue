<template>
  <div class="upload-item">
    <span class="upload__item-image">
      <img :src="file.dataUrl"
        :alt="file.name">
    </span>
    <span class="upload__item-name">{{ file.name }}</span>
  </div>
</template>

<script>
export default {
  name: 'UploadItemSuccess',
  props: {
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

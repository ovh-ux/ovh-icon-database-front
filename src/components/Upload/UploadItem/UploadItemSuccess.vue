<template>
  <div class="upload-item">
    <span class="upload-item__image">
      <img :src="file.dataUrl"
        :alt="file.name">
    </span>
    <span class="upload-item__name">{{ file.name }}</span>
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

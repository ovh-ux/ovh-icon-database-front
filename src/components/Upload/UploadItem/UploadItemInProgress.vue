<template>
  <div class="upload-item upload-item--in-progress">
    <span class="upload-item__image"></span>
    <span class="upload-item__name">{{ file.name }}</span>
    <div class="upload-item__progress-bar"
      :style="{width: file.progress + '%'}">
    </div>
  </div>
</template>

<script>
export default {
  name: 'UploadItemInProgress',
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

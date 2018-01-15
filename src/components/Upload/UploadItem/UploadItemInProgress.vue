<template>
  <div class="upload-item upload-item--in-progress">
    <span class="upload__item-image"></span>
    <span class="upload__item-name">{{ file.name }}</span>
    <div class="upload__item-progress"
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

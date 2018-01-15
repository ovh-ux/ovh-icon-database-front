<template>
  <div class="upload-area"
    v-bind:class="{'upload-area--file-dragged' : clipParams.dragging}">
    <div class="upload-area__content dz-message">
      <p class="upload-area__message">
        Drop your icon in .svg format in this area
        <br>or
      </p>
      <button type="button"
        class="btn btn--primary">Upload file</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UploadArea',
  props: {
    clipParams: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
    @import './UploadArea.scss';
</style>

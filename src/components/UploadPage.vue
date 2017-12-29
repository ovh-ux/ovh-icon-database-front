<template>
  <vue-clip :options="options"
    class="upload">
    <template slot="clip-uploader-action"
      slot-scope="params">
      <div class="upload__area"
        v-bind:class="{'upload__area--file-dragged' : params.dragging}">
        <div class="upload__area-content dz-message">
          <p class="upload__message">
            Drop your icons in .svg format in this area
            <br>or
          </p>
          <button type="button"
            class="upload__button btn btn--primary">Upload files</button>
        </div>
      </div>
    </template>

    <template slot="clip-uploader-body"
      slot-scope="props">
      <ul class="upload__list">
        <li v-if="file.type === 'image/svg+xml'"
          v-for="file in props.files"
          class="upload__item">
          <span class="upload__item-image">
            <img v-bind:src="file.dataUrl"
              alt="">
          </span>
          <span class="upload__item-name">{{ file.name }}</span>
          <button type="button"
            class="btn btn--actions upload__item-actions">
            <svg xmlns="http://www.w3.org/2000/svg"
                 class="btn__icon">
                <use href="#dots__16px" />
            </svg>
          </button>
        </li>

        <li v-else
          class="upload__item">
          <p>Hmmmm... looks like you're uploading an invalid file : your icons must be in .svg format.</p>
        </li>
      </ul>
    </template>
  </vue-clip>
</template>

<script>

export default {
    name: 'UploadPage',
    components: {
    },
    data: () => {
      return {
        options: {
          url: '/upload',
          acceptedFiles: ['image/svg+xml']
        }
      }
    }
}
</script>

<style lang="scss" scoped>
    @import "./UploadPage.scss";
</style>

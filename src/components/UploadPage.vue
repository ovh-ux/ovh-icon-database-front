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
          class="upload__item"
          :class="{'upload__item--in-progress' :  file.status !== 'error' && file.status !== 'success'}">
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
          <div class="upload__item-progress"
            :style="{width: file.progress + '%'}">
          </div>
        </li>

        <li v-else
          class="upload__item upload__item--warning">
          <svg xmlns="http://www.w3.org/2000/svg"
            class="upload__item-icon">
            <use href="#warning_32px"></use>
          </svg>
          <p class="upload__item-message">
            {{ file.name }}
            <br>
            This is not a valid file : please upload .svg files.
          </p>
          <button type="button"
            class="btn btn--close upload__item-close">
            <svg xmlns="http://www.w3.org/2000/svg"
                 class="btn__icon">
                <use href="#cross_16px" />
            </svg>
          </button>
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
          acceptedFiles: 'image/svg+xml',
          uploadMultiple: true,
          parallelUploads: true
        }
      }
    }
}
</script>

<style lang="scss" scoped>
    @import "./UploadPage.scss";
</style>

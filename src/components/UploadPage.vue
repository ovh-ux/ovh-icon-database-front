<template>
  <section class="upload">
    <router-link class="upload__back-link link link--back" to="/">
      <svg xmlns="http://www.w3.org/2000/svg"
        class="link__icon"
        aria-hidden="true">
        <use href="#leftarrow_16px"></use>
      </svg>
      <span class="link__label">
        Back to library
      </span>
    </router-link>

    <page-title :pagename="'Upload Icons'"></page-title>

    <vue-clip :options="options" class="upload__file-uploader">

      <template slot="clip-uploader-action"
        slot-scope="params">
        <div class="upload__area"
          v-bind:class="{'upload__area--file-dragged' : params.dragging}">
          <div class="upload__area-content dz-message">
            <p class="upload__message">
              Drop your icon in .svg format in this area
              <br>or
            </p>
            <button type="button"
              class="upload__button btn btn--primary">Upload file</button>
          </div>
        </div>
      </template>

      <template slot="clip-uploader-body"
        slot-scope="props">
        <ul class="upload__list" v-if="props.files.length > 0">
          <li class="upload__item-container"
            v-for="(file, index) in props.files">
            <div class="upload__item" v-if="file.status === 'success'">
              <span class="upload__item-image">
                <img :src="file.dataUrl"
                  :alt="file.name">
              </span>
              <span class="upload__item-name">{{ file.name }}</span>
              <!--<button type="button"
                class="btn btn--actions upload__item-actions">
                <svg xmlns="http://www.w3.org/2000/svg"
                     class="btn__icon">
                     <title>Actions</title>
                    <use href="#dots__16px" />
                </svg>
              </button>-->
            </div>

            <template v-else-if="file.status === 'error'">
              <div class="upload__item upload__item--warning"
                v-if="file.type !== 'image/svg+xml'">
                <svg xmlns="http://www.w3.org/2000/svg"
                  class="upload__item-icon"
                  aria-hidden="true">
                  <use href="#warning_32px"></use>
                </svg>
                <p class="upload__item-message">
                  {{ file.name }}
                  <br>
                  This is not a valid file : please upload .svg files.
                </p>
                <button type="button"
                  class="btn btn--close upload__item-close"
                  @click="deleteMessage(props.files, index)">
                  <svg xmlns="http://www.w3.org/2000/svg"
                       class="btn__icon">
                       <title>Remove this message</title>
                      <use href="#cross_16px" />
                  </svg>
                </button>
              </div>

              <div class="upload__item upload__item--error"
                v-else>
                <svg xmlns="http://www.w3.org/2000/svg"
                  class="upload__item-icon"
                  ariz-hidden="true">
                  <use href="#cross2_32px"></use>
                </svg>
                <p class="upload__item-message">
                  {{ file.name }}
                  <br>
                  Sorry, something went wrong with the upload of this file. Please retry.
                </p>
                <button type="button"
                  class="btn btn--close upload__item-close"
                  @click="deleteMessage(props.files, index)">
                  <svg xmlns="http://www.w3.org/2000/svg"
                       class="btn__icon">
                       <title>Remove this message</title>
                      <use href="#cross_16px" />
                  </svg>
                </button>
              </div>
            </template>

            <div class="upload__item upload__item--in-progress" v-else>
              <span class="upload__item-image"></span>
              <span class="upload__item-name">{{ file.name }}</span>
              <div class="upload__item-progress"
                :style="{width: file.progress + '%'}">
              </div>
            </div>

          </li>
        </ul>
      </template>
    </vue-clip>
  </section>
</template>

<script>
import PageTitle from '@/components/PageTitle/PageTitle'

export default {
  name: 'UploadPage',
  data: () => {
    return {
      options: {
        url: '/api/svg/upload/multi',
        acceptedFiles: 'image/svg+xml',
        uploadMultiple: true,
        parallelUploads: 10,
        paramName: 'svg'
      }
    }
  },
  methods: {
    deleteMessage: (files, index) => {
      files.splice(index, 1);
    }
  },
  components: {
    PageTitle
  }
}
</script>

<style lang="scss" scoped>
  @import "./UploadPage.scss";
</style>

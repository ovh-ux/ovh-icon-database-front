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
        <upload-area :clip-params="params"></upload-area>
      </template>

      <template slot="clip-uploader-body"
        slot-scope="props">
        <upload-list :clip-props="props"></upload-list>
      </template>
    </vue-clip>
  </section>
</template>

<script>
import PageTitle from '@/components/PageTitle/PageTitle'
import UploadArea from '@/components/Upload/UploadArea/UploadArea'
import UploadList from '@/components/Upload/UploadList/UploadList'

export default {
  name: 'UploadPage',
  data: () => {
    return {
      options: {
        url: '/api/svg/rupload/multi',
        acceptedFiles: 'image/svg+xml',
        uploadMultiple: true,
        parallelUploads: 10,
        paramName: 'svg'
      }
    }
  },
  components: {
    PageTitle,
    UploadArea,
    UploadList
  }
}
</script>

<style lang="scss" scoped>
  @import "./UploadPage.scss";
</style>

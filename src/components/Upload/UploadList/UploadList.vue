<template>
  <ul class="upload-list" v-if="clipProps.files.length > 0">
    <li class="upload-list__item"
      v-for="(file, index) in clipProps.files">
      <upload-item :file="file" :index="index"></upload-item>
    </li>
  </ul>
</template>

<script>
import UploadItem from '@/components/Upload/UploadItem/UploadItem'

export default {
  name: 'UploadList',
  methods: {
    deleteMessage: (files, index) => {
      files.splice(index, 1);
    }
  },
  components: {
    UploadItem
  },
  props: {
    clipProps: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "./UploadList.scss";
</style>

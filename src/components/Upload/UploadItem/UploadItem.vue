<template>
  <component :is="currentView" :file="file" :index="index"
    :files-list="filesList"></component>
</template>

<script>
import UploadItemSuccess from '@/components/Upload/UploadItem/UploadItemSuccess'
import UploadItemWarning from '@/components/Upload/UploadItem/UploadItemWarning'
import UploadItemError from '@/components/Upload/UploadItem/UploadItemError'
import UploadItemInProgress from '@/components/Upload/UploadItem/UploadItemInProgress'

export default {
  name: 'UploadItem',
  props: {
    filesList: {
      type: Array
    },
    file: {
      type: Object
    },
    index: {
      type: Number
    },
  },
  components: {
    UploadItemSuccess,
    UploadItemWarning,
    UploadItemError,
    UploadItemInProgress
  },
  computed: {
    currentView() {
      if (this.file.status === 'success') {
        return 'UploadItemSuccess';
      } else {
        if (this.file.status === 'error') {
          if (this.file.type !== 'image/svg+xml') {
            return 'UploadItemWarning';
          } else {
            return 'UploadItemError';
          }
        } else {
          return 'UploadItemInProgress';
        }
      }
    }
  }
}
</script>

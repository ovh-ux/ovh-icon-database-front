<template>
  <vue-clip :options="options">
    <template slot="clip-uploader-action">
      <div>
        <div class="dz-message">
          <p>Drop your icons in .svg format in this area
            <br>or
          </p>
          <button type="button" class="btn btn--primary">Upload files</button>
        </div>
      </div>
    </template>
    <template slot="clip-uploader-body"
      slot-scope="props">
      <ul v-for="file in props.files">
        <li v-if="file.type === 'image/svg+xml'">
          <img v-bind:src="file.dataUrl" alt="">
          <span>{{ file.name }}</span>
        </li>
        <li v-else>Hmmmm... looks like you're uploading an invalid file : your icons must be in .svg format</li>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>

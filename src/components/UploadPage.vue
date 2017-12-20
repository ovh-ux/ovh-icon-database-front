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
      scope="props">
      <div v-for="file in props.files">
        {{ file.name }}
      </div>
    </template>
  </vue-clip>
</template>

<script>

export default {
    name: 'Uploadpage',
    components: {
    },
    data: () => {
      return {
        options: {
          url: '/upload'
        }
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>

<template>
  <form action=""
    class="download-panel">
    <h3 class="download-panel__title">Export icon</h3>
    <fieldset class="download-panel__parameter">
      <legend class="download-panel__parameter-name">Color</legend>
      <div class="input-box-row">
        <input type="radio"
          name="color"
          id="dark-blue">
        <label for="dark-blue">Dark blue</label>
      </div>
      <div class="input-box-row">
        <input type="radio"
          name="color"
          id="white">
        <label for="white">White</label>
      </div>
    </fieldset>

    <div class="download-panel__parameter">
      <span for="size"
        class="download-panel__parameter-name">
        Size
      </span>
      <select type="select"
        id="size">
        <option value="16">16px</option>
        <option value="20">20px</option>
        <option value="24">24px</option>
        <option value="32">32px</option>
        <option value="42">42px</option>
        <option value="64">64px</option>
      </select>
    </div>

    <fieldset class="download-panel__parameter">
      <legend class="download-panel__parameter-name">File format</legend>
      <div class="input-box-row">
        <input type="radio"
          name="file-format"
          id="svg">
        <label for="svg">SVG</label>
      </div>
      <div class="input-box-row">
        <input type="radio"
          name="file-format"
          id="png">
        <label for="png">PNG</label>
      </div>
    </fieldset>

    <button class="btn btn--primary"
      type="submit">
      Generate link
    </button>
  </form>
</template>

<script>
export default {
    name: 'DownloadPanel'
}
</script>

<style lang="scss" scoped>
    @import "./DownloadPanel.scss";
</style>

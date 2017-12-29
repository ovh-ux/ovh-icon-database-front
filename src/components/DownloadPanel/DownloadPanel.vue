<template>
  <form action=""
    class="download-panel">
    <h3 class="download-panel__title">Export icon</h3>
    <div class="download-panel__parameters">
      <fieldset class="download-panel__parameter">
        <legend class="download-panel__parameter-name">Color</legend>
        <div class="input-box-row">
          <input type="radio"
            name="color"
            id="dark-blue"
            class="input-box">
          <label for="dark-blue"
            class="input-box-label">
            Dark blue
          </label>
        </div>
        <div class="input-box-row">
          <input type="radio"
            name="color"
            id="white"
            class="input-box">
          <label for="white"
            class="input-box-label">
            White
          </label>
        </div>
      </fieldset>

      <div class="download-panel__parameter">
        <span class="download-panel__parameter-name">Size</span>
        <select type="select"
          id="size"
          class="input-select download-panel__select">
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
            id="svg"
            class="input-box">
          <label for="svg"
            class="input-box-label">
            SVG
          </label>
        </div>
        <div class="input-box-row">
          <input type="radio"
            name="file-format"
            id="png"
            class="input-box">
          <label for="png"
            class="input-box-label">
            PNG
          </label>
        </div>
      </fieldset>
    </div>

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

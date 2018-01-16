<template>
  <div class="download-get-code">
    <h3 class="download-get-code__name">{{ icon.name }}</h3>
    <pre class="download-get-code__code language-markup"><!--remove indentation
    --><code v-html="getHighlightedSvg(icon.raw)"></code><!--remove indentation
    --></pre>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Prism from 'prismjs'
import beautify from 'xml-beautifier'

import 'prismjs/themes/prism.css'

export default {
  name: 'DownloadGetCode',
  computed: mapGetters([
    'selectedIcons',
  ]),
  methods: {
    getHighlightedSvg(svg) {
      return Prism.highlight(beautify(svg), Prism.languages.markup);
    }
  },
  props: {
    icon: {
        type: Object
    },
    index: {
        type: Number
    }
  }
}
</script>

<style lang="scss" scoped>
    @import "./DownloadGetCode.scss";
</style>

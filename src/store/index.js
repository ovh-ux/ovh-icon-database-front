import Vue from 'vue';
import Vuex from 'vuex';

import icons from './Icons/store';
import downloadModal from './DownloadModal/store';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    icons,
    downloadModal
  }
});

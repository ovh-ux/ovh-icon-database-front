import Vue from 'vue';
import Vuex from 'vuex';

import { icons } from './Icons';
import { downloadModal } from './DownloadModal';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        icons,
        downloadModal
    }
});

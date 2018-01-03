import Vue from 'vue'
import Vuex from 'vuex'

import { moduleIcons } from './StoreIcons'
import { downloadParameters } from './DownloadParameters'

Vue.use(Vuex);

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        moduleIcons,
        downloadParameters
    }
});

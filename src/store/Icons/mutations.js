import Vue from 'vue';

import * as types from './mutation-types';

export default {
  [types.ADD_ICONS](state, icons) {
    state.icons = icons;
  },

  [types.SET_SEARCH_NAME](state, value) {
    state.searchName = value;
  },

  [types.SELECT_ICON](state, icon) {
    var currentIconIdx = state.icons.findIndex((elm) => {
      return elm.etag === icon.etag;
    });

    Vue.set(
      state.icons[currentIconIdx], 'selected',
      !state.icons[currentIconIdx].selected
    );
  }
};

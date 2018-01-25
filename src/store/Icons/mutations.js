import Vue from 'vue';

import * as types from './mutation-types';

export default {
  [types.ADD_ICONS](state, icons) {
    state.icons = icons;
  },

  [types.SET_SEARCH_NAME](state, value) {
    state.searchName = value;
  },

  [types.TOGGLE_SELECT_ICON](state, icon) {
    Vue.set(icon, 'selected', !icon.selected);
  },

  [types.SELECT_ICON](state, icon) {
    Vue.set(icon, 'selected', true);
  },

  [types.SELECT_ALL_ICON](state) {
    state.icons.forEach(icon => {
      Vue.set(icon, 'selected', true);
    });
  },

  [types.UNSELECT_ALL_ICON](state) {
    state.icons.forEach(icon => {
      Vue.delete(icon, 'selected', false);
    });
  }

};

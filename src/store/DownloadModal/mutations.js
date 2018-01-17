import * as types from './mutation-types';

export default {
  [types.TOGGLE_DOWNLOAD_MODAL](state) {
    state.open = !state.open;
  }
};

import * as types from './mutation-types';

export default {
  toggle({ commit }) {
    commit(types.TOGGLE_DOWNLOAD_MODAL);
  }
};

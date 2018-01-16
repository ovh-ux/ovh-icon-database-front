import Vue from 'vue';

export const moduleDownloadModal = {
  namespaced: true,
  state: {
    open: false
  },
  getters: {
    isOpen(state) {
      return state.open;
    },
    isClose(state) {
      return !state.open;
    }
  },
  mutations: {
    TOGGLE_DOWNLOAD_MODAL(state) {
      state.open = !state.open;
    }
  },
  actions: {
    toggle({ commit }) {
      console.log('toggle');
      commit('TOGGLE_DOWNLOAD_MODAL');
    }
  }
};

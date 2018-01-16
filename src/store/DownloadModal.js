import Vue from 'vue';

export const downloadModal = {
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
      commit('TOGGLE_DOWNLOAD_MODAL');
    }
  }
};

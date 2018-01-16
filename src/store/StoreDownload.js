import Vue from 'vue';

export const moduleDownload = {
  state: {
    modalOpen: false
  },
  getters: {
    isOpen() {
      return state.modalOpen;
    },
    isClose() {
      return !state.modalOpen;
    }
  },
  mutations: {
    TOGGLE_MODAL(state) {
      state.modalOpen = !state.modalOpen;
    }
  },
  actions: {
    toggleModal({ commit }) {
      commit('TOGGLE_MODAL');
    }
  }
};

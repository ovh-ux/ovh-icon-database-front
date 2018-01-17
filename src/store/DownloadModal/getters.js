export default {
  isOpen(state) {
    return state.open;
  },
  isClose(state) {
    return !state.open;
  }
};

export default {
  selected: state => {
    return state.icons.filter(icon => icon.selected);
  },

  hasSelected: state => {
    return state.icons.filter(icon => icon.selected).length;
  },

  count: state => {
    return state.icons.length;
  },

  getSearchName: state => {
    return state.searchName;
  },

  filtered: state => {
    return state.icons.filter(icon =>
      icon.name.match(new RegExp(state.searchName, 'i'))
    );
  }
};

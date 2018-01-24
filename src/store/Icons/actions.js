import download from 'downloadjs';
import Zip from 'jszip';

import { api } from '../../utils/request';

export default {

  select({ commit }, icon) {
    commit('SELECT_ICON', icon);
  },

  setSearchName({ commit }, value) {
    commit('SET_SEARCH_NAME', value)
  },

  fetch({ commit }) {
    return api.get('/api/svg/list').then(response => {
      let icons = response.data.data;
      icons.forEach(icon => {
        icon.name = icon.name.replace('.svg', '');

        let div = document.createElement('div');
        div.innerHTML = icon.raw;

        let svg = div.firstElementChild;

        svg.removeAttribute('id');
        svg.removeAttribute('data-name');

        let children = div.getElementsByTagName('*');
        let hash = {};
        for (let i = 0; i < children.length; i++) {
          if (children[i].classList) {
            for (let j = 0; j < children[i].classList.length; j++) {
              hash[children[i].classList[j]] = true;
            }
          }
        }
        let classes = Object.keys(hash);
        for (let i = 0; i < classes.length; i++) {
          div.innerHTML = div.innerHTML.replace(new RegExp(classes[i], 'g'), icon.name.replace(/\s/g, '-') + '--' + classes[i]);
        }
        icon.raw = div.innerHTML;
      });

      commit('ADD_ICONS', icons);
    });
  },

  downloadSVGs() {
    if (this.getters['icons/count'] === 1) {
      this.getters['icons/selected'].forEach(icon => {
        download(icon.raw, `${icon.name}.svg`, "image/svg+xml");
      });
    } else {
      let zip = new Zip();
      this.getters['icons/selected'].forEach(icon => {
        zip.file(`${icon.name}.svg`, icon.raw);
      });
      zip.generateAsync({ type: "blob" })
        .then(blob => {
          download(blob, "icons.zip", "application/zip");
        });
    }
  }
};

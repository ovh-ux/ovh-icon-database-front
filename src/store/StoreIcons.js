import Vue from 'vue';
import download from 'downloadjs';
import Zip from 'jszip';

import { api } from '../utils/request';

const baseUrl = `${process.env.OSS_URL}/v1/${process.env.OSS_AUTH}/${process.env.OSS_CONTAINER}`;

export const moduleIcons = {
    state: {
        icons: [],
        searchName: '',
        showModal: false
    },
    getters: {

      selectedIcons: state => {
        return state.icons.filter(icon => icon.selected);
      },

      hasSelectedIcon: state => {
        return state.icons.filter(icon => icon.selected).length;
      },

      iconsCount: state => {
        return state.icons.length;
      },

      getSearchName: state => {
        return state.searchName;
      },

      filteredIcons: state => {
        return state.icons.filter(icon => icon.name.match(new RegExp(state.searchName, 'i')));
      }

    },
    mutations: {

        addIcons(state, icons) {
            state.icons = icons;
        },

        setSearchName(state, value) {
            state.searchName = value;
        },

        selectIcon(state, icon) {
            var currentIconIdx = state.icons.findIndex((elm) => {
                return elm.url === icon.url;
            });

            Vue.set(
              state.icons[currentIconIdx], 'selected',
              !state.icons[currentIconIdx].selected
            );
        },

    },
    actions: {

        selectIcon({ commit }, icon) {
            commit('selectIcon', icon);
        },

        setSearchName({ commit }, value) {
          commit('setSearchName', value)
        },

        fetchIcons({ commit }) {
            return api.get('/api/svg/list').then(response => {
                let icons = response.data.data;
                icons.forEach(icon => {
                    icon.url = `${baseUrl}/${icon.name}`;
                    icon.name = icon.name.replace('.svg','');

                    let div = document.createElement('div');
                    div.innerHTML = icon.raw;

                    let svg = div.firstElementChild;

                    svg.removeAttribute('id');
                    svg.removeAttribute('data-name');

                    let children = div.getElementsByTagName('*');
                    let hash = {};
                    for (let i = 0 ; i < children.length ; i++) {
                      if (children[i].classList) {
                        for(let j = 0; j < children[i].classList.length; j++) {
                            hash[children[i].classList[j]] = true;
                        }
                      }
                    }
                    let classes = Object.keys(hash);
                    for (let i = 0 ; i < classes.length ; i++) {
                      div.innerHTML = div.innerHTML.replace(new RegExp(classes[i],'g'), icon.name + '--' + classes[i]);
                    }
                    icon.raw = div.innerHTML;

                })
                commit('addIcons', icons);
            });
        },

        downloadSVGs() {
         if (this.getters.selectedIcons.length === 1 ) {
           this.getters.selectedIcons.forEach(icon => {
             download(icon.raw, `${icon.name}.svg`, "image/svg+xml");
           });
         } else {
           let zip = new Zip();
           this.getters.selectedIcons.forEach(icon => {
             zip.file(`${icon.name}.svg`, icon.raw);
           });
           zip.generateAsync({type : "blob"})
           .then( blob => {
             download(blob, "icons.zip", "application/zip");
           });
         }
       }

    }
};

import Vue from 'vue';

import { api } from '../utils/request';

const baseUrl = `${process.env.OSS_URL}/v1/${process.env.OSS_AUTH}/${process.env.OSS_CONTAINER}`;

export const moduleIcons = {
    state: {
        icons: [],
        searchName: ''
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
        }

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

                    let defs = svg.querySelector('defs');
                    if (defs) {
                      defs.remove();
                    }

                    let style = svg.querySelector('style');
                    if (style) {
                      style.remove();
                    }
                    icon.raw = div.innerHTML;
                    //icon.raw = icon.raw.replace(regexp,'');
                })
                commit('addIcons', icons);
            });
        }

    }
};

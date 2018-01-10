import Vue from 'vue';

import { api } from '../utils/request';

const baseUrl = `${process.env.OSS_URL}/v1/${process.env.OSS_AUTH}/${process.env.OSS_CONTAINER}`;

console.log(process.env);

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
        return state.icons.filter(icon => icon.name.match(state.searchName));
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
                })
                commit('addIcons', icons);
            });
        }

    }
};

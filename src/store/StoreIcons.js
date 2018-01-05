import Vue from 'vue';
import axios from 'axios'

const baseUrl = process.env.OSS_URL;

export const moduleIcons = {
    state: {
        icons: []
    },
    getters: {

      selectedIcons: state => {
        return state.icons.filter(icon => icon.selected)
      },

      hasSelectedIcon: state => {
        return state.icons.filter(icon => icon.selected).length;
      },

      iconsCount: state => {
        return state.icons.length;
      }

    },
    mutations: {

        addIcons(state, icons) {
            state.icons = icons;
        },

        selectIcon(state, icon) {
            var currentIconIdx = state.icons.findIndex((elm) => {
                return elm.id === icon.id;
            })
            Vue.set(state.icons[currentIconIdx], 'selected', !state.icons[currentIconIdx].selected);
        }

    },
    actions: {

        selectIcon({ commit }, icon) {
            commit('selectIcon', icon);
        },

        fetchIcons({ commit }) {
            return axios.get('/svg/list').then(response => {
                let icons = response.data.data;
                icons.forEach(icon => {
                    icon.url = `${baseUrl}/${icon.name}`;
                })
                commit('addIcons', icons);
            });
        }

    }
};

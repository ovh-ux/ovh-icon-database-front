import Vue from 'vue';
import axios from 'axios'

const baseUrl = "https://storage.gra3.cloud.ovh.net/v1/AUTH_46e713e39cc64e4fa462a3fcc4eef012/icon%20library%20test";

export const moduleIcons = {
    state: {
        icons: []
    },
    getters: {

        selectedIcons: state => {
            state.icons.filter(icon => icon.selected)
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
            }).catch(error => {
                console.log(error);
            });
        }

    }
};

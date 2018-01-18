import Vue from 'vue';
import Vuex from 'vuex';

import store from '../../../src/store/index';

Vue.use(Vuex);

import HomePage from '@/components/HomePage';

describe('HomePage.vue', () => {

  const Constructor = Vue.extend(HomePage);
  const vm = new Constructor({ store }).$mount();

  it('Should render correct contents of title', () => {
    expect(vm.$el.querySelector('.page-title').textContent).to.equal('OVH Icon Database');
  });
});

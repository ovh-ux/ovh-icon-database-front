import Vue from 'vue';
import Vuex from 'vuex';

import store from '../../../src/store/index';

Vue.use(Vuex);


import HomePage from '@/components/HomePage';

describe('HomePage.vue', () => {

  it('should render correct contents of title', () => {
    const Constructor = Vue.extend(HomePage);
    const vm = new Constructor({ store }).$mount();
    expect(vm.$el.querySelector('.page-title').textContent)
      .to.equal('OVH Icon Database');
  });

  it('should render correct contents of title', () => {
    const Constructor = Vue.extend(HomePage);
    const vm = new Constructor({ store }).$mount();
    expect(vm.$el.querySelector('.page-title').textContent)
      .to.equal('OVH Icon Database');
  });
});

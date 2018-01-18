import Vue from 'vue';
import Vuex from 'vuex';

import store from '../../../src/store/index';

Vue.use(Vuex);

import IconFilter from '@/components/Icon/IconFilter/IconFilter';

describe('IconFilter.vue', () => {

  const Constructor = Vue.extend(IconFilter);
  const vm = new Constructor({ store }).$mount();

  it('Search should be empty', () => {
    expect(vm.$el.querySelector('.icons-filter__search-field').value).to.equal("");
    expect(vm.search).to.equal("");
  });
});

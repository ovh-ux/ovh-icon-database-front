import Vue from 'vue';
import Vuex from 'vuex';

import store from '../../../src/store/index';

Vue.use(Vuex);

import UploadPage from '@/components/UploadPage';

describe('UploadPage.vue', () => {

  const Constructor = Vue.extend(UploadPage);
  const vm = new Constructor({ store }).$mount();

  it('Should render correct contents of title', () => {
    expect(vm.$el.querySelector('.page-title').textContent).to.equal('Upload Icons');
  });
});

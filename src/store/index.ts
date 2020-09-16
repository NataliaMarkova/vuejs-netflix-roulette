import Vue from 'vue';
import Vuex from 'vuex';
import MovieState from '@/store/modules/movieState';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    MovieState,
  },
});

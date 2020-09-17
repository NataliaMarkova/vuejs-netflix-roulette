import Vue from 'vue';
import { NetflixMoviePlugin } from '@/plugins/netflix-movie';
import App from './App.vue';
import router from './router';
import store from './store';

import 'bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';

Vue.use(NetflixMoviePlugin);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

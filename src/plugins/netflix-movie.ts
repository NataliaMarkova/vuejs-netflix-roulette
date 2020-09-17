import _Vue from 'vue';
import Observer from '@/components/Observer.vue';
import { minutes, year } from '@/filters/filters';

export function NetflixMoviePlugin(Vue: typeof _Vue, options?: any): void {
  Vue.component('Observer', Observer);

  Vue.filter('minutes', minutes);
  Vue.filter('year', year);
}

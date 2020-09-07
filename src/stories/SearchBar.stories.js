/* eslint-disable import/no-extraneous-dependencies */

import SearchBar from '@/components/SearchBar.vue';

export default {
  title: 'Search bar',
};

export const Default = () => ({
  components: { SearchBar },
  template: '<SearchBar/>',
});

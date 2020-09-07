/* eslint-disable import/no-extraneous-dependencies */

import SearchResult from '@/components/SearchResult.vue';

export default {
  title: 'Search result',
};

const movieData1 = {
  id: 1,
  title: 'Title 1',
  year: 2001,
  description: 'Description 1',
  image: 'cover1.jpg',
};

const movieData2 = {
  id: 2,
  title: 'Title 2',
  year: 2002,
  description: 'Description 2',
  image: 'cover2.jpg',
};

const movieData3 = {
  id: 3,
  title: 'Title 3',
  year: 2003,
  description: 'Description 3',
  image: 'cover3.jpg',
};

export const NoData = () => ({
  components: { SearchResult },
  template: '<SearchResult />',
});

export const HasData = () => ({
  components: { SearchResult },
  template: '<SearchResult :movies="movies" />',
  props: {
    movies: {
      default: () => [movieData1, movieData2, movieData3],
    },
  },
});

/* eslint-disable import/no-extraneous-dependencies */

import MovieList from '@/components/MovieList.vue';

const movie1 = {
  id: 351286,
  title: 'Jurassic World: Fallen Kingdom',
  tagline: 'Life finds a way',
  posterPath: 'https://image.tmdb.org/t/p/w500/ln6d5Okr6VK5vfQVobJTiYxeD0l.jpg',
  releaseYear: () => '2018',
};

const movie2 = {
  id: 447365,
  title: 'Guardians of the Galaxy Vol. 3',
  tagline: 'Life finds a way',
  posterPath: 'https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg',
  releaseYear: () => '2010',
};

const movie3 = {
  id: 424785,
  title: 'Transformers 7',
  tagline: 'Life finds a way',
  posterPath: 'https://image.tmdb.org/t/p/w500/432BowXw7a4fWXSONxBaFKqvW4f.jpg',
  releaseYear: () => '2011',
};

const template = '<MovieList :movies="movies" />';

export default {
  title: 'Movie list',
};

export const NoData = () => ({
  components: { MovieList },
  template,
  props: {
    movies: {
      default: () => [],
    },
  },
});

export const HasData = () => ({
  components: { MovieList },
  template,
  props: {
    movies: {
      default: () => [movie1, movie2, movie3],
    },
  },
});

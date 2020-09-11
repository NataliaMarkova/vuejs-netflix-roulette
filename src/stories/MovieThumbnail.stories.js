/* eslint-disable import/no-extraneous-dependencies */

import MovieThumbnail from '@/components/MovieThumbnail.vue';

const movieData = {
  id: 351286,
  title: 'Jurassic World: Fallen Kingdom',
  tagline: 'Life finds a way',
  voteAverage: 5,
  voteCount: 28,
  releaseDate: '2018-06-01',
  posterPath: 'https://image.tmdb.org/t/p/w500/ln6d5Okr6VK5vfQVobJTiYxeD0l.jpg',
  overview: 'A volcanic eruption threatens the remaining dinosaurs on the island of Isla Nublar, '
  + 'where the creatures have freely roamed for several years after the demise of an animal theme park known as '
  + 'Jurassic World. Claire Dearing, the former park manager, has now founded the Dinosaur Protection Group, '
  + 'an organization dedicated to protecting the dinosaurs. To help with her cause, Claire has recruited Owen Grady, '
  + 'a former dinosaur trainer who worked at the park, to prevent the extinction of the dinosaurs once again.',
  budget: 0,
  revenue: 0,
  genres: [
    'Action',
    'Adventure',
    'Drama',
    'Science Fiction',
    'Thriller',
  ],
  runtime: 124,
  releaseYear: () => '2018',
};

export default {
  title: 'Movie Thumbnail',
};

export const Default = () => ({
  components: { MovieThumbnail },
  template: '<MovieThumbnail :movie="movie" />',
  props: {
    movie: {
      default: () => movieData,
    },
  },
});

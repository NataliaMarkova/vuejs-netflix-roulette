/* eslint-disable import/no-extraneous-dependencies */

import SearchOptions from '@/components/SearchOptions.vue';
import SearchResult from '@/components/SearchResult.vue';
import MovieDetails from '@/components/MovieDetails.vue';
import SearchResultDetails from '@/components/SearchResultDetails.vue';
import Footer from '@/components/Footer.vue';

export default {
  title: 'Roulette',
};

const template = '<div class = "container"><SearchOptions/><SearchResult :movies = "movies"/><Footer /></div>';
const detailsTemplate = '<div class = "container"><MovieDetails :id = "id" :movies = "movies" />'
 + '<SearchResultDetails :searchText = "searchText" :searchBy = "searchBy" :movies = "movies"/><Footer /></div>';

const movie1 = {
  id: 351286,
  title: 'Jurassic World: Fallen Kingdom',
  tagline: 'Life finds a way',
  voteAverage: 2,
  releaseDate: '2018-06-01',
  posterPath: 'https://image.tmdb.org/t/p/w500/ln6d5Okr6VK5vfQVobJTiYxeD0l.jpg',
  releaseYear: () => '2018',
};
  
const movie2 = {
  id: 447365,
  title: 'Guardians of the Galaxy Vol. 3',
  tagline: 'Life finds a way',
  releaseDate: '2010-06-01',
  voteAverage: 7,
  posterPath: 'https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg',
  releaseYear: () => '2010',
};
  
const movie3 = {
  id: 424785,
  title: 'Transformers 7',
  tagline: 'Life finds a way',
  voteAverage: 3,
  releaseDate: '2011-06-01',
  posterPath: 'https://image.tmdb.org/t/p/w500/432BowXw7a4fWXSONxBaFKqvW4f.jpg',
  releaseYear: () => '2011',
};

const movieDetails = {
  id: 351286,
  title: 'Jurassic World: Fallen Kingdom',
  tagline: 'Life finds a way',
  voteAverage: 4,
  VoteCount: 28,
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

export const MainPageWithNoResults = () => ({
  components: { SearchOptions, SearchResult, Footer },
  template,
  props: {
    movies: {
      default: () => [],
    },
  },
});

export const MainPageWithResults = () => ({
  components: { SearchOptions, SearchResult, Footer },
  template,
  props: {
    movies: {
      default: () => [movie1, movie2, movie3],
    },
  },
});

export const DetailsPage = () => ({
  components: { MovieDetails, SearchResultDetails, Footer },
  template: detailsTemplate,
  props: {
    id: {
      default: () => 351286,
    },
    movies: {
      default: () => [movieDetails, movie2, movie3],
    },
    searchText: {
      default: () => 'Drama',
    },
    searchBy: {
      default: () => 'genre',
    },
  },
});

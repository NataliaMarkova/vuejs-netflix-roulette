/* eslint-disable import/no-extraneous-dependencies */

import SearchBar from '@/components/SearchBar.vue';
import SearchResult from '@/components/SearchResult.vue';
import MovieDetails from '@/components/MovieDetails.vue';
import Footer from '@/components/Footer.vue';

export default {
  title: 'Roulette',
};

const template ='<div class = "container"><SearchBar /><SearchResult :movies = "movies" /> <Footer /></div>'
const detailsTemplate ='<div class = "container"><MovieDetails :movie = "movie"/><SearchResult :movies = "movies" /> <Footer /></div>'

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

const movieDetails = {
  id: 1,
  title: 'Pulp Fiction',
  year: 1995,
  description: 'Description',
  image: 'cover1.jpg',
  rating: 5,
  duration: 125,
  remark: 'Oscar winning movie',
  longDescription: 'Pulp Fiction is a 1994 American neo-noir black comedy crime drama film written and directed by Quentin Tarantino, who conceived it with Roger Avary. ... The title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue.',
};

export const MainPageWithNoResults = () => ({
  components: { SearchBar, SearchResult, Footer },
  template: template,
});

export const MainPageWithResults = () => ({
  components: { SearchBar, SearchResult, Footer },
  template: template,
  props: {
    movies: {
      default: () => [movieData1, movieData2, movieData3],
    },
  },
});

export const DetailsPage = () => ({
  components: { MovieDetails, SearchResult, Footer },
  template: detailsTemplate,
  props: {
    movies: {
      default: () => [movieData1, movieData2, movieData3],
    },
    movie: {
      default: () => movieDetails,
    },
  },
});

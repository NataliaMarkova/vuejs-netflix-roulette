/* eslint-disable import/no-extraneous-dependencies */
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MovieDetails from '@/components/MovieDetails.vue';

const movieData = {
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

export default {
  title: 'Movie Details',
};

export const Default = () => ({
  components: { MovieDetails },
  template: '<MovieDetails :movie="movie" />',
  props: {
    movie: {
      default: () => movieData,
    },
  },
});

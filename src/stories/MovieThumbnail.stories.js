/* eslint-disable import/no-extraneous-dependencies */
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MovieThumbnail from '@/components/MovieThumbnail.vue';

const movieData = {
  id: 1,
  title: 'Title',
  year: 2020,
  description: 'Description',
  image: 'cover1.jpg',
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

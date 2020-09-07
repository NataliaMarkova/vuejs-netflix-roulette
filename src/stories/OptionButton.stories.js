/* eslint-disable import/no-extraneous-dependencies */

import OptionButton from '@/components/OptionButton.vue';

export default {
  title: 'Option button',
};

export const Active = () => ({
  components: { OptionButton },
  template: '<OptionButton title="Active button" value="active" :active=true />',
});

export const Inactive = () => ({
  components: { OptionButton },
  template: '<OptionButton title="Inactive button" value="inactive" :active=false />',
});

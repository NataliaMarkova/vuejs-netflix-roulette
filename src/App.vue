<template>
  <router-view/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

const movies = namespace('movies');

@Component
export default class App extends Vue {
  @movies.Action('loadMoviesFromJson')
  loadMovies!: () => void;

  created() {
    this.loadMovies();
  }
}
</script>

<style>

body {
    background-color: #232323;
}

</style>

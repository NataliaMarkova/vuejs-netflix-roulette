<template>
  <div class="container">
    <SearchOptions></SearchOptions>
    <SearchResult :movies = "movies"/>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { JsonToMovieConverter } from '@/services/jsonToMovieConverter';

import { Movie } from '@/models/Movie';

import SearchOptions from '@/components/SearchOptions.vue';
import SearchResult from '@/components/SearchResult.vue';
import Footer from '@/components/Footer.vue';

import moviesJson from '@/assets/movies.json';

const jsonToMovieConverter = new JsonToMovieConverter();

@Component({
  components: { SearchOptions, SearchResult, Footer },
})
export default class Home extends Vue {
  defaultMovies: Movie[] = jsonToMovieConverter.convertToMovieArray(moviesJson);

  searchBy = 'title';

  searchText = '';

  get movies(): Movie[] {
    return this.defaultMovies;
  }
}

</script>

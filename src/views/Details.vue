<template>
  <div class="container">
    <MovieDetails :id = "id" :movies = "movies" />
    <SearchResultDetails :searchText = "searchText" :searchBy = "searchBy" :movies = "movies"/>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import MovieDetails from '@/components/MovieDetails.vue';
import SearchResultDetails from '@/components/SearchResultDetails.vue';
import Footer from '@/components/Footer.vue';

import { Movie } from '@/models/Movie';
import { JsonToMovieConverter } from '@/services/jsonToMovieConverter';

import moviesJson from '@/assets/movies.json';

const jsonToMovieConverter = new JsonToMovieConverter();

@Component({
  components: { MovieDetails, SearchResultDetails, Footer },
})
export default class Details extends Vue {
  @Prop({
    default: jsonToMovieConverter.convertToMovieArray(moviesJson),
  })
  private movies: Movie[];

  private searchBy = 'genre';

  private searchText = 'Drama';

  @Prop()
  private id: number;
}
</script>

<template>
  <section>
    <div class="row">
      <div v-if="movieCount === 0" class="col text-center no-found" >
        <h2 class="text-light font-weight-light">
          No films found
        </h2>
      </div>
      <div v-else class="d-flex align-content-stretch flex-wrap movies justify-content-around">
        <template v-for = "movie in movies">
          <MovieThumbnail :movie = "movie" :key = "movie.id"></MovieThumbnail>
        </template>
        <Observer @intersected = "intersected" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Movie } from '@/models/Movie';
import MovieThumbnail from '@/components/MovieThumbnail.vue';
import { namespace } from 'vuex-class';
import { SearchParamsService } from '@/services/searchParamsService';

const movies = namespace('movies');

@Component({
  components: { MovieThumbnail },
})
export default class MovieList extends Vue {
  @Prop()
  private genre?: string;

  @movies.State
  private movies: Movie[];

  @movies.State
  private movieCount: number;

  @movies.State
  private offset: number;

  @movies.Action
  private retrieveMoreMovies: (params: URLSearchParams) => Promise<Movie[]>;

  private searchParamsService = new SearchParamsService();

  private async intersected(): Promise<void> {
    try {
      let params;
      if (this.genre) {
        params = this.searchParamsService.getSimilarGenreSearchOptions(this.genre, this.offset);
      } else {
        params = this.searchParamsService.getRouteQuerySearchOptions(this.$route.query, this.offset);
      }
      await this.retrieveMoreMovies(params);
    } catch (err) {
      console.warn(err);
      this.$router.push({ name: 'not-found' });
    }
  }
}

</script>

<style>
  @import '~bootstrap/dist/css/bootstrap.min.css';

  body {
      background-color: #232323;
  }

  .no-found {
    padding: 20px;
  }

  section {
      padding-bottom: 35px;
  }
</style>

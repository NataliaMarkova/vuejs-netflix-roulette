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
        <Observer @intersected="intersected" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Movie } from '@/models/Movie';
import MovieThumbnail from '@/components/MovieThumbnail.vue';
import { namespace } from 'vuex-class';

const movies = namespace('movies');

@Component({
  components: { MovieThumbnail },
})
export default class MovieList extends Vue {
  @movies.State
  private movies: Movie[];

  @movies.State
  private movieCount: number;

  @movies.Action
  private retrieveMovies: () => Promise<any>;

  @movies.Action
  private retrieveMoreMovies: () => Promise<any>;

  private async intersected(): Promise<any> {
    await this.retrieveMoreMovies();
  }

  async mounted() {
    await this.retrieveMovies();
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

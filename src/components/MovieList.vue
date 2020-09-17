<template>
  <section>
    <div class="row">
      <div v-if="movies.length === 0" class="col text-center no-found" >
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
  @movies.Action
  nextMovies!: (page?: number, size?: number) => Array<Movie>;

  private movies: Array<Movie> = [];

  private page = 0;

  private async intersected(): Promise<any> {
    try {
      const moreMovies = await this.nextMovies(this.page);
      this.movies = [...this.movies, ...moreMovies];
      this.page += 1;
    } catch (error) {
      console.error(error);
      return Promise.reject();
    }
    return Promise.resolve();
  }

  async mounted() {
    this.movies = await this.nextMovies(this.page);
    this.page += 1;
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

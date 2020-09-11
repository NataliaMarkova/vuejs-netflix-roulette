<template>
  <section>
    <div class="row">
      <div v-if="movies.length === 0" class="col text-center no-found" >
        <h2 class="text-light font-weight-light">
          No films found
        </h2>
      </div>
      <div v-else class="d-flex align-content-stretch flex-wrap movies justify-content-around">
        <template v-for="movie in movies">
          <MovieThumbnail :movie="movie" :key="movie.id"></MovieThumbnail>
        </template>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Movie } from '@/models/Movie';
import MovieThumbnail from '@/components/MovieThumbnail.vue';

@Component({
  components: { MovieThumbnail },
})
export default class MovieList extends Vue {
  @Prop({
    default: [],
  })
  private movies: Array<Movie>;
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

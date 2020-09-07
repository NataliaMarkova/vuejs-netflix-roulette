<template>
  <div class="container" >
    <div class="row filter-header text-light">
      <div class="col col-lg-6">
        <h7 v-show="movies.length > 0" class="align-middle font-weight-bold">
          {{ movies.length }} movie(s) found
        </h7>
      </div>
      <div class="col col-lg-2 text-right align-items-center">
        <h5 class="align-bottom">sort by</h5>
      </div>
      <div class="col col-lg-3">
        <div class="btn-group" role="group" aria-label="Sort by">
          <OptionButton title="Release date" value="release" :active="sortByReleaseDate" @clicked="sort" ></OptionButton>
          <OptionButton title="Rating" value="rating" :active="sortByRating" @clicked="sort" ></OptionButton>
        </div>
      </div>
    </div>
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
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Movie } from '@/models/Movie';
import MovieThumbnail from '@/components/MovieThumbnail.vue';
import OptionButton from '@/components/OptionButton.vue';

@Component({
  components: { MovieThumbnail, OptionButton },
})
export default class SearchResult extends Vue {
  @Prop({
    default: [],
  })
  private movies: Array<Movie>;

  private sortBy = 'release'

  get sortByReleaseDate(): boolean {
    return this.sortBy === 'release';
  }

  get sortByRating(): boolean {
    return this.sortBy === 'rating';
  }

  sort(sortBy: string): void {
    this.sortBy = sortBy;
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

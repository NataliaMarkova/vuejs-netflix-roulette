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
    <MovieList :movies = "sortedMovies"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Movie } from '@/models/Movie';
import MovieList from '@/components/MovieList.vue';
import OptionButton from '@/components/OptionButton.vue';

@Component({
  components: { MovieList, OptionButton },
})
export default class SearchResult extends Vue {
  @Prop({
    default: [],
  })
  private movies: Array<Movie>;

  private sortBy = 'release';

  get sortByReleaseDate(): boolean {
    return this.sortBy === 'release';
  }

  get sortByRating(): boolean {
    return this.sortBy === 'rating';
  }

  get sortedMovies(): Array<Movie> {
    if (this.sortBy === 'release') {
      return this.movies.sort((a: Movie, b: Movie) => b.releaseDate.localeCompare(a.releaseDate));
    }
    return this.movies.sort((a: Movie, b: Movie) => b.voteAverage - a.voteAverage);
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

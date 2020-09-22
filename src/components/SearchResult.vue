<template>
  <div class="container" >
    <div class="row filter-header text-light">
      <div class="col col-lg-6">
        <h7 v-show="count > 0" class="align-middle font-weight-bold">
          {{ count }} movie(s) found
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
    <MovieList />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MovieList from '@/components/MovieList.vue';
import OptionButton from '@/components/OptionButton.vue';
import { namespace } from 'vuex-class';

const movies = namespace('movies');

@Component({
  components: { MovieList, OptionButton },
})
export default class SearchResult extends Vue {
  @movies.Getter('movieCount')
  private count: number;

  @movies.State
  private sortBy: number;

  @movies.Getter
  private sortByReleaseDate: boolean;

  @movies.Getter
  private sortByRating: boolean;

  @movies.Mutation
  private setSortBy: (sortBy: string) => void

  private sort(sortBy: string): void {
    this.setSortBy(sortBy);
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

<template>
  <div class="container" >
    <div class="row filter-header text-light">
      <div class="col col-lg-6">
        <h5 v-show="count > 0" class="align-middle font-weight-bold">
          {{ count }} movie(s) found
        </h5>
      </div>
      <div class="col col-lg-2 text-right align-items-center">
        <h5 class="align-bottom">sort by</h5>
      </div>
      <div class="col col-lg-3">
        <div class="btn-group" role="group" aria-label="Sort by">
          <router-link :to = "{ path:'/', query: { ...this.$route.query, ...{ sortBy: release } } }">
            <OptionButton title="Release date" :value = "release" :active = "sortByReleaseDate"></OptionButton>
          </router-link>
          <router-link :to = "{ path:'/', query: { ...this.$route.query, ...{ sortBy: rating } } }">
            <OptionButton title="Rating" :value = "rating" :active = "sortByRating"></OptionButton>
          </router-link>
        </div>
      </div>
    </div>
    <MovieList />
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';
import MovieList from '@/components/MovieList.vue';
import OptionButton from '@/components/OptionButton.vue';
import { SearchParamsService } from '@/services/searchParamsService';
import { namespace } from 'vuex-class';
import { RELEASE, RATING } from '@/models/Constants';

const movies = namespace('movies');

@Component({
  components: { MovieList, OptionButton },
})
export default class SearchResult extends Vue {
  @movies.State('movieCount')
  private count: number;

  private readonly release = RELEASE;

  private readonly rating = RATING;

  private sortBy = RELEASE;

  private searchParamsService = new SearchParamsService();

  get sortByReleaseDate(): boolean {
    return this.sortBy === RELEASE;
  }

  get sortByRating(): boolean {
    return this.sortBy === RATING;
  }

  @Watch('$route', { immediate: true, deep: true })
  onRouteChange() {
    try {
      this.sortBy = this.searchParamsService.getSortBy(this.$route.query);
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

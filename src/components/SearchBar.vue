<template>
  <div class="row justify-content-md-center search-box">
    <div class="col col-lg-7">
      <input type="text" class="form-control text-light" placeholder="Search" name="search"
        v-model = "search" @keyup.enter = "doSearch">
    </div>
    <div class="col col-lg-3">
      <button type="button" class="btn btn-danger btn-block" @click = "doSearch">Search</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

const movies = namespace('movies');

@Component
export default class SearchBar extends Vue {
  @movies.State
  private searchText;

  private search = '';

  @movies.Mutation('setSearchText')
  private updateSearchText: (searchText: string) => void;

  @movies.Action
  private retrieveMovies: () => Promise<any>;

  async doSearch(): Promise<any> {
    this.updateSearchText(this.search);
    await this.retrieveMovies();
  }

  mounted() {
    this.search = this.searchText || '';
  }
}

</script>

<style>
  @import '~bootstrap/dist/css/bootstrap.min.css';

  .search-box .btn {
      line-height: 2;
  }

</style>

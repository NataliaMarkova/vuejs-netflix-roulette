<template>
  <div class="container">
    <SearchOptions />
    <SearchResult />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';

import SearchOptions from '@/components/SearchOptions.vue';
import SearchResult from '@/components/SearchResult.vue';
import Footer from '@/components/Footer.vue';
import { namespace } from 'vuex-class';
import { Movie } from '@/models/Movie';
import { SearchParamsService } from '@/services/searchParamsService';

const movies = namespace('movies');

@Component({
  components: { SearchOptions, SearchResult, Footer },
})
export default class Home extends Vue {
  @movies.Action
  private retrieveMovies: (params: URLSearchParams) => Promise<Movie[]>;

  private searchParamsService = new SearchParamsService();

  @Watch('$route', { immediate: true, deep: true })
  async onRouteChange() {
    try {
      const params = this.searchParamsService.getRouteQuerySearchOptions(this.$route.query);
      await this.retrieveMovies(params);
    } catch (err) {
      console.warn(err);
      this.$router.push({ name: 'not-found' });
    }
  }
}

</script>

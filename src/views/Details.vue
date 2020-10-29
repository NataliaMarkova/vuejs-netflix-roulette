<template>
  <div class="container">
    <MovieDetails :movie = "movie"/>
    <SearchResultDetails :genre = "genre"/>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';

import MovieDetails from '@/components/MovieDetails.vue';
import SearchResultDetails from '@/components/SearchResultDetails.vue';
import Footer from '@/components/Footer.vue';
import { Movie } from '@/models/Movie';
import { SearchParamsService } from '@/services/searchParamsService';
import { namespace } from 'vuex-class';

const movies = namespace('movies');

@Component({
  components: { MovieDetails, SearchResultDetails, Footer },
})
export default class Details extends Vue {
  @movies.State
  private offset: number;

  @movies.Mutation
  private resetOffset: () => void;

  @movies.Action
  private getMovieById: (id: number) => Promise<Movie>;

  @movies.Action
  private retrieveMovies: (params: URLSearchParams) => Promise<Movie[]>;

  private movieData: Movie = new Movie();

  private searchParamsService = new SearchParamsService();

  get movie(): Movie {
    return this.movieData;
  }

  get genre(): string {
    if (this.movieData.genres) {
      return this.movieData.genres[0];
    }
    return '';
  }

  @Watch('$route', { immediate: true, deep: true })
  async onRouteChange() {
    this.resetOffset();
    await this.retreiveMovieData();
    await this.refreshMovieList();
  }

  private async retreiveMovieData(): Promise<void> {
    const id = parseInt(this.$route.params.id, 10);
    const data = await this.getMovieById(id);
    if (data.id) {
      this.movieData = data;
    } else {
      this.$router.push({ name: 'not-found' });
    }
  }

  private async refreshMovieList() {
    const params = this.searchParamsService.getSimilarGenreSearchOptions(this.genre, this.offset);
    await this.retrieveMovies(params);
  }
}
</script>

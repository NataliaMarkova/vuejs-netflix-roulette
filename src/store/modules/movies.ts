import {
  VuexModule,
  Module,
  Mutation,
  Action,
} from 'vuex-module-decorators';
import { MovieApiService } from '@/services/movieApiService';
import { Movie } from '@/models/Movie';
import {
  TITLE,
  GENRE,
  RELEASE,
  RATING,
  DESC,
  LIMIT,
} from '@/models/Constants';

@Module({ namespaced: true })
class Movies extends VuexModule {
  private movieApiService = new MovieApiService();

  movies: Movie[] = [];

  sortBy = RELEASE;

  searchBy = TITLE;

  searchText = '';

  movieCount = 0;

  limit = LIMIT;

  offset = 0;

  sortOrder = DESC;

  get sortByReleaseDate(): boolean {
    return this.sortBy === RELEASE;
  }

  get sortByRating(): boolean {
    return this.sortBy === RATING;
  }

  get searchByTitle(): boolean {
    return this.searchBy === TITLE;
  }

  get searchByGenre(): boolean {
    return this.searchBy === GENRE;
  }

  get params(): URLSearchParams {
    const params = new URLSearchParams();
    params.append('offset', this.offset.toString(10));
    params.append('limit', this.limit.toString(10));
    params.append('searchBy', this.searchBy);
    params.append('sortBy', this.sortBy);
    params.append('sortOrder', this.sortOrder);
    params.append('search', this.searchText);
    return params;
  }

  @Mutation
  setMovies(movies: Movie[]): void {
    this.movies = movies;
  }

  @Mutation
  addMovies(movies: Movie[]): void {
    this.movies = [...this.movies, ...movies];
  }

  @Mutation
  setMovieCount(movieCount: number): void {
    this.movieCount = movieCount;
  }

  @Mutation
  setSortBy(sortBy: string): void {
    this.sortBy = sortBy;
  }

  @Mutation
  setSearchBy(searchBy: string): void {
    this.searchBy = searchBy;
  }

  @Mutation
  setSearchText(searchText: string): void {
    this.searchText = searchText.trim();
  }

  @Mutation
  resetOffset(): void {
    this.offset = 0;
  }

  @Mutation
  increaseOffset(): void {
    this.offset += this.limit;
  }

  @Action
  async getMovieById(id: number): Promise<Movie> {
    const movie = await this.movieApiService.getMovieById(id);
    return movie;
  }

  @Action({ rawError: true })
  async retrieveMovies(): Promise<Movie[]> {
    const { commit } = this.context;
    commit('resetOffset');
    const { movies, count } = await this.movieApiService.getMovies(this.params);
    commit('setMovies', movies);
    commit('increaseOffset');
    commit('setMovieCount', count);
    return movies;
  }

  @Action({ rawError: true })
  async retrieveMoreMovies(): Promise<Movie[]> {
    const { commit } = this.context;
    const { movies, count } = await this.movieApiService.getMovies(this.params);
    commit('addMovies', movies);
    commit('increaseOffset');
    commit('setMovieCount', count);
    return movies;
  }
}

export default Movies;

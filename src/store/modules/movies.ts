import {
  VuexModule,
  Module,
  Mutation,
  Action,
} from 'vuex-module-decorators';
import { MovieApiService } from '@/services/movieApiService';
import { Movie } from '@/models/Movie';
import { LIMIT } from '@/models/Constants';

@Module({ namespaced: true })
class Movies extends VuexModule {
  private movieApiService = new MovieApiService();

  movies: Movie[] = [];

  movieCount = 0;

  offset = 0;

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
  resetOffset(): void {
    this.offset = 0;
  }

  @Mutation
  increaseOffset(): void {
    this.offset += LIMIT;
  }

  @Action
  async getMovieById(id: number): Promise<Movie> {
    const movie = await this.movieApiService.getMovieById(id);
    return movie;
  }

  @Action({ rawError: true })
  async retrieveMovies(params: URLSearchParams): Promise<Movie[]> {
    const { commit } = this.context;
    commit('resetOffset');
    const { movies, count } = await this.movieApiService.getMovies(params);
    commit('setMovies', movies);
    commit('increaseOffset');
    commit('setMovieCount', count);
    return movies;
  }

  @Action({ rawError: true })
  async retrieveMoreMovies(params: URLSearchParams): Promise<Movie[]> {
    const { commit } = this.context;
    const { movies, count } = await this.movieApiService.getMovies(params);
    commit('addMovies', movies);
    commit('increaseOffset');
    commit('setMovieCount', count);
    return movies;
  }
}

export default Movies;

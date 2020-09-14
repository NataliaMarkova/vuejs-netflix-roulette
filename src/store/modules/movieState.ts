import { VuexModule, Module } from 'vuex-module-decorators';
import { JsonToMovieConverter } from '@/services/jsonToMovieConverter';
import { Movie } from '@/models/Movie';
import moviesJson from '@/assets/movies.json';

const jsonToMovieConverter = new JsonToMovieConverter();

@Module({ namespaced: true, name: 'MovieState' })
class MovieState extends VuexModule {
  public movies: Movie[] = jsonToMovieConverter.convertToMovieArray(moviesJson);

  get movieCount(): number {
    return this.movies.length;
  }

  get movieById() {
    return (id: number): Movie => this.movies.find((movie) => movie.id === id) || new Movie();
  }
}

export default MovieState;

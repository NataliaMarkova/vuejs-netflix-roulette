import { MovieApiClient } from '@/services/movieApiClient';
import { JsonToMovieConverter } from '@/services/jsonToMovieConverter';
import { Movie } from '@/models/Movie';

export class MovieApiService {
  private movieApiClient = new MovieApiClient();

  private jsonToMovieConverter = new JsonToMovieConverter();

  async getMovies(params: URLSearchParams): Promise<any> {
    const { data } = await this.movieApiClient.query(params);
    const movies = this.jsonToMovieConverter.convertToArray(data.data);
    const count = data.total;
    return { movies, count };
  }

  async getMovieById(id: number): Promise<Movie> {
    const { data } = await this.movieApiClient.get(id);
    return this.jsonToMovieConverter.convert(data);
  }
}

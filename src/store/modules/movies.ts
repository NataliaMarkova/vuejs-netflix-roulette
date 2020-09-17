import {
  VuexModule,
  Module,
  Mutation,
  Action,
} from 'vuex-module-decorators';
import { JsonToMovieConverter } from '@/services/jsonToMovieConverter';
import { Movie } from '@/models/Movie';
import moviesJson from '@/assets/movies.json';

const jsonToMovieConverter = new JsonToMovieConverter();

const RELEASE = 'release';
const RATING = 'rating';
const TITLE = 'title';
const GENRE = 'genre';
const DEFAULT_PAGE_SIZE = 3;

@Module({ namespaced: true })
class Movies extends VuexModule {
  allMovies: Movie[] = [];

  sortBy = RELEASE;

  searchBy = TITLE;

  searchText = '';

  get movieCount(): number {
    return this.movies.length;
  }

  get movieById() {
    return (id: number): Movie => this.allMovies.find((movie) => movie.id === id) || new Movie();
  }

  get movies(): Array<Movie> {
    const { filteredMovies, sortByReleaseDate } = this;
    if (sortByReleaseDate) {
      return [...filteredMovies.sort((a: Movie, b: Movie) => b.releaseDate.localeCompare(a.releaseDate))];
    }
    return [...filteredMovies.sort((a: Movie, b: Movie) => b.voteAverage - a.voteAverage)];
  }

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

  @Mutation
  setAllMovies(movies: Movie[]) {
    this.allMovies = movies;
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

  @Action({ rawError: true })
  loadMoviesFromJson(): void {
    const { commit } = this.context;
    const jsonMovies: Movie[] = jsonToMovieConverter.convertToMovieArray(moviesJson);
    commit('setAllMovies', jsonMovies);
  }

  @Action
  async nextMovies(page?: number, size?: number): Promise<Array<Movie>> {
    const pageNumber = page || 0;
    const pageSize = size || DEFAULT_PAGE_SIZE;

    const start = pageNumber * pageSize;
    const end = start + pageSize;

    return this.movies.slice(start, end);
  }

  private get filteredMovies(): Movie[] {
    const searchText = this.searchText.toLowerCase();
    if (this.searchText === '') {
      return this.allMovies;
    }
    if (this.searchByGenre) {
      return this.allMovies.filter((movie) => movie.genres.find((genre) => genre.toLowerCase().indexOf(searchText) > -1));
    }
    return this.allMovies.filter((movie) => movie.title.toLowerCase().indexOf(searchText) > -1);
  }
}

export default Movies;

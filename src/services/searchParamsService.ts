import {
  TITLE,
  GENRE,
  RELEASE,
  RATING,
  LIMIT,
  DESC,
} from '@/models/Constants';

export class SearchParamsService {
  private readonly release = RELEASE;

  private readonly title = TITLE;

  private readonly EMPTY = '';

  private readonly ZERO = 0;

  getSortBy(query: any): string {
    const { sortBy } = query;

    if (sortBy) {
      if (sortBy === RELEASE || sortBy === RATING) {
        return sortBy;
      }
      throw new Error(`Invalid "sortBy" query parameter: ${sortBy}`);
    }
    return this.release;
  }

  getSearchBy(query: any): string {
    const { searchBy } = query;

    if (searchBy) {
      if (searchBy === TITLE || searchBy === GENRE) {
        return searchBy;
      }
      throw new Error(`Invalid "searchBy" query parameter: ${searchBy}`);
    }
    return this.title;
  }

  getSearch(query: any): string {
    const { search } = query;

    if (search == null) {
      return this.EMPTY;
    }
    return search;
  }

  getOffset(offset?: number): number {
    if (offset == null) {
      return this.ZERO;
    }
    return offset;
  }

  getRouteQuerySearchOptions(query: any, offset?: number): URLSearchParams {
    const params = new URLSearchParams();
    params.append('searchBy', this.getSearchBy(query));
    params.append('sortBy', this.getSortBy(query));
    params.append('search', this.getSearch(query));
    params.append('offset', this.getOffset(offset).toString(10));
    params.append('limit', LIMIT.toString(10));
    params.append('sortOrder', DESC);
    return params;
  }

  getSimilarGenreSearchOptions(genre: string, offset?: number): URLSearchParams {
    const params = new URLSearchParams();
    params.append('searchBy', GENRE);
    params.append('sortBy', RELEASE);
    params.append('search', genre);
    params.append('offset', this.getOffset(offset).toString(10));
    params.append('limit', LIMIT.toString(10));
    params.append('sortOrder', DESC);
    return params;
  }
}

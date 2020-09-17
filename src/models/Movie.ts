import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject('Movie')
export class Movie {
  @JsonProperty('id', Number)
  id = 0;

  @JsonProperty('title', String)
  title = '';

  @JsonProperty('tagline', String)
  tagline = '';

  @JsonProperty('overview', String)
  overview = '';

  @JsonProperty('release_date', String)
  releaseDate = '';

  @JsonProperty('vote_average', Number)
  voteAverage = 0;

  @JsonProperty('vote_count', Number)
  voteCount = 0;

  @JsonProperty('runtime', Number)
  runtime = 0;

  @JsonProperty('poster_path', String)
  posterPath = '';

  @JsonProperty('budget', Number)
  budget = 0;

  @JsonProperty('revenue', Number)
  revenue = 0;

  @JsonProperty('genres', [String])
  genres: Array<string> = [];
}

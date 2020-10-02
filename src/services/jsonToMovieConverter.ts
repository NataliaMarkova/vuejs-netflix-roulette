import { JsonConvert, OperationMode, ValueCheckingMode } from 'json2typescript';
import { Movie } from '@/models/Movie';

export class JsonToMovieConverter {
  private jsonConvert: JsonConvert;

  constructor() {
    this.jsonConvert = new JsonConvert();
    this.jsonConvert.operationMode = OperationMode.ENABLE;
    this.jsonConvert.ignorePrimitiveChecks = false;
    this.jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL;
  }

  public convert(data: unknown): Movie {
    try {
      return this.jsonConvert.deserializeObject(data, Movie);
    } catch (e) {
      return new Movie();
    }
  }

  public convertToArray(json: unknown[]): Movie[] {
    try {
      return this.jsonConvert.deserializeArray(json, Movie);
    } catch (e) {
      return [];
    }
  }
}

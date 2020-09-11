import { JsonConvert, OperationMode, ValueCheckingMode } from 'json2typescript';
import { Movie } from '@/models/Movie';

export class JsonToMovieConverter {
  private jsonConvert: JsonConvert;

  constructor() {
    this.jsonConvert = new JsonConvert();
    this.jsonConvert.operationMode = OperationMode.LOGGING;
    this.jsonConvert.ignorePrimitiveChecks = false;
    this.jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL;
  }

  public convertToMovieArray(json: any[]): Movie[] {
    try {
      return this.jsonConvert.deserializeArray(json, Movie);
    } catch (e) {
      return [];
    }
  }
}

export class Movie {
  id: number;

  title: string;

  description?: string;

  longDescription?: string;

  remark?: string;

  year: number;

  rating?: number;

  duration?: number;

  image?: string;

  constructor(title: string, year: number) {
    this.id = -1;
    this.title = title;
    this.year = year;
  }
}

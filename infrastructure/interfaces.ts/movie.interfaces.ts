export interface Movie {
  id: number;
  title: string;
  description: string;
  releaseDate: Date;
  rating: number;
  poster: string;
  backdrop: string;
}

export interface movieById extends Movie {
  genres: string[];
  duraction: number;
  budget: number;
  originaltitle: string;
  productionCompanies: string[];
}

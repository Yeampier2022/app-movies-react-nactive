import { MovieIdDBResponse } from "../interfaces.ts/movie-by-id";
import { Movie, movieById } from "../interfaces.ts/movie.interfaces";
import { Result } from "../interfaces.ts/moviesdb-response";

export class MovieMapper {
  static fromTheMovieDBToMovie = (movie: Result): Movie => {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      rating: movie.vote_average,
      releaseDate: movie.release_date,
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
    };
  };

  static fromTheMovieDBToMovieByid = (movie: MovieIdDBResponse): movieById => {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      rating: movie.vote_average,
      releaseDate: movie.release_date,
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
      budget: movie.budget,
      duraction: movie.runtime,
      genres: movie.genres.map((g) => g.name),
      originaltitle: movie.original_title,
      productionCompanies: movie.production_companies.map((c) => c.name),
    };
  };
}

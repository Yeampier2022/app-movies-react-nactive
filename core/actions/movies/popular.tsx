import { movieApp } from "@/core/api/movie-api";
import { moviesDB } from "@/infrastructure/interfaces.ts/moviesdb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

const popularMovieAction = async () => {
  try {
    const { data } = await movieApp.get<moviesDB>("/popular");

    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);
    return movies;
  } catch (error) {
    console.error(error);
  }
};

export default popularMovieAction;

import { movieApp } from "@/core/api/movie-api";
import { moviesDB } from "@/infrastructure/interfaces.ts/moviesdb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

interface Option {
  page?: number;
  limit?: number;
}
export const ratedMovieAction = async ({ page, limit }: Option) => {
  try {
    const { data } = await movieApp.get<moviesDB>("/top_rated", {
      params: {
        page: page,
      },
    });

    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);
    return movies;
  } catch (error) {
    console.error(error);
  }
};

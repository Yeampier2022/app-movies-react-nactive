import { movieApp } from "@/core/api/movie-api";
import { MovieIdDBResponse } from "@/infrastructure/interfaces.ts/movie-by-id";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const getMovieById = async (id: string | number) => {
  try {
    const { data } = await movieApp.get<MovieIdDBResponse>(`/${id}`);
    console.log(data);
    console.log("cargada");

    return MovieMapper.fromTheMovieDBToMovieByid(data);
    // return data;
  } catch (error) {
    console.error(error);
  }
};

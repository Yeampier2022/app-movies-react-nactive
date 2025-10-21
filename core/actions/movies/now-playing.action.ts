import { movieApp } from "@/core/api/movie-api";
import { moviesDB } from "@/infrastructure/interfaces.ts/moviesdb-response";

export const nowPlayingAction = async () => {
  try {
    const { data } = await movieApp.get<moviesDB>("/now_playing");
    console.log(data.results[0]);

    return data;
  } catch (error) {
    console.log(error);
    throw "Error now movies";
  }
};

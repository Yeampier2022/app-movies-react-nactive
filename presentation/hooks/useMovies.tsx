import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import popularMovieAction from "@/core/actions/movies/popular";
import { useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  const popularPlayingQuery = useQuery({
    queryKey: ["movies", "nowPlaying"],
    queryFn: () => popularMovieAction(),
    staleTime: 1000 * 60 * 60 * 24,
  });

  const nowPlayingQuery = useQuery({
    queryKey: ["movies", "nowPlaying"],
    queryFn: () => nowPlayingAction(),
    staleTime: 1000 * 60 * 60 * 24,
  });

  return {
    nowPlayingQuery,
    popularPlayingQuery,
  };
};

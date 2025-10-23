import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import { popularMovieAction } from "@/core/actions/movies/popular.action";
import { ratedMovieAction } from "@/core/actions/movies/rated-action";
import { upcomingMovieAction } from "@/core/actions/movies/upcoming.action";

import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  const ratedMovieQuery = useInfiniteQuery({
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => pages.length + 1,
    queryKey: ["movies", "rated"],
    queryFn: ({ pageParam }) => {
      console.log(pageParam);
      return ratedMovieAction({ page: pageParam });
    },
    staleTime: 1000 * 60 * 60 * 24,
  });
  const upcomingMovieQuery = useQuery({
    queryKey: ["movies", "upcoming"],
    queryFn: () => upcomingMovieAction(),
    staleTime: 1000 * 60 * 60 * 24,
  });
  const popularPlayingQuery = useQuery({
    queryKey: ["movies", "popular"],
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
    ratedMovieQuery,
    upcomingMovieQuery,
  };
};

import { getMovieById } from "@/core/actions/movies/get-movie-by-id.action";
import { useQuery } from "@tanstack/react-query";

export const usemovieById = (id: number) => {
  const movieByIdQuery = useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovieById(id),
    staleTime: 1000 * 60 * 60 * 24,
  });

  return {
    movieByIdQuery,
  };
};

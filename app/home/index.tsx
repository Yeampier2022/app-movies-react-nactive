import MainSlidesHow from "@/presentation/components/movies/MainSlidesHow";
import MovieHorizontalList from "@/presentation/components/movies/MovieHorizontalList";
import { useMovies } from "@/presentation/hooks/useMovies";
import * as React from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const {
    nowPlayingQuery,
    popularPlayingQuery,
    upcomingMovieQuery,
    ratedMovieQuery,
  } = useMovies();
  const safeAre = useSafeAreaInsets();

  if (nowPlayingQuery.isLoading) {
    <View className="flex-1 justify-center items-center">
      <ActivityIndicator color={"purple"} size={40} />
    </View>;
  }

  return (
    <ScrollView>
      <View className="mt-2 pb-10" style={{ paddingTop: safeAre.top }}>
        <Text>Movies APP</Text>
        <MainSlidesHow movies={nowPlayingQuery?.data ?? []} />
        <MovieHorizontalList
          classname="mb-5"
          title="Populares"
          movies={popularPlayingQuery.data ?? []}
        />
        <MovieHorizontalList
          classname="mb-5"
          title="Top de peliculas "
          movies={ratedMovieQuery.data ?? []}
        />
        <MovieHorizontalList
          classname="mb-5"
          title="Proximamente"
          movies={upcomingMovieQuery.data ?? []}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

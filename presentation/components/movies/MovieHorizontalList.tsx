import { Movie } from "@/infrastructure/interfaces.ts/movie.interfaces";
import { useEffect, useRef } from "react";
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from "react-native";
import MoviePoster from "./MoviePoster";

interface Props {
  movies: Movie[];
  title?: string;
  classname?: string;

  loadNextPage?: () => void;
}

const MovieHorizontalList = ({
  movies,
  title,
  classname,
  loadNextPage,
}: Props) => {
  const isLoading = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [movies]);
  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;
    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
    const isEndReached =
      (contentOffset.x, layoutMeasurement.width + 600) >= contentSize.width;

    if (!isEndReached) return true;

    isLoading.current = true;
    console.log("Carga paginas");

    loadNextPage && loadNextPage();
  };
  return (
    <View className={`${classname}`}>
      <Text className="text-3xl font-bold px-4 mb-2">{title}</Text>
      <FlatList
        data={movies}
        keyExtractor={(item, i) => `${item.id}-${i}`}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster />
        )}
        horizontal
        onScroll={onScroll}
      ></FlatList>
    </View>
  );
};

export default MovieHorizontalList;

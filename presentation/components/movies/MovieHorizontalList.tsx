import { Movie } from "@/infrastructure/interfaces.ts/movie.interfaces";
import { FlatList, Text, View } from "react-native";
import MoviePoster from "./MoviePoster";

interface Props {
  movies: Movie[];
  title?: string;
  classname?: string;
}

const MovieHorizontalList = ({ movies, title, classname }: Props) => {
  return (
    <View className={`${classname}`}>
      <Text className="text-3xl font-bold px-4 mb-2">{title}</Text>
      <FlatList
        horizontal
        keyExtractor={(item) => `${item.id}`}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster />
        )}
        data={movies}
      ></FlatList>
    </View>
  );
};

export default MovieHorizontalList;

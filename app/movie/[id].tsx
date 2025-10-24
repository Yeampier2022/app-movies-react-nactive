import MovieHeader from "@/presentation/components/movies/MovieHeader";
import { usemovieById } from "@/presentation/hooks/usemovieById";
import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";

const movieId = () => {
  const { id } = useLocalSearchParams();

  const { movieByIdQuery } = usemovieById(+id);

  if (movieByIdQuery.isLoading || !movieByIdQuery.data) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="mb-4">Espere por favor</Text>

        <ActivityIndicator color={"purple"} size={40} />
      </View>
    );
  }
  return (
    <ScrollView>
      <MovieHeader
        title={movieByIdQuery.data?.title}
        poster={movieByIdQuery.data?.poster}
        originalTitle={movieByIdQuery.data?.title}
      />
    </ScrollView>
  );
};

export default movieId;

import { usemovieById } from "@/presentation/hooks/usemovieById";
import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";

const movieId = () => {
  const { id } = useLocalSearchParams();

  const { movieByIdQuery } = usemovieById(+id);

  if (movieByIdQuery.isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="mb-4">Espere por favor</Text>

        <ActivityIndicator color={"purple"} size={40} />
      </View>
    );
  }
  return (
    <ScrollView>
      <Text>{movieByIdQuery.data?.title ?? ""}</Text>
      <Text>{movieByIdQuery.data?.genres ?? ""}</Text>
      <Text>{movieByIdQuery.data?.description ?? ""}</Text>
      <Text>{movieByIdQuery.data?.description ?? ""}</Text>

    </ScrollView>
  );
};

export default movieId;

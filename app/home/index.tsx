import { useMovies } from "@/presentation/hooks/useMovies";
import { ActivityIndicator, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const { nowPlayingQuery } = useMovies();
  const safeAre = useSafeAreaInsets();

  if (nowPlayingQuery.isLoading) {
    <View className="flex-1 justify-center items-center">
      <ActivityIndicator color={"purple"} size={40} />
    </View>;
  }

  return (
    <View className="mt-2" style={{ paddingTop: safeAre.top }}>
      <Text>{JSON.stringify(nowPlayingQuery.data)}</Text>
    </View>
  );
};

export default HomeScreen;

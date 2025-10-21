import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import { Text, View } from "react-native";
import "../global.css";
const RootLayout = () => {


  nowPlayingAction()
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
    </View>
  );
};

export default RootLayout;

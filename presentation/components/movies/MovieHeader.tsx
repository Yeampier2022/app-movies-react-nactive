import React from "react";
import {
  Image,
  Pressable,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";

interface Props {
  poster: string;
  originalTitle: string;
  title: string;
}
const MovieHeader = ({ poster, originalTitle, title }: Props) => {
  const { height: screenHeight } = useWindowDimensions();
  return (
    <>
      <View
        style={{
          position: "absolute",
          zIndex: 99,
          elevation: 9,
          top: 40,
          left: 10,
        }}
      >
        <Pressable onPress={() => router.dismiss()}>
          <Ionicons
            name="arrow-back"
            color="white"
            className="shadow"
            size={30}
          />
        </Pressable>
      </View>
      <View
        style={{
          height: screenHeight * 0.7,
        }}
        className="shadow-xl shadow-black/20"
      >
        <View className="flex-1 rounded-b-[25] overflow-hidden">
          <Image
            className="flex-1"
            resizeMode="cover"
            source={{ uri: poster }}
          />
        </View>
        <View className="px-5 mt-5">
          <Text className="">{originalTitle}</Text>
          <Text className="font-bold text-2xl">{title}</Text>
        </View>
      </View>
    </>
  );
};

export default MovieHeader;

import { FormatterCurrency } from "@/core/helpers/formatterCurrency";
import { movieById } from "@/infrastructure/interfaces.ts/movie.interfaces";
import React from "react";
import { Text, View } from "react-native";

interface Props {
  movie: movieById;
}
const MovieDescription = ({ movie }: Props) => {
  return (
    <View className="mx-5">
      <View className="flex flex-row">
        <Text>Calificada: {movie.rating}</Text>

        <Text>Genero: {movie.genres.join(",")}</Text>
      </View>
      <Text className="font-bold mt-5">Historia</Text>
      <Text className="font-normal my-2">{movie.description}</Text>
      <Text className="font-bold mt-5">Presupuesto </Text>

      <Text className="font-bold mt-2 text-2xl">
        {FormatterCurrency.currency(movie.budget)}
      </Text>
    </View>
  );
};

export default MovieDescription;

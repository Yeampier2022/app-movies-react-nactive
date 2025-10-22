import { Movie } from "@/infrastructure/interfaces.ts/movie.interfaces";
import { useRef } from "react";
import { useWindowDimensions, View } from "react-native";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import MoviePster from "./MoviePoster";
interface Props {
  movies: Movie[];
}

const MainSlidesHow = ({ movies }: Props) => {
  const ref = useRef<ICarouselInstance>(null);

  const width = useWindowDimensions().width;
  return (
    <View className="h-[250] w-full flex-1">
      <Carousel
        ref={ref}
        renderItem={({ item }) => (
         <MoviePster poster={item.poster} id={item.id} />
        )}
        data={movies}
        width={200}
        height={350}
        style={{
          width: width,
          height: 350,
          justifyContent: "center",
          alignItems: "center",
        }}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        defaultIndex={1}
      />
    </View>
  );
};

export default MainSlidesHow;

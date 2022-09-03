import { Grid, Image, keyframes, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Anime {
  image: string;
  title: string;
}

interface ImageCardProps {
  anime: Anime;
}

const animate = keyframes`
  from {
    transform: translateY();
    opacity: 0;
  };
  to {
    transform: translateY();
    opacity: 1;
  }
`;

export const ImageCard = ({ anime }: ImageCardProps) => {
  const [over, setOver] = useState(false);

  const hoverEventOver = () => setOver(true);
  const hoverEventLeave = () => setOver(false);

  return (
    <Grid
      onMouseOver={hoverEventOver}
      onMouseLeave={hoverEventLeave}
      position="relative"
    >
      <Image
        src={anime.image}
        alt={anime.title}
        h="270px"
        maxW="210px"
        w="100%"
        cursor="pointer"
      />
      <Text
        maxW="210px"
        w="100%"
        display={over ? "auto" : "none"}
        position="absolute"
        bottom="0"
        textAlign="center"
        fontWeight="bold"
        color="white"
        backgroundColor="rgba(0, 0, 0, 0.8)"
        padding="2"
        animation={`${animate} 0.3s`}
      >
        {anime.title}
      </Text>
    </Grid>
  );
};

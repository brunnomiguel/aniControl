import { Grid, Image, keyframes, Text, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { ModalAnime } from "../../components/Modal/ModalAnime";
import { useFullAnimes } from "../../contexts/FullAnimes";
import { animeProps } from "../../contexts/FullAnimes/fullAnimes.types";

interface ImageCardProps {
  anime: animeProps;
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

  const { onOpen, onClose, isOpen } = useDisclosure();

  const { getLinksExternal, getLinksStreaming } = useFullAnimes();

  const handleClick = () => {
    onOpen();
    getLinksExternal(anime.mal_id);
    getLinksStreaming(anime.mal_id);
  };

  return (
    <>
      <Grid
        onMouseOver={hoverEventOver}
        onMouseLeave={hoverEventLeave}
        position="relative"
        onClick={handleClick}
        height="270px"
      >
        <Image
          src={anime.images.jpg.image_url}
          alt={anime.title}
          h="100%"
          maxH="270px"
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
      <ModalAnime onClose={onClose} isOpen={isOpen} anime={anime} />
    </>
  );
};

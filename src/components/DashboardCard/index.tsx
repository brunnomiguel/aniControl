import { CardContent } from "./CardContent";
import { ModalDashboard } from "../Modal/ModalDashboard";

import { Box, useDisclosure, useToast } from "@chakra-ui/react";

import { useAnimeList } from "../../contexts/AnimeList";
import { animeProps } from "../../contexts/FullAnimes/fullAnimes.types";

interface IAnimeInfo {
  anime: { data: animeProps };
  status: string;
  rating: number;
  episodes: number;
  userId: number;
  favorite: boolean;
  id: number;
}

interface IDashboardCardProps {
  anime: IAnimeInfo;
  id: number;
  favorite: boolean;
  setReswitch: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DashboardCard = ({
  anime,
  id,
  favorite,
  setReswitch,
}: IDashboardCardProps) => {
  const { episodes } = anime;
  const { data } = anime.anime;

  const { updateAnime, removeAnime } = useAnimeList();
  const toast = useToast();

  const handleFavoriteAnime = () => {
    updateAnime({ favorite: !favorite }, id);
    setReswitch(true);

    if (anime.favorite === true) {
      toast({
        title: "Removed",
        description: "Anime unfavorited!",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: "Anime Favorited!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }

    setTimeout(() => {
      setReswitch(false);
    }, 500);
  };

  const handleDeleteAnime = () => {
    removeAnime(id);
    setReswitch(true);

    toast({
      title: "Removed",
      description: "Anime removed with sucess!",
      status: "info",
      duration: 2000,
      isClosable: true,
    });

    setTimeout(() => {
      setReswitch(false);
    }, 500);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box width={["95vw", "95vw", "95vw", "33vw"]}>
      <CardContent
        anime={data}
        episode={episodes}
        handleFavoriteAnime={handleFavoriteAnime}
        handleDeleteAnime={handleDeleteAnime}
        onClick={onOpen}
        status={anime.status}
      />
      <ModalDashboard
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        anime={anime}
      />
    </Box>
  );
};

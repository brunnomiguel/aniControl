import { CardContent } from "./CardContent";
import { ModalDashboard } from "../Modal/ModalDashboard";

import { Box, useDisclosure } from "@chakra-ui/react";

import { useAnimeList } from "../../contexts/AnimeList";
import { Ianime } from "../../@types/components/fullAnimes.types";

interface IAnimeInfo {
  anime: { data: Ianime };
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

  const handleFavoriteAnime = () => {
    updateAnime({ favorite: !favorite }, id);
    setReswitch(true);

    setTimeout(() => {
      setReswitch(false);
    }, 500);
  };

  const handleDeleteAnime = () => {
    removeAnime(id);
    setReswitch(true);

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

import { animeProps } from "../../contexts/FullAnimes/fullAnimes.types";
import { useEffect, useState } from "react";
import { MobileViewCard } from "./MobileViewCard";
import { DesktopViewCard } from "./DesktopViewCard";
import { Box } from "@chakra-ui/react";
import { useAnimeList } from "../../contexts/AnimeList";

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

export const DashboardCard = ({ anime, id, favorite, setReswitch }: IDashboardCardProps) => {
  const [smallView, setSmallView] = useState(false);

  const { episodes } = anime;
  const { data } = anime.anime;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSmallView(true);
      } else {
        setSmallView(false);
      }
    };

    window.addEventListener("resize", handleResize);
  }, []);

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

  return (
    <Box width={["95vw", "95vw", "95vw", "33vw"]}>
      {smallView ? (
        <MobileViewCard
          anime={data}
          episode={episodes}
          handleFavoriteAnime={handleFavoriteAnime}
          handleDeleteAnime={handleDeleteAnime}
        />
      ) : (
        <DesktopViewCard
          anime={data}
          episode={episodes}
          handleFavoriteAnime={handleFavoriteAnime}
          handleDeleteAnime={handleDeleteAnime}
        />
      )}
    </Box>
  );
};

import { Box } from "@chakra-ui/react";

import { TopAnimeView } from "./TopAnimeView";

import { animeProps } from "../../contexts/FullAnimes/fullAnimes.types";

interface IDashboardCardProps {
  anime: animeProps;
}

export const BrowseCard = ({ anime }: IDashboardCardProps) => {
  return (
    <Box filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.35))" m="2">
      <TopAnimeView anime={anime} />
    </Box>
  );
};

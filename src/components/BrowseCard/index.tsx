import { Box } from "@chakra-ui/react";

import { TopAnimeView } from "./TopAnimeView";

import { Ianime } from "../../@types/components/fullAnimes.types";

interface IDashboardCardProps {
  anime: Ianime;
}

export const BrowseCard = ({ anime }: IDashboardCardProps) => {
  return (
    <Box filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.35))" m="2">
      <TopAnimeView anime={anime} />
    </Box>
  );
};

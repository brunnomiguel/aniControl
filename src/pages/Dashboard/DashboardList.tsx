import { HStack } from "@chakra-ui/react";
import { useEffect } from "react";

import { ColumnList } from "../../components/ColumnList";
import { useAnimeList } from "../../contexts/AnimeList";

export const DashboardList = () => {
  const { userAnimes, getUserAnimes, addAnime } = useAnimeList();

  useEffect(() => {
    getUserAnimes();
  }, []);

  return (
    <HStack
      padding="1%"
      spacing={10}
      overflowX="scroll"
      h="93vh"
      css={{
        "&::-webkit-scrollbar": {
          width: "6px",
          height: "4px",
        },
        "&::-webkit-scrollbar-track": {
          width: "6px",
          height: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#5CC6DC",
          borderRadius: "24px",
        },
      }}
    >
      <ColumnList title="Plan to Watch" cardList={userAnimes} />
      <ColumnList title="Watching" cardList={[]} />
      <ColumnList title="On-Hold" cardList={[]} />
      <ColumnList title="Completed" cardList={[]} />
      <ColumnList title="Dropped" cardList={[]} />
    </HStack>
  );
};

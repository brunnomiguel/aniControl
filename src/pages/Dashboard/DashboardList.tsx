import { HStack, theme } from "@chakra-ui/react";
import { useEffect } from "react";

import { ColumnList } from "../../components/ColumnList";
import { useAnimeList } from "../../contexts/AnimeList";

export const DashboardList = () => {
  const { userAnimes, getUserAnimes } = useAnimeList();

  useEffect(() => {
    getUserAnimes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          background: `${theme.colors.blue[50]}`,
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

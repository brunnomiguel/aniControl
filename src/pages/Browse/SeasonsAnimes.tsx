import { Flex, Grid, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { BrowseCard } from "../../components/BrowseCard";
import { useFullAnimes } from "../../contexts/FullAnimes";

export const SeasonsAnimes = () => {
  const { seasonsAnimes, getSeasonsAnimes } = useFullAnimes();

  useEffect(() => {
    getSeasonsAnimes();
  }, []);

  return (
    <Grid
      bg="grey.600"
      w={["100%", "100%", "500px"]}
      h={["370px", "370px", "600px"]}
      mb="6"
    >
      <Heading
        as="h2"
        fontSize="4xl"
        textAlign={["left", "left", "center"]}
        padding="2"
        ml={["2", "2", "0"]}
      >
        Seasons Animes
      </Heading>
      <Flex
        flexDirection={["row", "row", "column", "column"]}
        overflowX={["auto", "auto", "hidden"]}
        overflowY={["hidden", "hidden", "auto"]}
        css={[
          {
            "&::-webkit-scrollbar": {
              height: "4px",
            },
            "&::-webkit-scrollbar-track": {
              height: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#5CC6DC",
              borderRadius: "24px",
            },
          },
          {
            "&::-webkit-scrollbar": {
              height: "4px",
            },
            "&::-webkit-scrollbar-track": {
              height: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#5CC6DC",
              borderRadius: "24px",
            },
          },
          {
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-track": {
              width: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#5CC6DC",
              borderRadius: "24px",
            },
          },
        ]}
      >
        {seasonsAnimes.map((anime) => {
          return <BrowseCard key={anime.mal_id} anime={anime} />;
        })}
      </Flex>
    </Grid>
  );
};

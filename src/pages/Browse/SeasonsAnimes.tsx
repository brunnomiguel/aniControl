import { Flex, Grid, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BrowseCard } from "../../components/BrowseCard";
import { CardAnimeSkeleton } from "../../components/Skeleton/CardAnimeSkeleton";
import { useFullAnimes } from "../../contexts/FullAnimes";
import { theme } from "../../styles/theme";

export const SeasonsAnimes = () => {
  const [loading, setLoading] = useState(true);

  const { seasonsAnimes, getSeasonsAnimes } = useFullAnimes();

  useEffect(() => {
    getSeasonsAnimes().then((_) => setLoading(false));
  }, []);

  return (
    <Grid
      bg="grey.600"
      w={["100%", "100%", "500px"]}
      h={["370px", "370px", "87%"]}
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
              background: `${theme.colors.blue[50]}`,
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
              background: `${theme.colors.blue[50]}`,
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
              background: `${theme.colors.blue[50]}`,
              borderRadius: "24px",
            },
          },
        ]}
      >
        {loading ? (
          <CardAnimeSkeleton repeatCount={10} />
        ) : (
          seasonsAnimes.map((anime) => {
            return <BrowseCard key={anime.mal_id} anime={anime} />;
          })
        )}
      </Flex>
    </Grid>
  );
};

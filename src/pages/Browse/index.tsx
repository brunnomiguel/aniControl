import { Flex, Grid, useBreakpointValue, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { useFullAnimes } from "../../contexts/FullAnimes";
import { ImageCard } from "./ImageCard";
import { TopAnimes } from "./TopAnimes";
import { SeasonsAnimes } from "./SeasonsAnimes";
import { BrowseVideos } from "../../components/BrowseVideo";
import { arrayVideo } from "../../components/BrowseVideo/videos";
import { Pagination } from "./Pagination";

export const Browse = () => {
  const { allAnimes, getAllAnimes } = useFullAnimes();
  const [page, setPage] = useState(1);

  const previusPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    getAllAnimes(page);
  }, [page]);

  const isWideVersion = useBreakpointValue({
    base: false,
    xl: true,
  });

  return (
    <>
      <Header />
      {isWideVersion && <BrowseVideos arrayVideo={arrayVideo} />}
      <Flex
        flexDirection="column"
        bgColor="grey.700"
        padding={["2", "2", "10"]}
        w="100%"
        minH="100vh"
      >
        <Flex
          w="100%"
          justifyContent="space-between"
          direction={["column-reverse", "column-reverse", "row", "row"]}
          pb="10"
        >
          <Grid
            w="100%"
            templateColumns="repeat(auto-fill, minmax(210px, 1fr))"
            gap="10"
            justifyItems="center"
          >
            {allAnimes?.map((anime) => {
              return <ImageCard key={anime.mal_id} anime={anime} />;
            })}
          </Grid>
          <VStack h="90vh" w={["100%", "100%", "500px"]}>
            <TopAnimes />
            <SeasonsAnimes />
          </VStack>
        </Flex>
        <Flex w="100%" justifyContent="center" alignItems="center">
          <Pagination page={page} previusPage={previusPage} setPage={setPage} />
        </Flex>
      </Flex>
    </>
  );
};

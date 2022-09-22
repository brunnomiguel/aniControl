import { Flex, Grid, useBreakpointValue, VStack } from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { useFullAnimes } from "../../contexts/FullAnimes";

import { Header } from "../../components/Header";
import { BrowseVideos } from "../../components/BrowseVideo";
import { arrayVideo } from "../../components/BrowseVideo/videos";
import { ImageCardSkeleton } from "../../components/Skeleton/ImageCardSkeleton";

import { ImageCard } from "./ImageCard";
import { TopAnimes } from "./TopAnimes";
import { Pagination } from "./Pagination";
import { SeasonsAnimes } from "./SeasonsAnimes";

export const Browse = () => {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const { allAnimes, getAllAnimes } = useFullAnimes();

  const previusPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    getAllAnimes(page).then((_) => setLoading(false));
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
            {loading ? (
              <ImageCardSkeleton repeatCount={25} />
            ) : (
              allAnimes?.map((anime) => {
                return <ImageCard key={anime.mal_id} anime={anime} />;
              })
            )}
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

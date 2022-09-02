import { Center, Flex, Grid, Text } from "@chakra-ui/react";
import { BiFirstPage, BiLastPage } from "react-icons/bi";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { useFullAnimes } from "../../contexts/FullAnimes";
import { ImageCard } from "./ImageCard";
import { TopAnimes } from "./TopAnimes";
import { SeasonsAnimes } from "./SeasonsAnimes";

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

  return (
    <>
      <Header />
      <Flex
        flexDirection="column"
        bgColor="grey.700"
        padding={["2", "2", "10"]}
        w="100vw"
        minH="100vh"
      >
        <Flex
          w="100%"
          justifyContent="space-between"
          direction={["column-reverse", "column-reverse", "row", "row"]}
        >
          <Grid
            w="100%"
            templateColumns="repeat(auto-fill, minmax(210px, 1fr))"
            gap="10"
          >
            {allAnimes?.map((anime) => {
              return (
                <ImageCard
                  key={anime.mal_id}
                  anime={{
                    image: anime.images.jpg.image_url,
                    title: anime.title,
                  }}
                />
              );
            })}
          </Grid>
          <Grid h="90vh" w={["100%", "100%", "500px"]}>
            <TopAnimes />
            <SeasonsAnimes />
          </Grid>
        </Flex>
        <Flex>
          <Center onClick={previusPage}>
            <BiFirstPage />
          </Center>
          <Text>{page}</Text>
          <Center onClick={() => setPage(page + 1)}>
            <BiLastPage />
          </Center>
        </Flex>
      </Flex>
    </>
  );
};

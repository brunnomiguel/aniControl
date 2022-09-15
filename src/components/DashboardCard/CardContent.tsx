import {
  Badge,
  Box,
  Center,
  Flex,
  Image,
  Link,
  Progress,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

import { theme } from "../../styles/theme";
import { animeProps } from "../../contexts/FullAnimes/fullAnimes.types";
import { CardButtons } from "./CardButtons";
import { CardInfo } from "./CardInfo";

interface IDashboardCardProps {
  anime: animeProps;
  episode: number;
  handleFavoriteAnime: () => void;
  handleDeleteAnime: () => void;
  onClick: () => void;
  status: string;
}

export const CardContent = ({
  anime,
  episode,
  handleDeleteAnime,
  handleFavoriteAnime,
  onClick,
  status,
}: IDashboardCardProps) => {
  const { images, trailer, title, rating, score, synopsis, year, genres } =
    anime;

  const handleOnOpen = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target !== e.currentTarget) {
      return;
    }

    onClick();
  };

  const handleBorderColor = (status: string) => {
    switch (status) {
      case "planToWatch":
        return theme.colors.grey[0];
      case "dropped":
        return theme.colors.red[50];
      case "onHold":
        return theme.colors.yellow[50];
      case "completed":
        return theme.colors.blue[100];
      case "watching":
        return theme.colors.green[50];
    }
  };

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Flex
      w="100%"
      h="auto"
      bg="grey.600"
      paddingBottom="5%"
      flexDir={["column", "column", "row", "row"]}
      borderRight={`0.3rem solid ${handleBorderColor(status)}`}
    >
      <Flex
        w="100%"
        align="center"
        paddingTop="4%"
        justifyContent="space-evenly"
        h={["20rem", "20rem", "25rem", "25rem"]}
      >
        <Link
          href={trailer.url}
          target="_blank"
          rel="noreferrer"
          h="96%"
          w={["50%", "50%"]}
        >
          <Image
            src={images.jpg.large_image_url}
            border="0.3rem solid"
            borderColor="blue.50"
            _hover={{ borderColor: "blue.400" }}
            h="100%"
            w="100%"
            transition={"0.2s all"}
          />
        </Link>
        {isWideVersion ? (
          <Box
            w="40%"
            h="100%"
            display="flex"
            flexDir="column"
            justifyContent="space-evenly"
          >
            <Text as="h2" fontWeight="bold" color="grey.0">
              {title}
            </Text>
            <CardInfo score={score} year={year} />
            <Badge
              fontWeight="bold"
              fontSize="0.5rem"
              bg="blue.50"
              alignSelf="flex-start"
            >
              {rating}
            </Badge>
            <Text
              color="grey.0"
              overflowX="hidden"
              overflowY="auto"
              h="8rem"
              css={{
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
              }}
              onClick={(e) => handleOnOpen(e)}
            >
              {synopsis}
            </Text>
            <Text mt="5%">
              Current Episode: {episode} /{" "}
              {anime.episodes === null ? "Still Airing" : anime.episodes}
            </Text>
            <Progress
              hasStripe
              value={episode}
              max={anime.episodes}
              mb="5%"
              colorScheme="red"
            />
            <Flex
              justify="flex-start"
              marginTop="2%"
              width={"100%"}
              flexWrap="wrap"
            >
              {genres &&
                genres.map((element, index) => {
                  return (
                    <Text
                      color="grey.0"
                      fontWeight="bold"
                      fontSize={12}
                      marginLeft="2%"
                      key={index}
                    >
                      {element.name}
                    </Text>
                  );
                })}
            </Flex>
            <CardButtons
              handleDeleteAnime={handleDeleteAnime}
              handleFavoriteAnime={handleFavoriteAnime}
            />
          </Box>
        ) : (
          <Box w="40%" h="100%">
            <Text as="h2" fontWeight="bold" color="grey.0">
              {title}
            </Text>
            <Text
              color="grey.0"
              overflowX="hidden"
              overflowY="auto"
              h="13rem"
              mt="10%"
              css={{
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
              }}
              onClick={(e) => handleOnOpen(e)}
            >
              {synopsis}
            </Text>
          </Box>
        )}
      </Flex>
      {!isWideVersion && (
        <>
          <CardInfo score={score} year={year} />
          <Badge
            fontWeight="bold"
            fontSize="0.5rem"
            bg="blue.50"
            w="auto"
            alignSelf="center"
          >
            {rating}
          </Badge>
          <Center flexDir={"column"}>
            <Text mt="5%" w={"75%"} textAlign="center">
              Current Episode: {episode} /
              {anime.episodes === null ? "Still Airing" : anime.episodes}
            </Text>
            <Progress
              hasStripe
              value={episode}
              max={anime.episodes}
              mb="5%"
              colorScheme="red"
              w={"75%"}
            />
          </Center>
          <Flex justify="space-evenly">
            {genres &&
              genres.map((element, index) => {
                return (
                  <Text
                    color="grey.0"
                    fontWeight="bold"
                    fontSize={12}
                    key={index}
                  >
                    {element.name}
                  </Text>
                );
              })}
          </Flex>
          <CardButtons
            handleDeleteAnime={handleDeleteAnime}
            handleFavoriteAnime={handleFavoriteAnime}
          />
        </>
      )}
    </Flex>
  );
};

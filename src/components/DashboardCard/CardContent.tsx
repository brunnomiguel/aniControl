import {
  Badge,
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Image,
  Link,
  Progress,
  Text,
  useBreakpointValue,
  //   VStack,
} from "@chakra-ui/react";

import { animeProps } from "../../contexts/FullAnimes/fullAnimes.types";
import { FaStar } from "react-icons/fa";
import { theme } from "../../styles/theme";

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
            <Flex
              color="grey.0"
              align="center"
              justify="flex-start"
              mt="5%"
              fontSize={12}
            >
              <FaStar fill="#EFDB73" />
              <Text fontWeight="bold">{score}</Text>
              <Text fontWeight="bold" ml="4%">
                Launching Year: {year}
              </Text>
            </Flex>
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
            <HStack w="100%" justifyContent="center" mt="1%">
              <Button
                justifyContent="space-evenly"
                w="50%"
                mr="3%"
                bg="blue.50"
                _hover={{ bg: "blue.400" }}
                _active={{ bg: "blue.50" }}
                color="grey.0"
                fontSize="0.75rem"
                onClick={handleFavoriteAnime}
              >
                <FaStar fill="#EFDB73" />
                Favorite
              </Button>
              <Button
                w="50%"
                bg="blue.50"
                _hover={{ bg: "blue.400" }}
                _active={{ bg: "blue.50" }}
                color="grey.0"
                fontSize="0.75rem"
                onClick={handleDeleteAnime}
              >
                Remove
              </Button>
            </HStack>
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
          <Flex
            color="grey.0"
            align="center"
            justify="center"
            mt="5%"
            fontSize={12}
          >
            <FaStar fill="#EFDB73" />
            <Text fontWeight="bold">{score}</Text>
            <Text fontWeight="bold" ml="4%">
              {year}
            </Text>
          </Flex>
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
          <HStack w="100%" justifyContent="center" mt="1%">
            <Button
              justifyContent="space-evenly"
              w="35%"
              mr="3%"
              bg="blue.50"
              _hover={{ bg: "blue.400" }}
              _active={{ bg: "blue.50" }}
              color="grey.0"
              onClick={handleFavoriteAnime}
            >
              <FaStar fill="#EFDB73" />
              Favorite
            </Button>
            <Button
              w="35%"
              bg="blue.50"
              _hover={{ bg: "blue.400" }}
              _active={{ bg: "blue.50" }}
              color="grey.0"
              onClick={handleDeleteAnime}
            >
              Remove
            </Button>
          </HStack>
        </>
      )}
    </Flex>
  );
};

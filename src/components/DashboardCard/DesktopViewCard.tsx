import { Badge, Box, Button, Flex, HStack, Image, Link, Text, theme, VStack } from "@chakra-ui/react";

import { animeProps } from "../../contexts/FullAnimes/fullAnimes.types";
import { FaStar } from "react-icons/fa";

interface IDashboardCardProps {
  anime: animeProps;
  handleFavoriteAnime: () => void;
  handleDeleteAnime: () => void;
}

export const DesktopViewCard = ({ anime, handleDeleteAnime, handleFavoriteAnime }: IDashboardCardProps) => {
  const { images, trailer, title, rating, score, synopsis, year, genres } = anime;

  return (
    <VStack w="100%" h="auto" bg="grey.600" paddingBottom="5%">
      <Flex w="100%" justifyContent="space-evenly" paddingTop="4%" h="25rem">
        <Link href={trailer.url} target="_blank" rel="noreferrer" h="96%" w={["50%", "50%"]}>
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
        <Box w="40%" h="100%">
          <Text as="h2" fontWeight="bold" color="grey.0">
            {title}
          </Text>
          <Flex color="grey.0" align="center" justify="flex-start" mt="5%" fontSize={12}>
            <FaStar fill="#EFDB73" />
            <Text fontWeight="bold">{score}</Text>
            <Text fontWeight="bold" ml="4%">
              Launching Year: {year}
            </Text>
          </Flex>
          <Badge fontWeight="bold" fontSize="0.5rem" bg="blue.50">
            {rating}
          </Badge>
          <Text
            color="grey.0"
            overflowX="hidden"
            overflowY="auto"
            h="15rem"
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
          >
            {synopsis}
          </Text>
          <Flex justify="flex-start" marginTop="2%" width={"100%"} flexWrap="wrap">
            {genres &&
              genres.map((element, index) => {
                return (
                  <Text color="grey.0" fontWeight="bold" fontSize={12} marginLeft="1%" key={index}>
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
      </Flex>
    </VStack>
  );
};

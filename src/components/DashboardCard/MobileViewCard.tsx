import { Badge, Box, Button, Flex, HStack, Image, Link, Text, theme } from "@chakra-ui/react";
import { animeProps } from "../../contexts/FullAnimes/fullAnimes.types";
import { FaStar } from "react-icons/fa";

interface IDashboardCardProps {
  anime: animeProps;

  handleFavoriteAnime: () => void;
  handleDeleteAnime: () => void;
}

export const MobileViewCard = ({ anime, handleDeleteAnime, handleFavoriteAnime }: IDashboardCardProps) => {
  const { images, trailer, title, rating, score, synopsis, year, genres } = anime;

  return (
    <Flex w="100%" flexDir="column" h="auto" bg="grey.600" paddingBottom="5%">
      <Flex w="100%" justifyContent="space-evenly" paddingTop="4%" h="20rem">
        <Link href={trailer.url} target="_blank" rel="noreferrer" h="100%" w={["50%", "50%"]}>
          <Image src={images.jpg.large_image_url} border="0.3rem solid" borderColor="blue.50" h="100%" w="100%" />
        </Link>
        <Box w="40%" h="100%">
          <Text as="h2" fontWeight="bold" color="grey.0">
            {title}
          </Text>
          <Text
            color="grey.0"
            overflowX="hidden"
            overflowY="auto"
            h="85%"
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
          >
            {synopsis}
          </Text>
        </Box>
      </Flex>
      <Flex color="grey.0" align="center" justify="center" mt="5%" fontSize={12}>
        <FaStar fill="#EFDB73" />
        <Text fontWeight="bold">{score}</Text>
        <Text fontWeight="bold" ml="4%">
          {year}
        </Text>
      </Flex>
      <Badge fontWeight="bold" fontSize="0.5rem" bg="blue.50" w="auto" alignSelf="center">
        {rating}
      </Badge>
      <Flex justify="space-evenly">
        {genres &&
          genres.map((element, index) => {
            return (
              <Text color="grey.0" fontWeight="bold" fontSize={12} key={index}>
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
    </Flex>
  );
};

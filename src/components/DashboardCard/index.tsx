import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { animeProps } from "./types";
import { FaStar } from "react-icons/fa";

interface IDashboardCardProps {
  anime: animeProps;
}

export const DashboardCard = ({ anime }: IDashboardCardProps) => {
  const { images, trailer, title, rating, score, synopsis, year, genres } =
    anime;

  return (
    <Flex w="100%" h="25%" bg="#2C2C38">
      <a href={trailer.url} target="_blank" rel="noreferrer">
        <Image src={images.jpg.large_image_url} />
      </a>
      <Box w="100%">
        <Text as="h2" fontWeight="bold" color="#FFFFFF">
          {title}
        </Text>
        <Flex align="center" justify="space-evenly" w="100%" color="#FFFFFF">
          <FaStar fill="#EFDB73" />
          <Text fontWeight="bold">{score}</Text>
          <Text fontWeight="bold">{year}</Text>
          <Text fontWeight="bold">{rating}</Text>
        </Flex>
        <Text color="#FFFFFF" overflowX="hidden" overflowY="auto">
          {synopsis}
        </Text>
        <Flex justify="space-evenly">
          {genres &&
            genres.map((element) => {
              return (
                <Text color="#FFFFFF" fontWeight="bold">
                  {element.name}
                </Text>
              );
            })}
        </Flex>
        <Flex w="25%" justifyContent="center">
          <Button
            justifyContent="space-evenly"
            w="35%"
            mr="3%"
            bg="#5CC6DC"
            _hover={{ bg: "#0C6072" }}
            _active={{ bg: "#5CC6DC" }}
            color="#FFFFFF"
          >
            <FaStar fill="#EFDB73" />
            Favorite
          </Button>
          <Button
            w="35%"
            bg="#5CC6DC"
            _hover={{ bg: "#0C6072" }}
            _active={{ bg: "#5CC6DC" }}
            color="#FFFFFF"
          >
            Remove
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

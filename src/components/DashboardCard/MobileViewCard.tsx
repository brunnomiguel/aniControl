import { Box, Button, Flex, HStack, Image, Link, Text } from "@chakra-ui/react";
import { animeProps } from "./types";
import { FaStar } from "react-icons/fa";

interface IDashboardCardProps {
  anime: animeProps;
}

export const MobileViewCard = ({ anime }: IDashboardCardProps) => {
  const { images, trailer, title, rating, score, synopsis, year, genres } =
    anime;

  return (
    <Flex w="100%" flexDir="column" h={["30%", "50%"]} bg="#2C2C38">
      <Flex w="100%" justifyContent="space-evenly" paddingTop="4%" h="70%">
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
            borderColor="#5CC6DC"
            h="100%"
            w="100%"
          />
        </Link>
        <Box w="40%" h="100%">
          <Text as="h2" fontWeight="bold" color="#FFFFFF">
            {title}
          </Text>
          <Text
            color="#FFFFFF"
            overflowX="hidden"
            overflowY="auto"
            h="85%"
            mt="10%"
          >
            {synopsis}
          </Text>
        </Box>
      </Flex>
      <Flex
        color="#ffffff"
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
        <Text fontWeight="bold" ml="4%">
          {rating}
        </Text>
      </Flex>
      <Flex justify="space-evenly">
        {genres &&
          genres.map((element) => {
            return (
              <Text color="#FFFFFF" fontWeight="bold" fontSize={12}>
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
      </HStack>
    </Flex>
  );
};

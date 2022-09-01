import { Box, Button, Flex, HStack, Image, Link, Text } from "@chakra-ui/react";
import { animeProps } from "./types";
import { FaStar } from "react-icons/fa";

interface IDashboardCardProps {
  anime: animeProps;
}

export const DesktopViewCard = ({ anime }: IDashboardCardProps) => {
  const { images, trailer, title, rating, score, synopsis, year, genres } =
    anime;

  return (
    <Flex w="100%" flexDir="column" h="auto" bg="#2C2C38" paddingBottom="2%">
      <Flex w="100%" justifyContent="space-evenly" paddingTop="4%" h="25rem">
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
          <Text color="#FFFFFF" overflowX="hidden" overflowY="auto" h="15rem">
            {synopsis}
          </Text>
          <Flex justify="flex-start" marginTop="2%">
            {genres &&
              genres.map((element) => {
                return (
                  <Text
                    color="#FFFFFF"
                    fontWeight="bold"
                    fontSize={12}
                    marginLeft="5%"
                  >
                    {element.name}
                  </Text>
                );
              })}
          </Flex>
          <HStack w="100%" justifyContent="center" mt="1%">
            <Button
              justifyContent="space-evenly"
              w="40%"
              mr="3%"
              bg="#5CC6DC"
              _hover={{ bg: "#0C6072" }}
              _active={{ bg: "#5CC6DC" }}
              color="#FFFFFF"
            >
              <FaStar fill="#EFDB73" size={20} />
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
        </Box>
      </Flex>
    </Flex>
  );
};

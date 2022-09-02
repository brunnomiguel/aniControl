import { Box, Flex, Image, Link, Text, VStack, HStack } from "@chakra-ui/react";

import { animeProps } from "../../contexts/FullAnimes/fullAnimes.types";
import { FaStar } from "react-icons/fa";

interface IDashboardCardProps {
  anime: animeProps;
}

export const TopAnimeView = ({ anime }: IDashboardCardProps) => {
  const { images, trailer, title, score, synopsis, year, genres } = anime;

  return (
    <VStack bg="grey.600" w={["350px", "350px", "100%", "100%"]} mr="2">
      <Flex justifyContent="space-around" padding="5%">
        <Link href={trailer.url} target="_blank" rel="noreferrer" mr="2">
          <Image
            src={images.jpg.image_url}
            border="0.3rem solid"
            borderColor="blue.50"
            _hover={{ borderColor: "blue.400" }}
            maxW="170px"
            maxH="220px"
            h="100%"
            w="100%"
            transition="0.2s all"
          />
        </Link>
        <Box w="60%" h="100%">
          <Text as="h2" fontWeight="bold" color="grey.0">
            {title}
          </Text>
          <Text
            color="grey.0"
            overflowX="hidden"
            overflowY="auto"
            h="5rem"
            mt="4"
            css={{
              "&::-webkit-scrollbar": {
                width: "4px",
              },
              "&::-webkit-scrollbar-track": {
                width: "6px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "blue.50",
                borderRadius: "24px",
              },
            }}
          >
            {synopsis}
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
            <Text fontWeight="500" ml="1" fontSize="xs">
              Launching Year: {year}
            </Text>
          </Flex>
          <HStack spacing="2" marginTop="2%">
            {genres &&
              genres.map((element, index) => {
                return (
                  <Text key={index} color="grey.0" fontSize="xs">
                    {element.name}
                  </Text>
                );
              })}
          </HStack>
        </Box>
      </Flex>
    </VStack>
  );
};

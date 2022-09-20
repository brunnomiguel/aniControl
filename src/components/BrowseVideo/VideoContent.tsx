import { Box, Button, Heading, HStack, Text } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

interface videoItem {
  name: string;
  synopsis: string;
  rating: number;
  year: number;
  genres: string[];
  video: string;
  id: number;
}

interface IvideoContent {
  videoObject: videoItem;
}

export const VideoContent = ({ videoObject }: IvideoContent) => {
  return (
    <Box
      p="10"
      w="800px"
      top="27.5%"
      left="15%"
      position="absolute"
      bg="rgba(0, 0, 0, 0.61)"
      borderRadius="16px"
      shadow="0 4px 5px rgba(0, 0, 0, 0.9)"
      zIndex="3"
    >
      <Heading fontWeight="semibold" as="h1">
        {videoObject.name}
      </Heading>
      <Text
        fontWeight="light"
        color="grey.0"
        overflowX="hidden"
        overflowY="auto"
        h="10rem"
        w="700px"
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
        {videoObject.synopsis}
      </Text>
      <Button
        fontWeight="semibold"
        w="200px"
        bg="red.600"
        mt="6"
        _hover={{ bg: "pink.800" }}
      >
        Add
      </Button>
      <HStack spacing="4" mt="6" alignItems="center">
        <FaStar fill="#EFDB73" />
        <Text fontWeight="thin">{videoObject.rating}</Text>
        <Text fontWeight="thin">Launching Year: {videoObject.year}</Text>
        {videoObject.genres &&
          videoObject.genres.map((element: string, index: number) => {
            return (
              <Text fontWeight="thin" key={index} color="grey.0" fontSize="sm">
                {element}
              </Text>
            );
          })}
      </HStack>
    </Box>
  );
};

import {
  Button,
  Center,
  Divider,
  Flex,
  Grid,
  HStack,
  Image,
  Link,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

import { FaLink, FaPlus, FaStar, FaTimes } from "react-icons/fa";
import { FiTv } from "react-icons/fi";
import { useAnimeList } from "../../contexts/AnimeList";
import { useFullAnimes } from "../../contexts/FullAnimes";
import { animeProps } from "../../contexts/FullAnimes/fullAnimes.types";
import { theme } from "../../styles/theme";

interface ModalTaskDetailProps {
  isOpen: boolean;
  onClose: () => void;
  anime: animeProps;
}

export const ModalAnime = ({
  isOpen,
  onClose,
  anime,
}: ModalTaskDetailProps) => {
  const { addAnime } = useAnimeList();
  const { linksExternal, linksStreaming } = useFullAnimes();

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay bg="rgba(0, 0, 0, 0.8)" />
      <ModalContent
        bg="grey.700"
        maxW="1200px"
        w="100%"
        m="2"
        p={["2", "2", "4"]}
        h={["80%", "80%", "500px", "500px"]}
      >
        {anime && (
          <Flex
            flexDirection={["column", "column", "row", "row"]}
            alignItems="center"
            justifyContent={[
              "normal",
              "normal",
              "space-around",
              "space-around",
            ]}
            h="100%"
            position="relative"
          >
            <Link
              href={anime.trailer.url}
              target="_blank"
              rel="noreferrer"
              mr={["0", "0", "6"]}
            >
              <Image
                src={anime.images.jpg.large_image_url}
                border="0.3rem solid"
                borderColor="blue.50"
                maxW={["120px", "180px", "350px", "450px"]}
                maxH={["150px", "190px", "400px", "480px"]}
                mt={["4", "4", "0"]}
                w="100%"
                h="100%"
                _hover={{ borderColor: "blue.400" }}
                transition="0.2s all"
              />
            </Link>
            <Grid w={["100%", "100%", "70%"]} h="400px">
              <Text
                as="h2"
                fontWeight="bold"
                color="grey.0"
                fontSize={["2xl", "2xl", "4xl"]}
              >
                {anime.title}
              </Text>
              <Center
                onClick={onClose}
                as="button"
                w="32px"
                h="32px"
                bg="red.500"
                fontSize="lg"
                borderRadius="lg"
                position="absolute"
                top="0"
                right="0"
              >
                <FaTimes color={theme.colors.white} />
              </Center>
              <Text
                color="grey.0"
                overflowX="hidden"
                overflowY="auto"
                h="10rem"
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
                {anime.synopsis}
              </Text>
              <Divider mt="2" />
              <Flex
                flexDirection={["column", "column", "row"]}
                justifyContent={["center", "center", "space-between"]}
                alignItems="center"
              >
                <Button
                  bg="blue.50"
                  w={["100%", "100%", "200px"]}
                  h="44px"
                  mt="2"
                  onClick={() => addAnime(anime)}
                >
                  <FaPlus />
                  <Text ml="2">Adicionar</Text>
                </Button>
                <HStack spacing="4" flexWrap="wrap" justifyContent="center">
                  {anime.genres &&
                    anime.genres.map((element, index) => {
                      return (
                        <Text
                          key={index}
                          color="grey.0"
                          fontWeight="bold"
                          fontSize={["sm", "sm", "lg"]}
                          p={["2", "2", "0"]}
                        >
                          {element.name}
                        </Text>
                      );
                    })}
                </HStack>
              </Flex>
              <Flex
                color="grey.0"
                align="center"
                justify={["center", "center", "flex-start"]}
                mt="2"
                fontSize="lg"
              >
                <FaStar fill="#EFDB73" />
                <Text fontWeight="bold" ml="2">
                  {anime.score}
                </Text>
                <Text fontWeight="500" ml="2" fontSize="lg">
                  Launching Year: {anime.year}
                </Text>
              </Flex>
              <Flex
                mt="2"
                alignItems="center"
                flexDirection={["column", "column", "row"]}
              >
                <Text
                  fontSize={["2xl", "2xl", "md", "xl"]}
                  fontWeight={["500", "500", "bold"]}
                  maxW={["120", "120", "95px", "120px"]}
                  w="100%"
                >
                  Watch on:
                </Text>
                <HStack
                  spacing="2"
                  ml="2"
                  flexWrap="wrap"
                  justifyContent="center"
                >
                  {linksStreaming &&
                    linksStreaming.map((element, index) => {
                      return (
                        <Link
                          key={index}
                          href={element.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {element.name !== "" && (
                            <Flex alignItems="center">
                              <FiTv />
                              <Text fontSize="sm" ml="1">
                                {element.name}
                              </Text>
                            </Flex>
                          )}
                        </Link>
                      );
                    })}
                </HStack>
              </Flex>
              <Flex
                mt="2"
                alignItems="center"
                flexDirection={["column", "column", "row"]}
              >
                <Text
                  fontSize={["2xl", "2xl", "md", "xl"]}
                  fontWeight={["500", "500", "bold"]}
                  maxW={["120", "120", "95px", "120px"]}
                  w="100%"
                >
                  More info:
                </Text>
                <HStack
                  spacing="2"
                  ml="2"
                  flexWrap="wrap"
                  justifyContent="center"
                >
                  {linksExternal &&
                    linksExternal.map((element, index) => {
                      return (
                        <Link
                          key={index}
                          href={element.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {element.name !== "" && (
                            <Flex alignItems="center">
                              <FaLink />
                              <Text fontSize="sm" ml="1">
                                {element.name}
                              </Text>
                            </Flex>
                          )}
                        </Link>
                      );
                    })}
                </HStack>
              </Flex>
            </Grid>
          </Flex>
        )}
      </ModalContent>
    </Modal>
  );
};

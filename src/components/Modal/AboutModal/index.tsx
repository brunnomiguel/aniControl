import {
  Button,
  Modal,
  ModalContent,
  useDisclosure,
  ModalFooter,
  Text,
  Box,
  Flex,
  Image,
  Link,
  Center,
  useBreakpointValue,
  SlideFade,
} from "@chakra-ui/react";

import { devsData } from "./devsData";
import VisibilitySensor from "react-visibility-sensor";

import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

interface AboultModalProps {
  id?: number;
}

export const AboutModal = ({ id }: AboultModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <>
      {devsData.map((dev) => {
        return (
          <>
            {dev.id === id && (
              <>
                <VisibilitySensor
                  offset={{ bottom: 200 }}
                  partialVisibility={true}
                >
                  {({ isVisible }: any) => (
                    <SlideFade
                      offsetY={dev.offsety}
                      offsetX={dev.offsetx}
                      in={isVisible}
                      style={
                        isWideVersion
                          ? {
                              transitionDuration: "1s",
                              transitionDelay: dev.delay,
                            }
                          : {
                              transitionDuration: "0.5s",
                            }
                      }
                    >
                      <Flex flexDir="column" alignItems="center">
                        <Text
                          color="white"
                          fontWeight="bold"
                          fontSize={["lg", "xl"]}
                          p="2"
                          w={["200px", "125px"]}
                          textAlign="center"
                        >
                          {dev.function}
                        </Text>
                        <Button
                          w="150px"
                          h="150px"
                          borderRadius="75px"
                          onClick={onOpen}
                          p="0"
                          bg="transparent"
                          shadow="1px 1px rgba(0, 0, 0, 0.11),2px 2px rgba(0, 0, 0, 0.11), 4px 4px rgba(0, 0, 0, 0.11)"
                          _hover={{ bg: "transparent" }}
                          _focus={{ bg: "transparent" }}
                        >
                          {isOpen ? (
                            <Image
                              objectFit="cover"
                              borderRadius="75px"
                              src={dev.devimg}
                              shadow="1px 1px rgba(0, 0, 0, 0.21),2px 2px rgba(0, 0, 0, 0.21), 4px 4px rgba(0, 0, 0, 0.21)"
                              transform="translateX(-3px)"
                            />
                          ) : (
                            <Image
                              objectFit="cover"
                              filter="blur(3px) saturate(0)"
                              _hover={{
                                filter: "blur(3px) saturate(1)",
                                shadow:
                                  "1px 1px rgba(0, 0, 0, 0.21),2px 2px rgba(0, 0, 0, 0.21), 4px 4px rgba(0, 0, 0, 0.21)",
                                transform: "translateX(-3px)",
                              }}
                              borderRadius="75px"
                              src={dev.devimg}
                            />
                          )}
                        </Button>
                      </Flex>
                    </SlideFade>
                  )}
                </VisibilitySensor>

                <Modal
                  isCentered
                  onClose={onClose}
                  isOpen={isOpen}
                  motionPreset="slideInBottom"
                  size="7xl"
                >
                  <ModalContent
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    margin="20px 10px 60vh 10px"
                    h={["70vh", "70vh", "40vh"]}
                    bg="#21212D"
                    color="white"
                  >
                    <Flex
                      flexDir={["column", "column", "row"]}
                      bg="#2C2C38"
                      w="98%"
                      h="95%"
                      borderRadius="5px"
                    >
                      <Box
                        position="relative"
                        w={["100%", "100%", "20%"]}
                        h={["60%", "60%", "100%"]}
                        borderTopLeftRadius="5px"
                        borderBottomLeftRadius="5px"
                      >
                        <Image
                          objectFit="cover"
                          position={["absolute", "absolute", "relative"]}
                          top={["25%", "25%", "0"]}
                          w={["100%", "100%", "100%"]}
                          h={["75%", "75%", "100%"]}
                          src={dev.animeimg}
                          shadow="20px 0px 30px rgba(0, 0, 0, 0.3), inset -100px 0px 30px rgba(0, 0, 0, 0.3);"
                        />
                      </Box>
                      <Flex
                        flexDir="column"
                        justifyContent="space-between"
                        w={["100%", "100%", "80%"]}
                        h={["40%", "40%", "auto"]}
                      >
                        <Flex
                          justifyContent="space-between"
                          flexDir="column"
                          overflowX="hidden"
                          overflowY="auto"
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
                          <Text
                            verticalAlign="end"
                            fontSize={["2xl", "2xl", "5xl"]}
                            fontWeight="bold"
                            pl="20px"
                          >
                            {dev.name}
                          </Text>
                          <Text
                            m="0 25px 0 25px"
                            h="auto"
                            fontSize={["xs", "xs", "md"]}
                            fontWeight={["medium", "medium", "thin"]}
                          >
                            &nbsp;&nbsp;&nbsp;
                            {dev.infoparagraph1}
                            <br />
                            &nbsp;&nbsp;&nbsp;
                            {dev.infoparagraph2}
                          </Text>
                          <Text
                            m="10px 25px 0 25px"
                            h="auto"
                            fontSize={["xs", "xs", "md"]}
                            fontWeight={["semibold", "semibold", "normal"]}
                          >
                            {dev.phraseauthor}
                          </Text>
                          <Text
                            fontStyle="italic"
                            m="0 25px 0 25px"
                            h="auto"
                            fontSize="xs"
                            fontWeight="hairline"
                          >
                            {dev.phrase}
                          </Text>
                        </Flex>

                        <ModalFooter p={["5px", "5px", ""]}>
                          <Flex flexDir="row" gap="10px">
                            <Link target="_blank" href={dev.linkedin}>
                              <Center fontSize="3xl">
                                <FaLinkedin />
                              </Center>
                            </Link>
                            <Link target="_blank" href={dev.github}>
                              <Center fontSize="3xl">
                                <FaGithubSquare />
                              </Center>
                            </Link>
                          </Flex>
                        </ModalFooter>
                        <Box
                          position="absolute"
                          transform="rotate(45deg)"
                          w="25px"
                          h="25px"
                          bg="#21212D"
                          top={["67.5vh", "68vh", "38vh"]}
                          left={isWideVersion ? dev.position : "45vw"}
                          zIndex="-1"
                        />
                      </Flex>
                    </Flex>
                  </ModalContent>
                </Modal>
              </>
            )}
          </>
        );
      })}
    </>
  );
};

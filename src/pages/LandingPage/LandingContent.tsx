import {
  Box,
  Flex,
  Image,
  Text,
  Container,
  Button,
  useBreakpointValue,
  SlideFade,
} from "@chakra-ui/react";

import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import VisibilitySensor from "react-visibility-sensor";
import { AboutModal } from "../../components/Modal/AboutModal";

import Logo from "../../assets/imgs/logo-dash.svg";
import Heroes from "../../assets/imgs/heroes2.svg";
import Villains from "../../assets/imgs/villains2.svg";
import BackgroundImg from "../../assets/imgs/landLuffy.svg";
import BgGrey from "../../assets/imgs/background-landing-page.svg";
import { FaChevronLeft, FaChevronRight, FaChevronUp } from "react-icons/fa";

export const LandingContent = () => {
  const nav = useNavigate();
  const [devIdMobile, setDevIdMobile] = useState(1);
  const devId = [1, 2, 3, 4, 5];

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  const startRef: any = useRef();

  return (
    <Box maxW="100%" overflowX="hidden">
      <Box w="100%" position="absolute" zIndex="2">
        <Flex
          w="100%"
          h="7vh"
          align="center"
          justify="space-between"
          zIndex="2"
        >
          <Image pl="3vw" w={["150px", "200px"]} src={Logo} ref={startRef} />
          <Flex w="100%" justifyContent="flex-end">
            <Button
              position="relative"
              w={["auto", "120px", "120px"]}
              h="35px"
              bg="transparent"
              mr="2"
              shadow={[
                "1px 1px 4px grey",
                "1px 1px 4px grey",
                "2px 2px 8px black",
              ]}
              onClick={() => nav("/signup")}
              _hover={{ bg: "transparent" }}
              _focus={{ bg: "transparent" }}
            >
              <Text color="white" textShadow={"1px 1px 2px black"}>
                Sign Up
              </Text>
              <Box
                shadow="2px 2px 8px black"
                borderRadius="5px"
                bg={["grey.0", "grey.0", "grey.900"]}
                opacity="0.1"
                _hover={{
                  bg: "grey.0",
                  opacity: ["0.2", "0.2", "0.1"],
                  filter: "blur(0)",
                  transition: "all ease 0.3s",
                }}
                position="absolute"
                filter={["blur(0)", "blur(0)", "blur(10px)"]}
                w="100%"
                h="100%"
              />
            </Button>
            <Button
              position="relative"
              w={["auto", "120px", "120px"]}
              h="35px"
              bg="transparent"
              mr="3vw"
              shadow={[
                "1px 1px 4px grey",
                "1px 1px 4px grey",
                "2px 2px 8px black",
              ]}
              onClick={() => nav("/signin")}
              _hover={{ bg: "transparent" }}
              _focus={{ bg: "transparent" }}
            >
              <Text color="white" textShadow={"1px 1px 2px black"}>
                Sign In
              </Text>
              <Box
                borderRadius="5px"
                bg={["grey.0", "grey.0", "grey.900"]}
                opacity="0.1"
                _hover={{
                  bg: "grey.0",
                  opacity: ["0.2", "0.2", "0.1"],
                  filter: "blur(0)",
                  transition: "all ease 0.3s",
                }}
                position="absolute"
                filter={["blur(0)", "blur(0)", "blur(10px)"]}
                w="100%"
                h="100%"
              />
            </Button>
          </Flex>
        </Flex>
      </Box>
      <Flex
        maxW="100%"
        maxH={["auto", "auto", "100vh"]}
        backgroundColor={["#070A0B", "#070A0B", "none"]}
        justifyContent={["center", "center", "normal"]}
        alignItems={["center", "center", "normal"]}
        paddingLeft={["5vh", "5vh", "0"]}
        paddingRight={["5vh", "5vh", "0"]}
        pt={["14", "14", "0"]}
      >
        {isWideVersion && (
          <>
            <Box
              w="100%"
              h="100vh"
              bgGradient="linear(90deg, rgba(0, 0, 0, 1) 60%,  rgba(0, 0, 0, 0.5) 100%)"
              position="absolute"
              top="0"
              left="0"
              zIndex="1"
            />
            <Box w="60vw" />
            <VisibilitySensor offset={{ top: 50 }} partialVisibility={true}>
              {({ isVisible }: any) => (
                <SlideFade
                  offsetY="0"
                  offsetX="50px"
                  in={isVisible}
                  style={{ transitionDuration: "1.5s" }}
                >
                  <Box
                    w="40vw"
                    h="100vh"
                    backgroundPosition="left top"
                    backgroundSize="cover"
                    backgroundRepeat="no-repeat"
                    backgroundImage={BackgroundImg}
                  />
                </SlideFade>
              )}
            </VisibilitySensor>
          </>
        )}
        <Box
          textAlign={["center", "center", "left"]}
          position={["relative", "relative", "absolute"]}
          marginTop={["0", "0", "30vh"]}
          h={["350px", "350px", "100vh"]}
          w="100%"
          zIndex="1"
        >
          <VisibilitySensor offset={{ top: 50 }} partialVisibility={true}>
            {({ isVisible }: any) => (
              <SlideFade
                offsetY="0"
                offsetX={isWideVersion ? "-50px" : "0"}
                in={isVisible}
                style={{ transitionDuration: "1.5s" }}
              >
                <Text
                  fontSize={["5xl", "5xl", "5em"]}
                  color="white"
                  paddingLeft={["auto", "auto", "14%"]}
                >
                  AniControl
                </Text>
                <Text
                  fontSize={["1.2em", "1.2em", "1.3em"]}
                  color="white"
                  paddingLeft={["auto", "auto", "14%"]}
                  marginBottom="15%"
                  w={["auto", "auto", "42%"]}
                >
                  Have full control of the animes you're watching on a
                  intuitive, meaningful and organized way.
                </Text>

                <Text
                  color={"white"}
                  fontWeight="100"
                  fontSize="1.1em"
                  textAlign="left"
                  fontStyle="italic"
                  paddingLeft={["auto", "auto", "14%"]}
                  h={["0", "0", "100%"]}
                  w={["auto", "auto", "42%"]}
                >
                  “I see now that the circumstances of one's birth are
                  irrelevant… It is what you do with the gift of life that
                  determines who you are.”
                </Text>
              </SlideFade>
            )}
          </VisibilitySensor>
        </Box>
      </Flex>
      <Flex
        direction="column"
        maxW="100%"
        overflowX="hidden"
        overflowY="hidden"
        flexWrap="wrap"
      >
        <Box backgroundImage={BgGrey}>
          <Flex dropShadow="base, inner">
            <VisibilitySensor offset={{ bottom: 200 }} partialVisibility={true}>
              {({ isVisible }: any) => (
                <SlideFade
                  offsetY="-200px"
                  offsetX="-200px"
                  in={isVisible}
                  style={{ transitionDuration: "1s" }}
                >
                  <Container maxW="100%">
                    <Flex
                      direction="column"
                      paddingTop={["10vh", "10vh", "25vh"]}
                      paddingBottom={["10vh", "10vh", "0"]}
                      paddingRight={["5vh", "5vh", "5vh"]}
                      paddingLeft={["5vh", "5vh", "10vh"]}
                    >
                      <Text
                        fontSize="3em"
                        fontWeight="bold"
                        textShadow="2px 2px #000000"
                      >
                        Modern
                      </Text>
                      <Text
                        fontStyle="italic"
                        fontSize="1.1em"
                        textShadow="2px 2px #000000"
                      >
                        Tired of complex websites with single to none visual
                        response? Try out the discrete modern design of
                        AniControl.
                      </Text>
                    </Flex>
                  </Container>
                </SlideFade>
              )}
            </VisibilitySensor>
            {isWideVersion && (
              <VisibilitySensor
                offset={{ bottom: 200 }}
                partialVisibility={true}
              >
                {({ isVisible }: any) => (
                  <SlideFade
                    offsetY="-200px"
                    offsetX="200px"
                    in={isVisible}
                    style={{ transitionDuration: "1s" }}
                  >
                    <Image src={Heroes} alt="Anime heroes image" />
                  </SlideFade>
                )}
              </VisibilitySensor>
            )}
          </Flex>
          <Flex>
            {isWideVersion && (
              <VisibilitySensor
                offset={{ bottom: 200, top: 100 }}
                partialVisibility={true}
              >
                {({ isVisible }: any) => (
                  <SlideFade
                    offsetY="200px"
                    offsetX="-200px"
                    in={isVisible}
                    style={{ transitionDuration: "1s" }}
                  >
                    <Image
                      src={Villains}
                      alt="Anime villains image"
                      boxSize="90%"
                    />
                  </SlideFade>
                )}
              </VisibilitySensor>
            )}
            <VisibilitySensor
              offset={
                isWideVersion
                  ? { bottom: 200, top: 100 }
                  : { bottom: 200, top: 100 }
              }
              partialVisibility={true}
            >
              {({ isVisible }: any) => (
                <SlideFade
                  offsetY={isWideVersion ? "200px" : "-200px"}
                  offsetX="200px"
                  in={isVisible}
                  style={{ transitionDuration: "1s" }}
                >
                  <Container maxW="100%">
                    <Flex
                      direction="column"
                      paddingTop={["10vh", "10vh", "25vh"]}
                      paddingBottom={["10vh", "10vh", "0"]}
                      paddingRight={["5vh", "5vh", "5vh"]}
                      paddingLeft={["5vh", "5vh", "10vh"]}
                    >
                      <Text
                        fontSize="3em"
                        fontWeight="bold"
                        textShadow="-2px 2px #000000"
                      >
                        Intuitive
                      </Text>
                      <Text
                        fontStyle="italic"
                        fontSize="1.2em"
                        textShadow="-2px 2px #000000"
                      >
                        Control your routine and total progress of your
                        favourite animes in a simplified way...
                      </Text>
                    </Flex>
                  </Container>
                </SlideFade>
              )}
            </VisibilitySensor>
          </Flex>
        </Box>
        <Box
          backgroundImage={BackgroundImg}
          backgroundBlendMode="darken"
          backgroundPosition="center top"
          backgroundSize="cover"
          h="100vh"
          maxW="100%"
        >
          <Flex
            h="100%"
            w="100%"
            backdropFilter="auto"
            backdropBlur="3px"
            alignItems="flex-end"
            backgroundColor="#0000007a"
          >
            <Flex
              w="100%"
              h="58vh"
              justifyContent="space-around"
              align="center"
              position="absolute"
              zIndex="1"
              backgroundColor="#0000007a"
              paddingBottom={["0", "0", "200px"]}
            >
              {isWideVersion ? (
                <>
                  {devId.map((id) => {
                    return <AboutModal id={id} key={id} />;
                  })}
                </>
              ) : (
                <Flex w="100%" justifyContent="space-evenly" alignItems="center">
                  <FaChevronLeft
                    onClick={() => {
                      if (devIdMobile > 1) {
                        setDevIdMobile(devIdMobile - 1);
                      }
                    }}
                    fontSize="4vh"
                    color="white"
                  />
                  <AboutModal id={devIdMobile} />
                  <FaChevronRight
                    onClick={() => {
                      if (devIdMobile < 5) {
                        setDevIdMobile(devIdMobile + 1);
                      }
                    }}
                    fontSize="4vh"
                    color="white"
                  />
                </Flex>
              )}
            </Flex>
            <Flex
              w="100%"
              h="10vh"
              position="absolute"
              flexDirection="column"
              justifyContent="center"
              backgroundColor="#0000007a"
              textAlign="center"
            >
              <VisibilitySensor
                offset={{ bottom: -100 }}
                partialVisibility={true}
              >
                {({ isVisible }: any) => (
                  <SlideFade
                    offsetY="100px"
                    in={isVisible}
                    style={{ transitionDuration: "1s" }}
                  >
                    <Button
                      zIndex="1"
                      bg="white"
                      w={["40px", "40px"]}
                      h="40px"
                      borderRadius="25px"
                      p="0"
                      onClick={() => {
                        startRef.current.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                          inline: "center",
                        });
                      }}
                    >
                      <FaChevronUp fill="black" fontSize="25px" />
                    </Button>
                    <Text fontSize="sm" textShadow="2px 2px #000000" zIndex="1">
                      AniControl ©2022 Todos os direitos reservados
                    </Text>
                  </SlideFade>
                )}
              </VisibilitySensor>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

import { Box, Flex, Image, Text, Container } from "@chakra-ui/react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

import { useState } from "react";

import Logo from "../../assets/imgs/logo-dash.svg";
import DevBack from "../../assets/imgs/landLuffy.svg";
import BgGrey from "../../assets/imgs/background-landing-page.svg";

import { useNavigate } from "react-router-dom";
import { AboutModal } from "../../components/Modal/AboutModal";

export const LandingMobile = () => {
  const nav = useNavigate();

  const [devId, setDevId] = useState(1);

  return (
    <Flex
      direction={"column"}
      justifyContent="center"
      alignItems={"center"}
      maxW={"100vw"}
    >
      <Flex
        as="header"
        w="100%"
        h="15vh"
        margin="0"
        alignItems="center"
        justifyContent={"center"}
        backgroundColor="#070A0B"
      >
        <Image
          marginLeft={"10vw"}
          h="70%"
          src={Logo}
          onClick={() => nav("/signup")}
        />
      </Flex>

      <Flex
        maxW="100vw"
        backgroundColor="#070A0B"
        justifyContent="center"
        alignItems={"center"}
        paddingBottom={"10%"}
      >
        <Box textAlign={"center"} w="90%">
          <Text fontSize="4em" as={"b"} color="white">
            AniControl
          </Text>
          <Text fontSize="1.2em" color="white" marginBottom="15%">
            Have full control of the animes you're watching on a intuitive,
            meaningful and organized way.
          </Text>

          <Text
            as="i"
            color={"white"}
            fontWeight="100"
            fontSize="1.1em"
            textAlign="left"
          >
            “I see now that the circumstances of one's birth are irrelevant… It
            is what you do with the gift of life that determines who you are.”
          </Text>
        </Box>
      </Flex>

      <Flex direction={"column"} maxW="100vw" overflowX="hidden">
        <Box backgroundImage={BgGrey}>
          <Flex dropShadow="base, inner">
            <Container maxW={"90%"}>
              <Flex direction={"column"} marginLeft="5vw" marginTop={"10vh"}>
                <Text fontSize="3em" as={"b"} textShadow={"2px 2px #000000"}>
                  Modern
                </Text>
                <Text as={"i"} fontSize="1.2em" textShadow={"2px 2px #000000"}>
                  Tired of complex websites with single to none visual response?
                  Try out the discrete modern design of AniControl.
                </Text>
              </Flex>
            </Container>
          </Flex>

          <Flex>
            <Container maxW={"90%"}>
              <Flex
                direction={"column"}
                marginLeft="5vw"
                marginTop={"10vh"}
                marginBottom={"10vh"}
              >
                <Text fontSize="3em" as={"b"} textShadow={"-2px 2px #000000"}>
                  Intuitive
                </Text>
                <Text
                  fontSize={"1.2em"}
                  textShadow={"-2px 2px #000000"}
                  paddingBottom="10%"
                  as={"i"}
                >
                  Control your routine and total progress of your favourite
                  animes in a simple and simplified way...
                </Text>
              </Flex>
            </Container>
          </Flex>
        </Box>

        <Box
          backgroundImage={DevBack}
          backgroundBlendMode="darken"
          backgroundPosition="center top"
          backgroundSize={"cover"}
          h="80vh"
          maxW={"100vw"}
        >
          <Flex
            h="100%"
            w="100%"
            backdropFilter="auto"
            backdropBlur="3px"
            alignItems={"flex-end"}
          >
            <Flex
              w="100vw"
              justifyContent="space-around"
              alignItems={"center"}
              position="absolute"
              zIndex={"1"}
              backgroundColor="#0000007a"
              paddingBottom={"5vh"}
            >
              <Box marginTop={"13vh"}>
                <FaChevronCircleLeft
                  onClick={() => {
                    if (devId > 1) {
                      setDevId(devId - 1);
                    }
                  }}
                  fontSize="7vh"
                  color={"white"}
                />
              </Box>

              <AboutModal id={devId} />

              <Box marginTop={"13vh"}>
                <FaChevronCircleRight
                  onClick={() => {
                    if (devId < 5) {
                      setDevId(devId + 1);
                    }
                  }}
                  fontSize="7vh"
                  color={"white"}
                />
              </Box>
            </Flex>
            <>
              <Text
                fontSize={"sm"}
                textShadow={"2px 2px #000000"}
                textAlign="center"
                position="absolute"
                w={"100vw"}
                backgroundColor={"#0000007a"}
                zIndex={"1"}
              >
                AniControl ©2022 Todos os direitos reservados
              </Text>
            </>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

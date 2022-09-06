import { Box, Flex, Image, Text, Grid } from "@chakra-ui/react";

import { theme } from "../../styles/theme";

import BackgroundImg from "../../assets/landLuffy.svg";
import BgGrey from "../../../assets/background-landing-page.svg";
import Heroes from "../../../assets/heroes2.svg";
import Villains from "../../../assets/villains2.svg";

export const LandingContent = () => {
  return (
    <>
      {/* header */}
      <Flex w="100vw" h={"100vh"}>
        <Box
          w="100vw"
          h={"100vh"}
          bgGradient="linear(90deg, rgba(0, 0, 0, 1) 60%,  rgba(0, 0, 0, 0.5) 100%)"
          position={"absolute"}
          top="0"
          left="0"
        />
        <Box w={"60%"} />

        <Box
          w={"40%"}
          h="100vh"
          backgroundImage={BackgroundImg}
          backgroundPosition={"left top"}
          backgroundSize="cover"
          backgroundRepeat={"no-repeat"}
        />

        <Grid position={"absolute"}>
          <Text fontSize="4xl" as={"b"} color="white">
            AniControl
          </Text>
          <Text color="white">
            Have full control of the animes you're watching on a intuitive,
            meaningful and organized way.
          </Text>
          <Text as="i" color={"white"} fontWeight="200">
            “I see now that the circumstances of one's birth are irrelevant… It
            is what you do with the gift of life that determines who you are.”
          </Text>
        </Grid>
      </Flex>
    </>

    // <Flex fontFamily={"Inter, sans-serif"} direction={"column"} color="#FFFFFF">
    //   <Box bg={"black"}>
    //     <Container
    //       backgroundImage={BackgroundImg}
    //       backgroundRepeat={"no-repeat"}
    //       // backgroundPosition={"top left"}
    //       // objectFit="contain"
    //       maxW={"100vw"}
    //       h={"100vh"}
    //       position="absolute"
    //       top={"2px"}
    //       left={"2px"}
    //     >
    // <Text fontSize="4xl" as={"b"}>
    //   AniControl
    // </Text>
    // <Text>
    //   Have full control of the animes you're watching on a intuitive,
    //   meaningful and organized way.
    // </Text>

    //     </Container>
    //   </Box>

    //   <Box backgroundImage={BgGrey}>
    //     <Box
    //       h={"100vh"}
    //       w="100%"
    //       bgGradient="linear(to-r, #000000c5)"
    //       position={"absolute"}
    //       // z-index="-1"
    //     ></Box>
    //     <Flex dropShadow="base, inner">
    //       <Container>
    //         <Flex direction={"column"}>
    //           <Text fontSize="4xl" as={"b"}>
    //             Modern
    //           </Text>
    //           <Text as={"i"}>
    //             Tired of complex websites with single to none visual response?
    //             Try out the discrete modern design of AniControl.
    //           </Text>
    //         </Flex>
    //       </Container>
    //       <Image src={Heroes} alt="Anime heroes image" boxSize="60%" />
    //     </Flex>

    //     <Flex>
    //       <Image src={Villains} alt="Anime villains image" boxSize="60%" />
    //       <Container>
    //         <Flex direction={"column"}>
    //           <Text fontSize="4xl" as={"b"}>
    //             Intuitive
    //           </Text>
    //           <Text>
    //             Control your routine and total progress of your favourite animes
    //             in a simple and simplified way...
    //           </Text>
    //         </Flex>
    //       </Container>
    //     </Flex>
    //   </Box>

    //   <Container background={BackgroundImg}>DEVS</Container>
    //   <Container>
    //     <Text fontSize={"sm"}>
    //       AniControl ©2022 Todos os direitos reservados
    //     </Text>
    //   </Container>
    // </Flex>
  );
};

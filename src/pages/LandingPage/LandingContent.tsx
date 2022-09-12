import { Box, Flex, Image, Text, Grid } from "@chakra-ui/react";

import { theme } from "../../styles/theme";

import BackgroundImg from "../../assets/landLuffy.svg";
import BgGrey from "../../../assets/background-landing-page.svg";
import Heroes from "../../../assets/heroes2.svg";
import Villains from "../../../assets/villains2.svg";
import { AboultModal } from "../../components/Modal/AboultModal";
import React from "react";

export const LandingContent = () => {
  const devId = [1, 2, 3, 4, 5];
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
      <Flex w="100vw" justifyContent="space-around">
        {devId.map((id) => {
          return (
            <>
              <AboultModal key={id} id={id} />
            </>
          );
        })}
      </Flex>
    </>
  );
};

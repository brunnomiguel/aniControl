import { Box, Flex, Hide } from "@chakra-ui/react";
import { BackgroundAnimationUp } from "../../components/BackgroundAnimationUp";
import { BackgroundImg } from "./BackgroundImg";
import { SignInForm } from "./SignInForm";

export const SignIn = () => {
  return (
    <Box>
      <BackgroundAnimationUp />
      <Flex
        position="fixed"
        top="0"
        left="0"
        flexDirection={["column", "column", "row", "row"]}
        h="100vh"
        w="100vw"
      >
        <Hide below="800px">
          <BackgroundImg />
        </Hide>
        <SignInForm />
      </Flex>
    </Box>
  );
};

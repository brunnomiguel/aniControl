import { Box, Flex } from "@chakra-ui/react";
import { BackgroundAnimation } from "../../components/BackgroundAnimation";
import { BackgroundImg } from "./BackgroundImg";
import { SignInForm } from "./SignUpForm";

export const SignIn = () => {
  return (
    <Box>
      <BackgroundAnimation />
      <Flex position="fixed" top="0" left="0" flexDir="row" h="100vh" w="100vw">
        <BackgroundImg />
        <SignInForm />
      </Flex>
    </Box>
  );
};

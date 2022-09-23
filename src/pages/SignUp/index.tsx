import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";

import { SignUpForm } from "./SignUpForm";
import { BackgroundImg } from "./BackgroundImg";
import { BackgroundAnimation } from "../../components/BackgroundAnimation";

export const SignUp = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <>
      {isWideVersion ? (
        <Box>
          <BackgroundAnimation />
          <Flex
            position="fixed"
            top="0"
            left="0"
            flexDir="row"
            w="100vw"
            h="100vh"
          >
            <SignUpForm />
            <BackgroundImg />
          </Flex>
        </Box>
      ) : (
        <Flex bg="grey.700" flexDir="row" justifyContent="center">
          <SignUpForm />
        </Flex>
      )}
    </>
  );
};

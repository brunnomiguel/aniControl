import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";

import { SignInForm } from "./SignInForm";
import { BackgroundImg } from "./BackgroundImg";
import { BackgroundAnimation } from "../../components/BackgroundAnimation";

export const SignIn = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <>
      {isWideVersion ? (
        <Box>
          <Box transform="rotate(180deg)">
            <BackgroundAnimation />
          </Box>
          <Flex
            position={["initial", "initial", "fixed"]}
            top="0"
            left="0"
            flexDir="row"
            minH="100vh"
            w="100vw"
          >
            <BackgroundImg />
            <SignInForm />
          </Flex>
        </Box>
      ) : (
        <Flex bg="#21212D" flexDir="row" justifyContent="center" w="100vw">
          <SignInForm />
        </Flex>
      )}
    </>
  );
};

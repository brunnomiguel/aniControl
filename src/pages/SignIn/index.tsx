import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import { BackgroundAnimation } from "../../components/BackgroundAnimation";
import { BackgroundImg } from "./BackgroundImg";
import { SignInForm } from "./SignInForm";

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
            position="fixed"
            top="0"
            left="0"
            flexDir="row"
            h="100vh"
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

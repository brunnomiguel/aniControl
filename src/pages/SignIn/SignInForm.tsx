import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";

import Logo from "../../assets/imgs/logo-form.svg";
import LogoMobile from "../../assets/imgs/logo-dash.svg";

import { FaApple, FaEnvelope, FaFacebookF, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { Input } from "../../components/Input";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAuth } from "../../contexts/Auth";

import { signInSchema } from "../../schemas";
import { useNavigate } from "react-router-dom";

interface SignInData {
  email: string;
  password: string;
}

export const SignInForm = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SignInData>({
    resolver: yupResolver(signInSchema),
  });

  const handleSignIn = ({ email, password }: SignInData) => {
    signIn({ email, password });
  };

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <>
      <Flex
        shadow="30px 0px 30px grey.900, inset -100px 0px 30px rgba(255, 255, 255, 0.6);"
        opacity="0.1"
        w="35vw"
        bg="rgba(217, 217, 217, 0.5);"
        filter="blur(2px)"
      />
      <Flex
        position="fixed"
        right={["none", "none", "0", "0"]}
        h="100vh"
        w={["80vw", "60vw", "35vw", "35vw"]}
      >
        <Flex
          as="form"
          onSubmit={handleSubmit(handleSignIn)}
          h="100vh"
          w="100%"
          flexDir="column"
          pl={["0", "0", "8", "20"]}
          pr={["0", "0", "8", "20"]}
          pt={["0", "0", "8"]}
          pb={["0", "0", "0", "8"]}
          alignItems="center"
          justifyContent="center"
        >
          {isWideVersion ? (
            <Image w={["200px", "200px", "320px"]} h="110px" src={Logo} />
          ) : (
            <Image w={["200px", "200px", "320px"]} h="110px" src={LogoMobile} />
          )}
          <Box w="100%">
            <Text
              color="white"
              fontWeight="600"
              fontSize="2xl"
              textAlign="center"
              m="2"
            >
              Login
            </Text>
            <VStack mt="10" spacing="6">
              <Input
                label="Email"
                icon={FaEnvelope}
                type="email"
                placeholder="Your email"
                {...register("email")}
                error={errors.email}
              />
              <Input
                label="Password"
                icon={FaLock}
                type="password"
                placeholder="Your password"
                {...register("password")}
                error={errors.password}
              />
            </VStack>
          </Box>
          <Button
            type="submit"
            mt="10vh"
            w="100%"
            h="50px"
            bg={isWideVersion ? "blue.600" : "red.600"}
            fontWeight="700"
            color="white"
            borderRadius="10px"
            _hover={isWideVersion ? { bg: "pink.100" } : { bg: "pink.800" }}
          >
            Sign In
          </Button>
          <Flex flexDir="column" justifyContent="center">
            <Text
              mt="3vh"
              w="200px"
              textAlign="center"
              fontWeight="600"
              color="white"
            >
              Already have an account?
              <Link
                color="blue.600"
                fontWeight="extrabold"
                _hover={{ color: "pink.100" }}
                onClick={() => navigate("/signup", { replace: true })}
              >
                Click here.
              </Link>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

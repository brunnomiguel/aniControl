import {
  Box,
  Button,
  Flex,
  Center,
  Image,
  Link,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";

import Logo from "../../assets/imgs/logo-form.svg";
import LogoMobile from "../../assets/imgs/logo-dash.svg";

import {
  FaApple,
  FaEnvelope,
  FaFacebookF,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { Input } from "../../components/Input";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAuth } from "../../contexts/Auth";
import { useState } from "react";

import { signInSchema } from "../../schemas";
import { useNavigate } from "react-router-dom";

interface SignInData {
  email: string;
  password: string;
}

export const SignInForm = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
        shadow="-30px 0px 30px #000000, inset 100px 0px 30px rgba(255, 255, 255, 0.6);"
        opacity="0.1"
        w="35vw"
        bg="rgba(217, 217, 217, 0.5);"
        filter="blur(2px)"
      />
      <Flex
        position="fixed"
        right={["none", "none", "0", "0"]}
        h="100vh"
        w={["80vw", "60vw", "37vw", "37vw"]}
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
              mt="30px"
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
              <Box position="relative" w="100%" h="100%">
                <Input
                  label="Password"
                  icon={FaLock}
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Your password"
                  {...register("password")}
                  error={errors.password}
                />
               {showConfirmPassword ? (
                  <Center
                    top="12"
                    right="4"
                    onClick={() => setShowConfirmPassword(false)}
                    position="absolute"
                    zIndex="1"
                    color="red.600"
                  >
                    <FaEye />
                  </Center>
                ) : (
                  <Center
                    top="12"
                    right="4"
                    position="absolute"
                    onClick={() => setShowConfirmPassword(true)}
                    zIndex="1"
                    color="red.600"
                  >
                    <FaEyeSlash />
                  </Center>
                )}
              </Box>
            </VStack>
          </Box>
          <Button
            type="submit"
            mt="12"
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
          <Flex flexDir="row" gap="20px" w="100%" mt="8">
            <Button w="30%" h="25px" bg="white">
              <FcGoogle />
            </Button>
            <Button h="25px" w="30%" bg="#155BCB">
              <FaFacebookF fill="white" />
            </Button>
            <Button h="25px" w="30%" bg="black">
              <FaApple fill="white" />
            </Button>
          </Flex>
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

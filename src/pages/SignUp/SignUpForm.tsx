import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Link,
  Text,
  useBreakpointValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import Logo from "../../assets/logo-form.svg";
import LogoMobile from "../../assets/logo-dash.svg";
import { FcGoogle } from "react-icons/fc";
import {
  FaApple,
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaFacebookF,
  FaLock,
  FaUser,
} from "react-icons/fa";
import { Input } from "../../components/Input";

import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../../schemas";
import { useForm } from "react-hook-form";

import { jsonApi as api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface SignUpData {
  email: string;
  password: string;
  name: string;
  confirm_password: string;
}

export const SignUpForm = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SignUpData>({
    resolver: yupResolver(signUpSchema),
  });

  const handleSignUp = ({ name, email, password }: SignUpData) => {
    api
      .post("/register", { name, email, password })
      .then((_) => {
        toast({
          title: "Success!",
          description: "Registration created successfully!",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        return navigate("../signin", { replace: true });
      })
      .catch((err) => {
        toast({
          title: "Error...",
          description: "Something went wrong...",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
        console.log(err);
      });
  };

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <>
      <Flex
        shadow="30px 0px 30px #000000, inset -100px 0px 30px rgba(255, 255, 255, 0.6);"
        opacity="0.1"
        w="35vw"
        bg="rgba(217, 217, 217, 0.5);"
        filter="blur(2px)"
      />
      <Flex position="fixed" h="100vh" w={["80vw", "60vw", "35vw", "35vw"]}>
        <Flex
          onSubmit={handleSubmit(handleSignUp)}
          as="form"
          h="100vh"
          w="100%"
          flexDir="column"
          pl={["0", "0", "8", "20"]}
          pr={["0", "0", "8", "20"]}
          pt={["0", "0", "8"]}
          pb={["0", "0", "0", "8"]}
          alignItems="center"
        >
          {isWideVersion ? (
            <Image w="300px" h="110px" src={Logo} />
          ) : (
            <Image w="300px" h="110px" src={LogoMobile} />
          )}
          <Box w="100%">
            <Text
              color="grey.0"
              fontWeight="600"
              textAlign="center"
              fontSize="2xl"
              mt="4"
              mb="4"
            >
              Create Account
            </Text>
            <VStack flexDir="column" spacing="4">
              <Input
                icon={FaUser}
                label="User name"
                error={errors.name}
                {...register("name")}
              />
              <Input
                icon={FaEnvelope}
                label="Email"
                type="email"
                error={errors.email}
                {...register("email")}
              />
              <Box position="relative" w="100%" h="100%">
                <Input
                  icon={FaLock}
                  type={showPassword ? "text" : "password"}
                  label="Password"
                  error={errors.password}
                  {...register("password")}
                />
                {showPassword ? (
                  <Center
                    top="12"
                    right="4"
                    as="button"
                    onClick={() => setShowPassword(false)}
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
                    as="button"
                    position="absolute"
                    onClick={() => setShowPassword(true)}
                    zIndex="1"
                    color="red.600"
                  >
                    <FaEyeSlash />
                  </Center>
                )}
              </Box>
              <Box position="relative" w="100%" h="100%">
                <Input
                  icon={FaLock}
                  type={showConfirmPassword ? "text" : "password"}
                  label="Password Confirm"
                  error={errors.confirm_password}
                  {...register("confirm_password")}
                />
                {showConfirmPassword ? (
                  <Center
                    top="12"
                    right="4"
                    as="button"
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
                    as="button"
                    position="absolute"
                    onClick={() => setShowConfirmPassword(true)}
                    zIndex="1"
                    color="red.600"
                  >
                    <FaEyeSlash />
                  </Center>
                )}
              </Box>
              <Flex flexDir="column" w="100%">
                <Flex justifyContent="space-between">
                  <Button
                    w="30%"
                    h="30px"
                    bg="grey.0"
                    _hover={{
                      filter: "opacity(90%)",
                    }}
                  >
                    <FcGoogle />
                  </Button>
                  <Button
                    h="30px"
                    w="30%"
                    bg="blue.300"
                    _hover={{
                      filter: "opacity(90%)",
                    }}
                  >
                    <FaFacebookF fill="white" />
                  </Button>
                  <Button
                    h="30px"
                    w="30%"
                    background="grey.900"
                    _hover={{
                      filter: "opacity(90%)",
                    }}
                  >
                    <FaApple fill="white" />
                  </Button>
                </Flex>
                <Button
                  mt="10"
                  w="100%"
                  h="50px"
                  bg={isWideVersion ? "blue.600" : "red.600"}
                  fontWeight="700"
                  color="grey.0"
                  _hover={
                    isWideVersion ? { bg: "pink.100" } : { bg: "pink.800" }
                  }
                  type="submit"
                >
                  Sign Up
                </Button>
                <Flex justifyContent="center">
                  <Text mt="4" fontWeight="600" color="grey.0">
                    Already have an account?
                    <Link
                      color="blue.600"
                      fontWeight="extrabold"
                      _hover={{
                        color: "pink.100",
                      }}
                      onClick={() => navigate("/signin", { replace: true })}
                      ml="2"
                    >
                      click here.
                    </Link>
                  </Text>
                </Flex>
              </Flex>
            </VStack>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

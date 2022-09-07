import { Box, Button, Flex, Image, Link, Text, VStack } from "@chakra-ui/react";

import Logo from "../../assets/logo-form.svg";

import { FaApple, FaEnvelope, FaFacebookF, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { Input } from "../../components/Input";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAuth } from "../../contexts/Auth";

import { signInSchema } from "../../schemas";

interface SignInData {
  email: string;
  password: string;
}

export const SignInForm = () => {
  const { signIn } = useAuth();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SignInData>({
    resolver: yupResolver(signInSchema),
  });

  const handleSignIn = ({ email, password }: SignInData) => {
    signIn({ email, password }).catch(
      (err) => "Erro ao logar, tente novamente!"
    );
    console.log("teste");
  };

  return (
    <>
      <Flex
        shadow="30px 0px 30px grey.900, inset -100px 0px 30px rgba(255, 255, 255, 0.6);"
        opacity="0.1"
        w="35vw"
        bg="rgba(217, 217, 217, 0.5);"
        filter="blur(2px)"
      ></Flex>
      <Flex
        position="fixed"
        right={["10%", "10%", 0, 0]}
        h="100vh"
        w={["80vw", "80vw", "35vw", "35vw"]}
        justifyContent="center"
      >
        <Flex
          as="form"
          onSubmit={handleSubmit(handleSignIn)}
          h="100vh"
          w="100%"
          flexDir="column"
          padding={["0", "0", "10", "20"]}
          alignItems="center"
          justifyContent="center"
        >
          <Image w={["200px", "200px", "320px"]} h="110px" src={Logo} />
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
            bg="blue.600"
            fontWeight="700"
            color="white"
            borderRadius="10px"
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
              <Link color="blue.600" fontWeight="extrabold">
                Click here.
              </Link>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

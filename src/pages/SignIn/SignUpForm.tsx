import {
  Box,
  Button,
  Flex,
  FormLabel,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import Logo from "../../assets/logo-form.svg";
import { FcGoogle } from "react-icons/fc";
import {
  FaApple,
  FaEnvelope,
  FaFacebookF,
  FaKey,
  FaLock,
} from "react-icons/fa";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { sign } from "crypto";

const signInSchema = yup.object().shape({
  email: yup
    .string()
    .required("Por favor informe o email")
    .email("Invalid email"),
  password: yup.string().required("Por favor informe a senha"),
});

interface SignInDados {
  email: string;
  password: string;
}

export const SignInForm = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SignInDados>({
    resolver: yupResolver(signInSchema),
  });

  const handleSignIn = (data: SignInDados) => {
    console.log("teste");
  };

  return (
    <>
      <Flex
        shadow="30px 0px 30px #000000, inset -100px 0px 30px rgba(255, 255, 255, 0.6);"
        opacity="0.1"
        w="35vw"
        bg="rgba(217, 217, 217, 0.5);"
        filter="blur(2px)"
      ></Flex>
      <Flex position="revert" h="100vh" w="35vw">
        {/* revert pra mudar o lado */}
        <Flex
          as="form"
          onSubmit={handleSubmit(handleSignIn)}
          h="100vh"
          w="35vw"
          flexDir="column"
          p="35px 150px 110px 110px"
          alignItems="center"
          justifyContent="center"
        >
          <Image w="320px" h="110px" src={Logo} />
          <Box>
            <Text color="white" fontWeight="600"  fontSize="2xl" m="10">
              Create Account
            </Text>
            <VStack mt="10" spacing="10">
              <Box w="100%">
                <Input
                  //   name="email" não é necessário name, pois ele será inserido no register
                  label="Email"
                  icon={FaEnvelope}
                  type="email"
                  placeholder="Your email"
                  {...register("email")}
                ></Input>
                <Input
                  label="Password"
                  icon={FaKey}
                  type="password"
                  placeholder="Your password"
                  {...register("password")}
                ></Input>
              </Box>
            </VStack>
          </Box>
          <Button mt="15vh" w="55%" bg="#6778B1" fontWeight="700" color="white">
            Sign Up
          </Button>
          <Flex flexDir="column">
            <Text mt="3vh" fontWeight="600" color="white">
              Already have an account?{" "}
              <Link color="blue.600" fontWeight="extrabold">
                click here.
              </Link>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

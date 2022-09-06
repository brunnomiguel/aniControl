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
import { useAuth } from "../../contexts/Auth";

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
  const { signIn } = useAuth();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SignInDados>({
    resolver: yupResolver(signInSchema),
  });

  const handleSignIn = ({ email, password }: SignInDados) => {
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
        right="3"
        h="100vh"
        w="35vw"
        justifyContent="center"
      >
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
            <Text color="white" fontWeight="600" fontSize="2xl" m="10">
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
          <Button
            type="submit"
            mt="10vh"
            w={["150px", "150px", "200px", "300px"]}
            h="50px"
            bg="blue.600"
            fontWeight="700"
            color="white"
          >
            Sign Up
          </Button>
          <Flex flexDir="column" justifyContent="center">
            <Text
              mt="3vh"
              w="200px"
              textAlign="justify"
              fontWeight="600"
              color="white"
            >
              Already have an account?
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

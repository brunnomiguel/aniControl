import { Flex, Heading, Text, Grid, Image, VStack } from "@chakra-ui/react";
import signInImage from "../../assets/sign-in-image.svg";
import logoForm from "../../assets/logo-form.svg";
import { Input } from "../Input";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaLock } from "react-icons/fa";

export const Login = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm();

  return (
    // fundo da page login
    <Flex
      padding="10px 15px"
      alignItems="center"
      h="100vh"
      bgGradient="Linear(to-r, pink.800 60%, pink.50 40%"
      color="grey.0"
    >
      {/* flex que vai conter imagem e form */}
      <Flex
        w="100%"
        justifyContent="center"
        flexDirection="row"
        alignItems="center"
      >
        <Grid w="100%" paddingRight="150px">
          <Image src={signInImage} alt="Personagem de anime" boxSize="80%" />
        </Grid>
        <Grid as="form" mt="4" w="100%" padding="30px 30px" bg="pink.50">
          <Image src={logoForm} alt="Personagem de anime" boxSize="80%" />
          <Heading size="lg">Sign In</Heading>
          <VStack spacing="5" mt="6">
            <Input
              placeholder="Digite seu email"
              name="Email"
              icon={FaEnvelope}
              label="Email"
            ></Input>
            <Input
              placeholder="Digite sua senha"
              name="Senha"
              icon={FaLock}
              label="Senha"
            ></Input>
          </VStack>
        </Grid>
      </Flex>
    </Flex>
  );
};
// 4 equivale a 1 rem ou 16px

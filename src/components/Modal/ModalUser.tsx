import {
  Box,
  Button,
  Center,
  color,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Flex,
  VStack,
} from "@chakra-ui/react";
import {
  FaEnvelope,
  FaExclamation,
  FaKey,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import { theme } from "../../styles/theme";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../contexts/Auth";
import { jsonApi } from "../../services/api";

const updateSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup.string().required("Senha obrigatória"),
  confirm_password: yup
    .string()
    .required("Confirmação de senha obrigatória")
    .oneOf([yup.ref("password")], "As senhas não são iguais!!"),
});

interface UpdateUserData {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

interface ModalSucessProps {
  isOpen: boolean;
  onClose: () => void;
  onClick: () => void;
}

export const ModalSucess = ({
  isOpen,
  onClose,
  onClick,
}: ModalSucessProps) => {
  const { signIn } = useAuth();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<UpdateUserData>({
    resolver: yupResolver(updateSchema),
  });

  const handleUserUpdate = ({ name, email, password }: UpdateUserData) => {
    jsonApi
      .post("/register", { name, email, password })
      .then((response) => {
        console.log("Dados atualizados corretamente");
      })
      .catch((err) => {
        console.log("falha ao atualizar os dados");
      });
  };

  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>
        <Center bg="red.500" w="30px" h="30px" borderRadius="5px">
          <FaUser color={theme.colors.white} />
        </Center>
        <Text fontWeight="bold" ml="2">
          Usuário
        </Text>
        <Center
          as="button"
          onClick={onClose}
          ml="auto"
          w="32px"
          h="32px"
          bg="red.500"
          fontSize="lg"
          borderRadius="5px"
        >
          <FaTimes color={theme.colors.white}></FaTimes>
        </Center>
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody textAlign="center">
        <Flex
          as="form"
          onSubmit={handleSubmit(handleUserUpdate)}
          h="100vh"
          w="100%"
          flexDir="column"
          padding="50px"
          alignItems="center"
          justifyContent="center"
        >
          <Box w="100%">
            <VStack mt="10" spacing="10">
              <Box w="100%">
                <Input
                  label="Name"
                  icon={FaUser}
                  placeholder="Your name"
                  {...register("name")}
                ></Input>
                <Input
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
                <Input
                  label="Confirm password"
                  icon={FaKey}
                  type="password"
                  placeholder="Confirm_password"
                  {...register("confirm_password")}
                ></Input>
              </Box>
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
            Alterar dados
          </Button>
        </Flex>
      </ModalBody>
    </ModalContent>
  </Modal>;
};

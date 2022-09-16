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
  useToast,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  FaEnvelope,
  FaExclamation,
  FaKey,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import { theme } from "../../../styles/theme";
import { Input } from "../../Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../../contexts/Auth";
import { jsonApi } from "../../../services/api";

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

interface ModalUpdateUserProps {
  isOpen: boolean;
  onClose: () => void;
  onClick: () => void;
  userId: number;
  userName: string;
}

export const ModalUpdateUser = ({
  isOpen,
  onClose,
  onClick,
  userId,
  userName,
}: ModalUpdateUserProps) => {
  const toast = useToast();
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<UpdateUserData>({
    resolver: yupResolver(updateSchema),
  });

  const handleUserUpdate = ({ name, email, password }: UpdateUserData) => {
    jsonApi
      .patch(
        `/users/${userId}/`,
        { name, email, password }
      )
      .then((response) => {
        // add toast de sucesso
        onClose();
        toast({
          title: "Success!",
          description: "Updated data!!",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        console.log("Dados atualizados corretamente");
      })
      .catch((err) => {
        toast({
          title: "Fail!",
          description: "Error updating data!",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
        console.log("falha ao atualizar os dados");
      });
  };

  <Modal  isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent bg="grey.600" >
      <ModalHeader>
        <Center bg="red.500" w="30px" h="30px" borderRadius="5px">
          <FaUser color={theme.colors.white} />
        </Center>
        <Text fontWeight="bold" ml="2">
          {userName}
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
            bg="red.500"
            _hover={isWideVersion ? { bg: "pink.100" } : { bg: "pink.800" }}
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


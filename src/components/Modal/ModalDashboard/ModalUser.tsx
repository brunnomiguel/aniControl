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
  onClick?: () => void;
  userId: number;
  userName: string;
  accessToken: string;
}

export const ModalUpdateUser = ({
  isOpen,
  onClose,
  onClick,
  userId,
  userName,
  accessToken,
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
        { name, email, password },
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      )
      .then((response) => {
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
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent  w={["300px", "300px", "400px"]} h={["680px", "680px", "680px"]} bg="grey.600">
        <ModalHeader>
          <Flex flexDir="row" padding="5">
            <Flex flexDir="column">
              <Center mb="5" bg="red.500" w="70px" h="70px" borderRadius="50%">
                <FaUser color={theme.colors.white} />
              </Center>
              <Center fontWeight="bold">{userName}</Center>
            </Flex>
            <Center
              as="button"
              onClick={onClose}
              ml="auto"
              w="40px"
              h="40px"
              bg="red.500"
              fontSize="lg"
              borderRadius="5px"
            >
              <FaTimes color={theme.colors.white}></FaTimes>
            </Center>
          </Flex>
        </ModalHeader>
        {/* <ModalCloseButton /> */}
        <ModalBody textAlign="center">
          <Flex
            as="form"
            onSubmit={handleSubmit(handleUserUpdate)}
            h="100%"
            w="100%"
            flexDir="column"
            padding="20px"
            alignItems="center"
            justifyContent="center"
          >
            <Box w="100%">
              <VStack>
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
                    placeholder="Confirm password"
                    {...register("confirm_password")}
                  ></Input>
                </Box>
              </VStack>
            </Box>
            <Button
              type="submit"
              mt="14"
              mb="5"
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
    </Modal>
  );
};

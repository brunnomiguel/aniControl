import {
  Box,
  Button,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  Flex,
  VStack,
  useToast,
  useBreakpointValue,
} from "@chakra-ui/react";

import { theme } from "../../../styles/theme";
import { FaEnvelope, FaKey, FaTimes, FaUser } from "react-icons/fa";

import { useForm } from "react-hook-form";
import { updateSchema } from "../../../schemas";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "../../Input";
import { jsonApi } from "../../../services/api";
import { useAuth } from "../../../contexts/Auth";

interface IupdateUser {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

interface ImodalUpdateUser {
  isOpen: boolean;
  onClose: () => void;
  onClick?: () => void;
  userId: number;
  userName: string;
}

export const ModalUpdateUser = ({
  isOpen,
  onClose,
  userId,
  userName,
}: ImodalUpdateUser) => {
  const toast = useToast();

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  const { accessToken } = useAuth();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<IupdateUser>({
    resolver: yupResolver(updateSchema),
  });

  const handleUserUpdate = ({ name, email, password }: IupdateUser) => {
    jsonApi
      .patch(
        `/users/${userId}/`,
        { name, email, password },
        { headers: { Authorization: `Bearer ${accessToken}` } }
      )
      .then((_) => {
        onClose();
        toast({
          title: "Success!",
          description: "Updated data!!",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      })
      .catch((_) => {
        toast({
          title: "Fail!",
          description: "Error updating data!",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
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
                  error={errors.name}
                ></Input>
                <Input
                  label="Email"
                  icon={FaEnvelope}
                  type="email"
                  placeholder="Your email"
                  {...register("email")}
                  error={errors.email}
                ></Input>
                <Input
                  label="Password"
                  icon={FaKey}
                  type="password"
                  placeholder="Your password"
                  {...register("password")}
                  error={errors.password}
                ></Input>
                <Input
                  label="Confirm password"
                  icon={FaKey}
                  type="password"
                  placeholder="Confirm_password"
                  {...register("confirm_password")}
                  error={errors.confirm_password}
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

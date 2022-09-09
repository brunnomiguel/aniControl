import {
  Box,
  Center,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Grid,
  Heading,
  Text,
} from "@chakra-ui/react";

import { FiLogOut } from "react-icons/fi";
import { MdOutlineDashboard } from "react-icons/md";

import { theme } from "../../styles/theme";

import { useAuth } from "../../contexts/Auth";
import { useNavigate } from "react-router-dom";

interface IdrawerLogoutProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DrawerLogout = ({ isOpen, onClose }: IdrawerLogoutProps) => {
  const { user, signOut } = useAuth();

  const navigate = useNavigate();

  return (
    <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay mt={["10vh", "10vh"]} />
      <DrawerContent ml="auto" mt="65px" w="320px">
        <DrawerHeader
          borderBottomWidth="2px"
          borderColor="grey.100"
          color="grey.600"
        >
          Olá {user.name}
        </DrawerHeader>
        <DrawerBody>
          <Grid>
            <Heading as="h2" fontSize="lg" color="grey.600" pb="2">
              O que deseja fazer?
            </Heading>
            <Flex
              alignItems="center"
              pb="2"
              onClick={() => signOut()}
              cursor="pointer"
            >
              <Center
                w="30px"
                h="30px"
                mr="2"
                bg="red.600"
                fontSize="2xl"
                borderRadius="md"
              >
                <FiLogOut color={theme.colors.white} />
              </Center>
              <Text color="grey.600" fontWeight="bold">
                Sair
              </Text>
            </Flex>
            <Flex
              alignItems="center"
              onClick={() => navigate("/dashboard", { replace: true })}
              cursor="pointer"
            >
              <Center
                w="30px"
                h="30px"
                mr="2"
                bg="red.600"
                fontSize="2xl"
                borderRadius="md"
              >
                <MdOutlineDashboard color={theme.colors.white} />
              </Center>
              <Text color="grey.600" fontWeight="bold">
                Ir para dashbord
              </Text>
            </Flex>
          </Grid>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

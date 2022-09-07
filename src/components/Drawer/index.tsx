import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerFooter,
  Avatar,
  Text,
  Flex,
  VStack,
  theme,
} from "@chakra-ui/react";

import { DrawerButton } from "./DrawerButton";
import { DrawerStatics } from "./DrawerStatics";

import { FaStar, FaPencilAlt } from "react-icons/fa";
import { FiNavigation } from "react-icons/fi";
import { useAuth } from "../../contexts/Auth";

interface IDashboardDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  setFavoritesView: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DashboardDrawer = ({ isOpen, onClose, setFavoritesView }: IDashboardDrawerProps) => {
  const { user } = useAuth();

  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} placement="left" onEsc={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="grey.600" border="1px solid black">
          <DrawerCloseButton color="grey.0" />
          <DrawerHeader>
            <Flex flexDir="row" align="center" justify="center">
              <Avatar bgColor="red.600" />
              <Text ml="2vw" fontSize="1.8rem" color="grey.0">
                {user && user.name}
              </Text>
            </Flex>
          </DrawerHeader>
          <DrawerBody
            padding="0"
            css={{
              "&::-webkit-scrollbar": {
                width: "4px",
              },
              "&::-webkit-scrollbar-track": {
                width: "6px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: `${theme.colors.red[600]}`,
                borderRadius: "24px",
              },
            }}
          >
            <VStack spacing="8%" marginTop="10%" w="95%" align="flex-start">
              <DrawerButton
                Icon={FaStar}
                Title={"Favorites"}
                activeColor="red.600"
                bgColor="red.600"
                hoverColor="pink.800"
                onClick={() => {
                  onClose();
                  setFavoritesView((oldState) => !oldState);
                }}
              />
              <DrawerButton
                Icon={FaPencilAlt}
                Title={"Edit Profile"}
                activeColor="red.600"
                bgColor="red.600"
                hoverColor="pink.800"
              />
            </VStack>
            <DrawerStatics />
            <VStack spacing="8%" marginTop="10%" marginBottom="10%" w="95%" align="flex-start">
              <DrawerButton
                Icon={FiNavigation}
                Title={"Edit Profile"}
                activeColor="blue.50"
                bgColor="blue.50"
                hoverColor="blue.400"
              />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

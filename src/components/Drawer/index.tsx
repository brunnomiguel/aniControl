import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  Avatar,
  Text,
  Flex,
  VStack,
  theme,
} from "@chakra-ui/react";

import { FiNavigation } from "react-icons/fi";
import { FaStar, FaPencilAlt } from "react-icons/fa";

import { DrawerButton } from "./DrawerButton";
import { DrawerStatics } from "./DrawerStatics";

import { useAuth } from "../../contexts/Auth";
import { useAnimeList } from "../../contexts/AnimeList";

import { useNavigate } from "react-router-dom";

interface IDashboardDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  setFavoritesView: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DashboardDrawer = ({
  isOpen,
  onClose,
  setFavoritesView,
}: IDashboardDrawerProps) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { userAnimes } = useAnimeList();
  return (
    <>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="left"
        onEsc={onClose}
      >
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
            <VStack
              spacing="8%"
              marginTop="10%"
              marginBottom="10%"
              w="95%"
              align="flex-start"
            >
              {userAnimes.length > 0 && (
                <DrawerButton
                  Icon={FiNavigation}
                  Title={"Browse"}
                  onClick={() => navigate("/browse")}
                  activeColor="blue.50"
                  bgColor="blue.50"
                  hoverColor="blue.400"
                />
              )}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

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
} from "@chakra-ui/react";

import { DrawerButton } from "./DrawerButton";
import { DrawerStatics } from "./DrawerStatics";

import { FaStar, FaPencilAlt } from "react-icons/fa";
import { FiNavigation } from "react-icons/fi";

interface IDashboardDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DashboardDrawer = ({ isOpen, onClose }: IDashboardDrawerProps) => {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="left"
        onEsc={onClose}
      >
        <DrawerOverlay />
        <DrawerContent bg="#2C2C38" border="1px solid black">
          <DrawerCloseButton color="#fff" />
          <DrawerHeader>
            <Flex flexDir="row" align="center" justify="center">
              <Avatar bgColor="#5A2843" />
              <Text ml="2vw" fontSize="1.8rem" color="#fff">
                UserName
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
                background: "#5A2843",
                borderRadius: "24px",
              },
            }}
          >
            <VStack spacing="8%" marginTop="10%" w="95%" align="flex-start">
              <DrawerButton
                Icon={FaStar}
                Title={"Favorites"}
                activeColor="#5A2843"
                bgColor="#5A2843"
                hoverColor="#28121E"
              />
              <DrawerButton
                Icon={FaPencilAlt}
                Title={"Edit Profile"}
                activeColor="#5A2843"
                bgColor="#5A2843"
                hoverColor="#28121E"
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
              <DrawerButton
                Icon={FiNavigation}
                Title={"Edit Profile"}
                activeColor="#5CC6DC"
                bgColor="#5CC6DC"
                hoverColor="#0C6072"
              />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

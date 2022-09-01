import {
  Drawer,
  DrawerBody,
  useDisclosure,
  Button,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerFooter,
  Avatar,
  Text,
  Flex,
} from "@chakra-ui/react";

import { DrawerStatics } from "./DrawerStatics";

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
        <DrawerContent bg="#2C2C38">
          <DrawerCloseButton color="#fff" />
          <DrawerHeader>
            <Flex flexDir="row" align="center" justify="center">
              <Avatar bgColor="#5A2843" />
              <Text ml="2vw" fontSize="1.8rem" color="#fff">
                UserName
              </Text>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <DrawerStatics />
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

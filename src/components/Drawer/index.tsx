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
        <DrawerContent bg="#21212D">
          <DrawerCloseButton color="#fff" />
          <DrawerHeader>
            <Flex flexDir="row" align="center" justify="center">
              <Avatar bgColor="#5A2843" />
              <Text ml="2vw" fontSize="1.8rem" color="#fff">
                UserName
              </Text>
            </Flex>
          </DrawerHeader>
          <DrawerBody></DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

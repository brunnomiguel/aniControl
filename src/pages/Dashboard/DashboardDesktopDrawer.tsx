import { Avatar, Box, Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { FaPencilAlt, FaStar } from "react-icons/fa";
import { FiNavigation } from "react-icons/fi";
import { DrawerButton } from "../../components/Drawer/DrawerButton";
import { DrawerStatics } from "../../components/Drawer/DrawerStatics";
import { useAuth } from "../../contexts/Auth";

export const DashboardDesktopDrawer = () => {
  const { user } = useAuth();

  return (
    <Box
      w="50vw"
      overflowY="scroll"
      overflowX="hidden"
      h="93vh"
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
      bg="#2C2C38"
    >
      <Flex flexDir="row" align="center" justify="center" marginTop="5%">
        <Avatar bgColor="#5A2843" />
        <Text ml="1vw" fontSize="1.8rem" color="#fff">
          {/* {user.name} */}
        </Text>
      </Flex>
      <VStack spacing="8%" marginTop="5%" w="95%" align="flex-start">
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
      <VStack w="95%" align="flex-start" mt="10%">
        <DrawerButton
          Icon={FiNavigation}
          Title={"Browse"}
          activeColor="#5CC6DC"
          bgColor="#5CC6DC"
          hoverColor="#0C6072"
        />
      </VStack>
    </Box>
  );
};

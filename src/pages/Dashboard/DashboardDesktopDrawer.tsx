import { Avatar, Box, Flex, Text, theme, VStack } from "@chakra-ui/react";
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
      borderRadius="20px"
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
      bg="grey.600"
    >
      <Flex flexDir="row" align="center" justify="center" marginTop="5%">
        <Avatar bgColor="red.600" />
        <Text ml="1vw" fontSize="1.8rem" color="#fff">
          {user! ? user.name : "usuário sem nome"}
        </Text>
      </Flex>
      <VStack spacing="8%" marginTop="5%" w="95%" align="flex-start">
        <DrawerButton
          Icon={FaStar}
          Title={"Favorites"}
          activeColor="red.600"
          bgColor="red.600"
          hoverColor="pink.800"
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
      <VStack w="95%" align="flex-start" mt="10%">
        <DrawerButton
          Icon={FiNavigation}
          Title={"Browse"}
          activeColor="blue.50"
          bgColor="blue.50"
          hoverColor="blue.400"
        />
      </VStack>
    </Box>
  );
};

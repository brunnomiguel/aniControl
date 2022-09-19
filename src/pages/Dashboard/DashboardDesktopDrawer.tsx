import { useNavigate } from "react-router-dom";

import { FiNavigation } from "react-icons/fi";
import { FaPencilAlt, FaStar } from "react-icons/fa";

import { Avatar, Box, Flex, Text, theme, VStack } from "@chakra-ui/react";

import { useAuth } from "../../contexts/Auth";
import { useAnimeList } from "../../contexts/AnimeList";
import { DrawerButton } from "../../components/Drawer/DrawerButton";
import { DrawerStatics } from "../../components/Drawer/DrawerStatics";

interface IDashboardDesktopProps {
  setFavoritesView: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DashboardDesktopDrawer = ({
  setFavoritesView,
}: IDashboardDesktopProps) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { userAnimes } = useAnimeList();
  return (
    <Box
      w="50vw"
      overflowY="scroll"
      overflowX="hidden"
      h="92vh"
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
          {user && user.name}
        </Text>
      </Flex>
      <VStack spacing="8%" marginTop="5%" w="95%" align="flex-start">
        <DrawerButton
          Icon={FaStar}
          Title={"Favorites"}
          activeColor="red.600"
          bgColor="red.600"
          hoverColor="pink.800"
          onClick={() => setFavoritesView((oldState) => !oldState)}
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
    </Box>
  );
};

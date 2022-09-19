import { useEffect, useState } from "react";
import { Box, Flex, useDisclosure } from "@chakra-ui/react";

import { useAnimeList } from "../../contexts/AnimeList";

import { DashboardList } from "./DashboardList/DashboardList";
import { DashboardDesktopDrawer } from "./DashboardDesktopDrawer";

import { Header } from "../../components/Header";
import { DashboardDrawer } from "../../components/Drawer";
import { HoveringButton } from "../../components/Drawer/HoveringButton";

export const Dashboard = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { getUserAnimes } = useAnimeList();
  const [smallView, setSmallView] = useState(false);
  const [FavoritesView, setFavoritesView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        setSmallView(true);
      } else {
        setSmallView(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  const handleFavorites = () => {
    getUserAnimes().then((_) => {
      setFavoritesView(!FavoritesView);
    });
  };

  return (
    <Box w="100%" h="100vh" bgColor="grey.700">
      <Header />
      <Flex flexDir="row">
        {smallView ? (
          <>
            <DashboardDrawer
              isOpen={isOpen}
              onClose={onClose}
              setFavoritesView={setFavoritesView}
            />
            <HoveringButton onOpen={onOpen} />
          </>
        ) : (
          <DashboardDesktopDrawer setFavoritesView={handleFavorites} />
        )}
        <DashboardList FavoritesView={FavoritesView} />
      </Flex>
    </Box>
  );
};

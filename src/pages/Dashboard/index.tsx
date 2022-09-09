import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { DashboardList } from "./DashboardList/DashboardList";
import { DashboardDrawer } from "../../components/Drawer";
import { HoveringButton } from "../../components/Drawer/HoveringButton";
import { Header } from "../../components/Header";
import { DashboardDesktopDrawer } from "./DashboardDesktopDrawer";
import { useAnimeList } from "../../contexts/AnimeList";

export const Dashboard = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { getUserAnimes } = useAnimeList();
  const [smallView, setSmallView] = useState(false);
  const [FavoritesView, setFavoritesView] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 992) {
      setSmallView(true);
    } else {
      setSmallView(false);
    }

    const handleResize = () => {
      if (window.innerWidth < 992) {
        setSmallView(true);
      } else {
        setSmallView(false);
      }
    };

    window.addEventListener("resize", handleResize);
  }, []);

  const handleFavorites = () => {
    getUserAnimes().then((_) => {
      setFavoritesView(!FavoritesView);
    });
  };

  return (
    <Box w="100vw" h="100vh" bgColor="grey.700">
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

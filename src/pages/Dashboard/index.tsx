import { useEffect, useState } from "react";
import { Box, Flex, useDisclosure } from "@chakra-ui/react";

import { useAnimeList } from "../../contexts/AnimeList";

import { Header } from "../../components/Header";
import { DashboardDrawer } from "../../components/Drawer";
import { DashboardList } from "./DashboardList/DashboardList";
import { DashboardDesktopDrawer } from "./DashboardDesktopDrawer";
import { HoveringButton } from "../../components/Drawer/HoveringButton";
import { ModalUpdateUser } from "../../components/Modal/ModalDashboard/ModalUser";
import { useAuth } from "../../contexts/Auth";

export const Dashboard = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [smallView, setSmallView] = useState(false);
  const [FavoritesView, setFavoritesView] = useState(false);
  const { getUserAnimes } = useAnimeList();
  const { user } = useAuth();

  const {
    isOpen: isOpenModalUser,
    onClose: onCloseModalUser,
    onOpen: onOpenModalUser,
  } = useDisclosure();

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
    <Box w="100%" bgColor="grey.700">
      <Header />
      <Flex flexDir="row">
        {smallView ? (
          <>
            <DashboardDrawer
              isOpen={isOpen}
              onClose={onClose}
              setFavoritesView={setFavoritesView}
              onOpenModalUser={onOpenModalUser}
            />
            <HoveringButton onOpen={onOpen} />
          </>
        ) : (
          <DashboardDesktopDrawer setFavoritesView={handleFavorites} />
        )}
        <DashboardList FavoritesView={FavoritesView} />
      </Flex>
      <ModalUpdateUser
        isOpen={isOpenModalUser}
        onClose={onCloseModalUser}
        userId={user.id}
        userName={user.name}
      />
    </Box>
  );
};

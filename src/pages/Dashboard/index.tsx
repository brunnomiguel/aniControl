import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { DashboardList } from "./DashboardList/DashboardList";
import { DashboardDrawer } from "../../components/Drawer";
import { HoveringButton } from "../../components/Drawer/HoveringButton";
import { Header } from "../../components/Header";
import { DashboardDesktopDrawer } from "./DashboardDesktopDrawer";

export const Dashboard = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [smallView, setSmallView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        setSmallView(true);
      } else {
        setSmallView(false);
      }
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Box w="100vw" h="100vh" bgColor="grey.700">
      <Header />
      <Flex flexDir="row">
        {smallView ? (
          <>
            <DashboardDrawer isOpen={isOpen} onClose={onClose} />
            <HoveringButton onOpen={onOpen} />
          </>
        ) : (
          <DashboardDesktopDrawer />
        )}
        <DashboardList />
      </Flex>
    </Box>
  );
};

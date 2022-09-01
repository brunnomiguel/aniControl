import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { DashboardList } from "./DashboardList";
import { DashboardDrawer } from "../../components/Drawer";
import { HoveringButton } from "../../components/Drawer/HoveringButton";
import { Header } from "../../components/Header";
import { DashboardDesktopDrawer } from "./DashboardDesktopDrawer";
import { useAuth } from "../../contexts/Auth";

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

    signIn({ email: "kenzinho@mail.com", password: "123456" });

    window.addEventListener("resize", handleResize);
  }, []);

  const { signIn } = useAuth();

  return (
    <Box w="100vw" h="100vh" bgColor="#21212D">
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

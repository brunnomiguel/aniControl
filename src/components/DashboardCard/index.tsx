import { animeProps } from "../../contexts/FullAnimes/fullAnimes.types";
import { useEffect, useState } from "react";
import { MobileViewCard } from "./MobileViewCard";
import { DesktopViewCard } from "./DesktopViewCard";
import { Box } from "@chakra-ui/react";

interface IDashboardCardProps {
  anime: animeProps;
  id: number;
}

export const DashboardCard = ({ anime, id }: IDashboardCardProps) => {
  const [smallView, setSmallView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSmallView(true);
      } else {
        setSmallView(false);
      }
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Box width={["95vw", "95vw", "95vw", "33vw"]}>
      {smallView ? (
        <MobileViewCard anime={anime} id={id} />
      ) : (
        <DesktopViewCard anime={anime} id={id} />
      )}
    </Box>
  );
};

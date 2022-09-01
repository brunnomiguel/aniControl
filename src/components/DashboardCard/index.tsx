import { animeProps } from "./types";
import { useEffect, useState } from "react";
import { MobileViewCard } from "./MobileViewCard";
import { DesktopViewCard } from "./DesktopViewCard";

interface IDashboardCardProps {
  anime: animeProps;
}

export const DashboardCard = ({ anime }: IDashboardCardProps) => {
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
    <>
      {smallView ? (
        <MobileViewCard anime={anime} />
      ) : (
        <DesktopViewCard anime={anime} />
      )}
    </>
  );
};

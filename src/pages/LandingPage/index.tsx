import { useEffect, useState } from "react";
import { LandingContent } from "./LandingContent";
import { LandingMobile } from "./LandingMobile";

export const LandingPage = () => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 980) {
      setMobile(true);
    } else {
      setMobile(false);
    }

    const resize = () => {
      if (window.innerWidth < 980) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };

    window.addEventListener("resize", resize);
  }, []);

  return mobile ? <LandingMobile /> : <LandingContent />;
};

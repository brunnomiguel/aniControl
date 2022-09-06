<<<<<<< HEAD
import { ChakraProvider } from "@chakra-ui/react";
import { LandingContent } from "./pages/LandingPage/LandingContent";

export const App = () => {
  return (
    <ChakraProvider>
      <LandingContent />
    </ChakraProvider>
  );
=======
import { MainRoutes } from "./routes";

export const App = () => {
  return <MainRoutes />;
>>>>>>> 3c18681418e10e621cb1a4ccf7e9ce6be55d2900
};

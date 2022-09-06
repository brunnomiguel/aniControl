import { ChakraProvider } from "@chakra-ui/react";
import { LandingContent } from "./pages/LandingPage/LandingContent";

export const App = () => {
  return (
    <ChakraProvider>
      <LandingContent />
    </ChakraProvider>
  );
};

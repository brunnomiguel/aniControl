import { ChakraProvider } from "@chakra-ui/react";
import { Dashboard } from "./pages/Dashboard";

export const App = () => {
  return <ChakraProvider>
    <Dashboard/>
  </ChakraProvider>
};

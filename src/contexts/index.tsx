import { ReactNode } from "react";

import { AuthProvider } from "./Auth";
import { FullAnimesProvider } from "./FullAnimes";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <FullAnimesProvider>
      <AuthProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </AuthProvider>
    </FullAnimesProvider>
  );
};

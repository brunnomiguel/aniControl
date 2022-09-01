import { ReactNode } from "react";

import { AuthProvider } from "./Auth";
import { FullAnimesProvider } from "./FullAnimes";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimeListProvider } from "./AnimeList";
import { theme } from "../styles/theme";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <FullAnimesProvider>
      <AuthProvider>
        <AnimeListProvider>
          <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </AnimeListProvider>
      </AuthProvider>
    </FullAnimesProvider>
  );
};

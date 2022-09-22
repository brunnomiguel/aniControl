import { ReactNode } from "react";
import { theme } from "../styles/theme";

import { AuthProvider } from "./Auth";
import { AnimeListProvider } from "./AnimeList";
import { FullAnimesProvider } from "./FullAnimes";
import { ChakraProvider } from "@chakra-ui/react";

interface IappProvider {
  children: ReactNode;
}

export const AppProvider = ({ children }: IappProvider) => {
  return (
    <ChakraProvider theme={theme}>
      <FullAnimesProvider>
        <AuthProvider>
          <AnimeListProvider>{children}</AnimeListProvider>
        </AuthProvider>
      </FullAnimesProvider>
    </ChakraProvider>
  );
};

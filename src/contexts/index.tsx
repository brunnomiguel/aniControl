import { ReactNode } from "react";

import { AuthProvider } from "./Auth";
import { ChakraProvider } from "@chakra-ui/react";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <AuthProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </AuthProvider>
  );
};

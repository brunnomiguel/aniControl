import { ChakraProvider } from "@chakra-ui/react";
import { Dashboard } from "./pages/Dashboard";
import { SignUp } from "./pages/SignUp";

export const App = () => {
	return (
		<ChakraProvider>
			<SignUp />
		</ChakraProvider>
	);
};

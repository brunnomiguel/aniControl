import { ChakraProvider } from "@chakra-ui/react";
import { Dashboard } from "./pages/Dashboard";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";

export const App = () => {
	return (
		<ChakraProvider>
			<SignIn />
			{/* <SignUp/> */}
		</ChakraProvider>
	);
};

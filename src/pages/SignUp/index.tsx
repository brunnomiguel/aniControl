import { Flex } from "@chakra-ui/react";
import { BackgroundImg } from "./BackgroundImg";
import { SignUpForm } from "./SignUpForm";

export const SignUp = () => {
	return (
		<Flex flexDir="row" h="100vh" w="100vw">
			<SignUpForm />
			<BackgroundImg />
		</Flex>
	);
};

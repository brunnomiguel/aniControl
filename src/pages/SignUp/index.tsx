import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import { BackgroundAnimation } from "../../components/BackgroundAnimation";
import { BackgroundImg } from "./BackgroundImg";
import { SignUpForm } from "./SignUpForm";

export const SignUp = () => {
	const isWideVersion = useBreakpointValue({
		base: false,
		md: true,
	});
	return (
		<>
			{isWideVersion ? (
				<Box>
					<BackgroundAnimation />
					<Flex
						position="fixed"
						top="0"
						left="0"
						flexDir="row"
						h="100vh"
						w="100vw"
					>
						<SignUpForm />
						<BackgroundImg />
					</Flex>
				</Box>
			) : (
				<Flex bg="#21212D" flexDir="row" justifyContent="center">
					<SignUpForm />
				</Flex>
			)}
		</>
	);
};

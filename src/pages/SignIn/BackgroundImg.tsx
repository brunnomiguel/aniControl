import { Box, Flex, Image } from "@chakra-ui/react";
import ImgRegister from "../../assets/sign-in-image.svg";

export const BackgroundImg = () => {
	return (
		<Flex
			alignItems="center"
			flexDir="column"
			w="65vw"
			justifyContent="flex-end"
			borderLeft="0px solid green"
		>
			<Box>
				<Image h="98vh" src={ImgRegister} alt="ImgRegister" />
			</Box>
		</Flex>
	);
};

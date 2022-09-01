import { Box, Flex, Image } from "@chakra-ui/react";
import ImgRegister from "../../assets/sign-up-image.svg";

export const BackgroundImg = () => {
	return (
		<Flex
			alignItems="center"
			flexDir="column"
			w="70vw"
			justifyContent="flex-end"
			borderLeft="0px solid green"
		>
			<Box>
				<Image h="85vh" src={ImgRegister} alt="ImgRegister" />
			</Box>
		</Flex>
	);
};

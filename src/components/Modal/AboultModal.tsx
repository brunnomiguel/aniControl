import {
	Button,
	Modal,
	ModalContent,
	useDisclosure,
	ModalFooter,
	Text,
	Box,
	Flex,
	Image,
} from "@chakra-ui/react";
import Ryu from "../../assets/Aboult/Ryuzaki.png";
import Agata from "../../assets/Aboult/Agata.png";
import Naruto from "../../assets/Aboult/Naruto.png";
import DevBraz from "../../assets/Aboult/DevBraz.png";
import DevWill from "../../assets/Aboult/DevWill.jpg";
import DevBrunno from "../../assets/Aboult/DevBrunno.jpg";
import DevEric from "../../assets/Aboult/DevEric.jpg";
import DevEdson from "../../assets/Aboult/DevEdson.jpg";

interface AboultModalProps {
	id?: number;
}

export const AboultModal = ({ id }: AboultModalProps) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const devs = [
		{
			name: "Charles Braz",
			function: "Product Owner",
			devimg: DevBraz,
			animeimg: Ryu,
			info: "Quando resolvi ser um dev? Após estágio de engenharia entrei na Crefaz, onde houve a oportunidade de desenvolver mais de minhas capacidades. Conversando e recebendo conselhos de diversas pessoas do trabalho, conheci e me interessei pelo setor de desenvolvimento e realmente aquela área era para mim. Não demorou muito para eu correr atrás e começar os estudos na área.",
			linkedin: "https://www.linkedin.com/in/charlesbraz/",
			github: "https://github.com/devbraz",
			position: "9%",
			id: 1,
		},
		{
			name: "William Baierle",
			function: "Scrum Master",
			devimg: DevWill,
			animeimg: Agata,
			info: "Eu sou uma pesso aaaaswsdfssdfsd",
			linkedin: "https://www.linkedin.com/in/charlesbraz/",
			github: "https://github.com/devbraz",
			position: "28.5%",
			id: 2,
		},
		{
			name: "Brunno Miguel",
			function: "Tech Leader",
			devimg: DevBrunno,
			animeimg: Naruto,
			info: "Eu sou uma pesso aaaaswsdfssdfsd",
			linkedin: "https://www.linkedin.com/in/brunno-miguel/",
			github: "https://github.com/brunnomiguel",
			position: "48%",
			id: 3,
		},
		{
			name: "Eric James",
			function: "Quality Assurance",
			devimg: DevEric,
			animeimg: "",
			info: "Eu sou uma pesso aaaaswsdfssdfsd",
			linkedin: "https://www.linkedin.com/in/charlesbraz/",
			github: "https://github.com/devbraz",
			position: "68%",
			id: 4,
		},
		{
			name: "Edson Vinícius",
			function: "Quality Assurance",
			devimg: DevEdson,
			animeimg: "",
			info: "Eu sou uma pesso aaaaswsdfssdfsd",
			linkedin: "https://www.linkedin.com/in/charlesbraz/",
			github: "https://github.com/devbraz",
			position: "90%",
			id: 5,
		},
	];
	//CÓDIGO ABAIXO COMENTADO SERÁ APLICADO NA LANDING PAGE
	//MAP DO COMPONENTE
	/* <Flex w="100vw" justifyContent="space-around">
		{devId.map((id) => {
			return (
				<>
					<AboultModal id={id} />
				</>
			);
		})}
	</Flex> */
	//ARRAY DO MAP
	// const devId = [1, 2, 3, 4, 5];
	return (
		<>
			{devs.map((dev) => {
				return (
					<>
						{dev.id === id ? (
							<>
								<Flex flexDir="column" alignItems="center">
									<Text color="white" fontWeight="bold" fontSize="xl" p="10px">
										{dev.function}
									</Text>
									<Button
										w="150px"
										h="150px"
										borderRadius="75px"
										onClick={onOpen}
										p="0"
										bg="transparent"
									>
										{isOpen ? (
											<>
												<Image
													w="150px"
													h="150px"
													borderRadius="75px"
													src={dev.devimg}
												/>
											</>
										) : (
											<>
												<Image
													filter="blur(4px) saturate(0)"
													_hover={{ filter: "blur(4px) saturate(1)" }}
													w="150px"
													h="150px"
													borderRadius="75px"
													src={dev.devimg}
												/>
											</>
										)}
									</Button>
								</Flex>
								<Modal
									isCentered
									onClose={onClose}
									isOpen={isOpen}
									motionPreset="slideInBottom"
									size="7xl"
								>
									<ModalContent
										display="flex"
										justifyContent="center"
										alignItems="center"
										margin="20px 10px 60vh 10px"
										h="40vh"
										bg="#21212D"
										color="white"
									>
										<Flex
											flexDir="row"
											bg="#2C2C38"
											w="98%"
											h="100%"
											m="20px 0 20px 0"
											borderRadius="5px"
										>
											<Box
												w="20%"
												h="100%"
												borderTopLeftRadius="5px"
												borderBottomLeftRadius="5px"
											>
												<Image
													w="100%"
													h="100%"
													src={dev.animeimg}
													shadow="20px 0px 30px rgba(0, 0, 0, 0.3), inset -100px 0px 30px rgba(0, 0, 0, 0.3);"
												/>
											</Box>
											<Flex w="80%" h="auto" flexDir="column">
												<Text
													verticalAlign="end"
													fontSize="5xl"
													fontWeight="bold"
													pl="20px"
												>
													{dev.name}
												</Text>

												<Text ml="25px" h="auto" fontSize="sm" fontWeight="600">
													{dev.info}
												</Text>

												<ModalFooter>TECS</ModalFooter>
												<Box
													position="absolute"
													transform="rotate(45deg)"
													w="25px"
													h="25px"
													bg="#21212D"
													top="38vh"
													left={dev.position}
													zIndex="-1"
												/>
											</Flex>
										</Flex>
									</ModalContent>
								</Modal>
							</>
						) : (
							<></>
						)}
					</>
				);
			})}
		</>
	);
};

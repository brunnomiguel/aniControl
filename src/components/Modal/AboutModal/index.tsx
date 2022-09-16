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
	Link,
	Center,
	useBreakpointValue,
} from "@chakra-ui/react";

import { devsData } from "./devsData";

import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

interface AboultModalProps {
	id?: number;
}

export const AboutModal = ({ id }: AboultModalProps) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const isWideVersion = useBreakpointValue({
		base: false,
		md: true,
	});

	return (
		<>
			{devsData.map((dev) => {
				return (
					<>
						{dev.id === id ? (
							<>
								<Flex flexDir="column" alignItems="center" mt="50px">
									<Text
										color="white"
										fontWeight="bold"
										fontSize="xl"
										p="10px"
										w="125px"
										textAlign="center"
									>
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
											<Image
												objectFit="cover"
												w="150px"
												h="150px"
												borderRadius="75px"
												src={dev.devimg}
											/>
										) : (
											<Image
												objectFit="cover"
												filter="blur(3px) saturate(0)"
												_hover={{ filter: "blur(3px) saturate(1)" }}
												w="150px"
												h="150px"
												borderRadius="75px"
												src={dev.devimg}
											/>
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
										h={["70vh", "40vh"]}
										bg="#21212D"
										color="white"
									>
										<Flex
											flexDir={["column", "row"]}
											bg="#2C2C38"
											w="98%"
											h="100%"
											m="20px 0 20px 0"
											borderRadius="5px"
										>
											<Box
												position="relative"
												w={["100%", "20%"]}
												h={["60%", "100%"]}
												borderTopLeftRadius="5px"
												borderBottomLeftRadius="5px"
											>
												<Image
													position={["absolute", "relative"]}
													top={["25%", "0"]}
													w={["100%", "100%"]}
													h={["75%", "100%"]}
													src={dev.animeimg}
													shadow="20px 0px 30px rgba(0, 0, 0, 0.3), inset -100px 0px 30px rgba(0, 0, 0, 0.3);"
												/>
											</Box>
											<Flex
												w={["100%", "80%"]}
												h={["40%", "auto"]}
												flexDir="column"
												justifyContent="space-between"
											>
												<Text
													verticalAlign="end"
													fontSize={["2xl", "5xl"]}
													fontWeight="bold"
													pl="20px"
												>
													{dev.name}
												</Text>

												<Text
													m="0 25px 0 25px"
													h="auto"
													fontSize={["xs", "sm"]}
													fontWeight={["medium", "semibold"]}
												>
													{dev.info}
												</Text>

												<ModalFooter p={["5px", ""]}>
													<Flex flexDir="row" gap="10px">
														<Link target="_blank" href={dev.linkedin}>
															<Center fontSize="3xl">
																<FaLinkedin />
															</Center>
														</Link>
														<Link target="_blank" href={dev.github}>
															<Center fontSize="3xl">
																<FaGithubSquare />
															</Center>
														</Link>
													</Flex>
												</ModalFooter>
												<Box
													position="absolute"
													transform="rotate(45deg)"
													w="25px"
													h="25px"
													bg="#21212D"
													top={["68vh", "38vh"]}
													left={isWideVersion ? dev.position : "45vw"}
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

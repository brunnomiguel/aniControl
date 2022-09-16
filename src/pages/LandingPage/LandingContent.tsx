import {
	Box,
	Flex,
	Image,
	Text,
	Container,
	Button,
	ButtonGroup,
	Grid,
} from "@chakra-ui/react";

import Logo from "../../assets/imgs/logo-dash.svg";
import Heroes from "../../assets/imgs/heroes2.svg";
import Villains from "../../assets/imgs/villains2.svg";
import BackgroundImg from "../../assets/imgs/landLuffy.svg";
import BgGrey from "../../assets/imgs/background-landing-page.svg";

import { useNavigate } from "react-router-dom";
import { AboutModal } from "../../components/Modal/AboutModal";
import { FaChevronUp } from "react-icons/fa";

export const LandingContent = () => {
	const nav = useNavigate();
	const devId = [1, 2, 3, 4, 5];
	return (
		<Box maxW={"100vw"}>
			<Box w={"100%"} position={"absolute"} zIndex="1">
				<>
					<Flex
						as="header"
						w="100%"
						h="7vh"
						align="center"
						justify="space-between"
						// backgroundColor="grey.600"
						// boxShadow={"3px 3px 10px black"}
					>
						<Image
							pl="3vw"
							h="70%"
							w={["35%", "35%", "10%", "10%"]}
							src={Logo}
						/>
						<>
							<Grid>
								<Flex>
									<ButtonGroup spacing="6" paddingRight={"3vw"}>
										<Button
											size="sm"
											bg={"#6778B1"}
											_hover={{ bg: "#B28ECF" }}
											color="white"
											textShadow={"1px 1px 2px black"}
											boxShadow="2px 2px 8px black"
											onClick={() => nav("/signup")}
										>
											Sign Up
										</Button>
										<Button
											size="sm"
											bg={"#6778B1"}
											_hover={{ bg: "#B28ECF" }}
											color="white"
											textShadow={"1px 1px 2px black"}
											boxShadow="2px 2px 8px black"
											onClick={() => nav("/signin")}
										>
											Sign In
										</Button>
									</ButtonGroup>
								</Flex>
							</Grid>
						</>
					</Flex>
				</>
			</Box>

			<Flex maxW="100%" maxH={"100vh"}>
				<Box
					w="100%"
					h={"100vh"}
					bgGradient="linear(90deg, rgba(0, 0, 0, 1) 60%,  rgba(0, 0, 0, 0.5) 100%)"
					position={"absolute"}
					top="0"
					left="0"
				/>
				<Box w={"60%"} />

				<Box
					w={"40%"}
					h="100vh"
					backgroundImage={BackgroundImg}
					backgroundPosition={"left top"}
					backgroundSize="cover"
					backgroundRepeat={"no-repeat"}
				/>

				<Box
					position={"absolute"}
					marginLeft="5vw"
					marginTop={"30vh"}
					h="100vh"
				>
					<Text fontSize="5em" as={"b"} color="white" paddingLeft={"14%"}>
						AniControl
					</Text>
					<Text
						fontSize="1.3em"
						color="white"
						marginLeft={"14%"}
						marginBottom="15%"
						w="42%"
					>
						Have full control of the animes you're watching on a intuitive,
						meaningful and organized way.
					</Text>
					<Container marginLeft={"13%"}>
						<Text
							as="i"
							color={"white"}
							fontWeight="100"
							fontSize="1.1em"
							h={"100%"}
							w="10%"
						>
							“I see now that the circumstances of one's birth are irrelevant…
							It is what you do with the gift of life that determines who you
							are.”
						</Text>
					</Container>
				</Box>
			</Flex>

			<Flex
				direction={"column"}
				maxW="100vw"
				overflowX="hidden"
				flexWrap="wrap"
			>
				<Box backgroundImage={BgGrey}>
					<Flex dropShadow="base, inner">
						<Container maxW={"100%"}>
							<Flex direction={"column"} marginLeft="5vw" marginTop={"25vh"}>
								<Text fontSize="3em" as={"b"} textShadow={"2px 2px #000000"}>
									Modern
								</Text>
								<Text as={"i"} fontSize="1.1em" textShadow={"2px 2px #000000"}>
									Tired of complex websites with single to none visual response?
									Try out the discrete modern design of AniControl.
								</Text>
							</Flex>
						</Container>
						<Image src={Heroes} alt="Anime heroes image" boxSize="60%" />
					</Flex>

					<Flex>
						<Image src={Villains} alt="Anime villains image" boxSize="50%" />
						<Container>
							<Flex direction={"column"} marginRight="3vw" marginTop={"20vh"}>
								<Text fontSize="3em" as={"b"} textShadow={"-2px 2px #000000"}>
									Intuitive
								</Text>
								<Text fontSize={"1.2em"} textShadow={"-2px 2px #000000"}>
									Control your routine and total progress of your favourite
									animes in a simple and simplified way...
								</Text>
							</Flex>
						</Container>
					</Flex>
				</Box>

				<Box
					backgroundImage={BackgroundImg}
					backgroundBlendMode="darken"
					backgroundPosition="center top"
					backgroundSize={"cover"}
					h="100vh"
					maxW={"100vw"}
				>
					<Flex
						h="100%"
						w="100%"
						backdropFilter="auto"
						backdropBlur="3px"
						alignItems={"flex-end"}
						backgroundColor="#0000007a"
					>
						<Flex
							w="100vw"
							h="58vh"
							justifyContent="space-around"
							position="absolute"
							zIndex={"1"}
							backgroundColor="#0000007a"
							paddingBottom={"25px"}
						>
							{devId.map((id) => {
								return <AboutModal id={id} key={id} />;
							})}
						</Flex>
						<Flex
							w={"100vw"}
							h="10vh"
							position="absolute"
							flexDirection="column"
							justifyContent="end"
							backgroundColor={"#0000007a"}
							alignItems="center"
						>
							<Button
								zIndex="1"
								bg="white"
								w="40px"
								h="40px"
								borderRadius="25px"
								p="0"
							>
								<FaChevronUp fill="black" fontSize="25px" />
							</Button>
							<Text
								fontSize={"sm"}
								textShadow={"2px 2px #000000"}
								zIndex={"1"}
								margin="10px"
							>
								AniControl ©2022 Todos os direitos reservados
							</Text>
						</Flex>
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
};

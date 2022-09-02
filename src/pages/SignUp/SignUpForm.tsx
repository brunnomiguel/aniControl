import {
	Box,
	Button,
	Flex,
	FormLabel,
	Image,
	Input,
	Link,
	Text,
	useBreakpointValue,
} from "@chakra-ui/react";
import Logo from "../../assets/logo-form.svg";
import LogoMobile from "../../assets/logo-dash.svg";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebookF } from "react-icons/fa";

export const SignUpForm = () => {
	const isWideVersion = useBreakpointValue({
		base: false,
		md: true,
	});

	return (
		<>
			{isWideVersion ? (
				<>
					<Flex
						shadow="30px 0px 30px #000000, inset -100px 0px 30px rgba(255, 255, 255, 0.6);"
						opacity="0.1"
						w="35vw"
						bg="rgba(217, 217, 217, 0.5);"
						filter="blur(2px)"
					></Flex>
					<Flex position="fixed" h="100vh" w="35vw">
						<Flex
							h="100vh"
							w="35vw"
							flexDir="column"
							p="35px 150px 110px 110px"
							alignItems="center"
						>
							<Image w="320px" h="110px" src={Logo} />
							<Box>
								<Text color="white" fontWeight="600" fontSize="2xl" m="10">
									Create Account
								</Text>
								<Flex flexDir="column">
									<FormLabel color="white" fontWeight="400">
										User name
									</FormLabel>
									<Input bg="white" />
									<FormLabel color="white" fontWeight="400">
										Email
									</FormLabel>
									<Input bg="white" />
									<FormLabel color="white" fontWeight="400">
										Password
									</FormLabel>
									<Input bg="white" />
									<FormLabel color="white" fontWeight="400">
										Password Confirm
									</FormLabel>
									<Input bg="white" />
									<Flex flexDir="row" gap="20px" w="100%" mt="15px">
										<Button w="30%" h="25px" bg="white">
											<FcGoogle />
										</Button>
										<Button h="25px" w="30%" bg="#155BCB">
											<FaFacebookF fill="white" />
										</Button>
										<Button h="25px" w="30%" background="grey.900">
											<FaApple fill="white" />
										</Button>
									</Flex>
								</Flex>
							</Box>
							<Button
								mt="15vh"
								w="50%"
								bg="#6778B1"
								fontWeight="700"
								color="white"
							>
								Sign Up
							</Button>

							<Flex flexDir="column">
								<Text mt="3vh" fontWeight="600" color="white">
									Already have an account?{" "}
									<Link color="#6778B1" fontWeight="extrabold">
										click here.
									</Link>
								</Text>
							</Flex>
						</Flex>
					</Flex>
				</>
			) : (
				<>
					<Flex h="100vh" w="80vw" alignItems="center">
						<Flex
							h="100vh"
							w="80vw"
							flexDir="column"
							pt="35px"
							alignItems="center"
						>
							<Image w="250px" h="75px" src={LogoMobile} />
							<Box textAlign="center">
								<Text
									color="white"
									fontWeight="600"
									fontSize="xl"
									m="15px 0 15px 0"
								>
									Create Account
								</Text>
								<Flex flexDir="column">
									<FormLabel color="white" fontWeight="400">
										User name
									</FormLabel>
									<Input bg="white" />
									<FormLabel color="white" fontWeight="400">
										Email
									</FormLabel>
									<Input bg="white" />
									<FormLabel color="white" fontWeight="400">
										Password
									</FormLabel>
									<Input bg="white" />
									<FormLabel color="white" fontWeight="400">
										Password Confirm
									</FormLabel>
									<Input bg="white" />
									<Flex flexDir="row" gap="10px" w="100%" mt="10px">
										<Button w="30%" h="25px" bg="white">
											<FcGoogle />
										</Button>
										<Button h="25px" w="30%" bg="#155BCB">
											<FaFacebookF fill="white" />
										</Button>
										<Button h="25px" w="30%" bg="black">
											<FaApple fill="white" />
										</Button>
									</Flex>
								</Flex>
							</Box>
							<Button
								w="220px"
								h="35px"
								bg="#5A2843"
								fontWeight="700"
								color="white"
								mt="10vh"
							>
								Sign Up
							</Button>
							<Flex flexDir="column">
								<Text mt="3vh" fontWeight="400" color="white">
									Already have an account?{" "}
									<Link color="grey.0" fontWeight="extrabold">
										click here.
									</Link>
								</Text>
							</Flex>
						</Flex>
					</Flex>
				</>
			)}
		</>
	);
};

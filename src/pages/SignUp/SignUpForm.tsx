import {
	Box,
	Button,
	Flex,
	FormLabel,
	Image,
	Link,
	Text,
	useBreakpointValue,
	VStack,
} from "@chakra-ui/react";
import Logo from "../../assets/logo-form.svg";
import LogoMobile from "../../assets/logo-dash.svg";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebookF } from "react-icons/fa";
import { Input } from "../../components/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { jsonApi as api } from "../../services/api";
import { Navigate } from "react-router-dom";

const signUpSchema = yup.object().shape({
	name: yup.string().required("Nome obrigatório"),
	email: yup.string().required("Email obrigatório").email("Email inválido"),
	password: yup.string().required("Senha obrigatória"),
	confirm_password: yup
		.string()
		.required("Confirmação de senha obrigatória")
		.oneOf([yup.ref("password")], "Senhas diferentes"),
});

interface SignUpData {
	email: string;
	password: string;
	name: string;
	confirm_password: string;
}

export const SignUpForm = () => {
	const {
		formState: { errors },
		register,
		handleSubmit,
	} = useForm<SignUpData>({
		resolver: yupResolver(signUpSchema),
	});

	const handleSignUp = ({ name, email, password }: SignUpData) => {
		api
			.post("/register", { name, email, password })
			.then((res) => {
				<Navigate to="/signin" replace={true} />;
			})
			.catch((err) => {});
	};

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
					/>
					<Flex position="fixed" h="100vh" w="35vw">
						<Flex
							onSubmit={handleSubmit(() => handleSignUp)}
							as="form"
							h="100vh"
							w="35vw"
							flexDir="column"
							p="5% 20% 5% 20%"
							alignItems="center"
						>
							<Image w="320px" h="110px" src={Logo} />
							<Box>
								<Text color="grey.0" fontWeight="600" fontSize="2xl" m="10">
									Create Account
								</Text>
								<Flex flexDir="column">
									<Input
										label="User name"
										error={errors.name}
										{...register("name")}
									/>
									<Input
										label="Email"
										type="email"
										error={errors.email}
										{...register("email")}
									/>
									<Input
										label="Password"
										error={errors.password}
										{...register("password")}
									/>
									<Input
										label="Password Confirm"
										error={errors.confirm_password}
										{...register("confirm_password")}
									/>
									<Flex flexDir="row" gap="20px" w="100%" mt="15px">
										<Button
											w="30%"
											h="30px"
											bg="grey.0"
											_hover={{
												filter: "opacity(90%)",
											}}
										>
											<FcGoogle />
										</Button>
										<Button
											h="30px"
											w="30%"
											bg="blue.300"
											_hover={{
												filter: "opacity(90%)",
											}}
										>
											<FaFacebookF fill="white" />
										</Button>
										<Button
											h="30px"
											w="30%"
											background="grey.900"
											_hover={{
												filter: "opacity(90%)",
											}}
										>
											<FaApple fill="white" />
										</Button>
									</Flex>
								</Flex>
							</Box>
							<Button
								mt="8vh"
								w="50%"
								bg="blue.600"
								fontWeight="700"
								color="grey.0"
								_hover={{
									bg: "pink.100",
								}}
								type="submit"
							>
								Sign Up
							</Button>

							<Flex flexDir="column">
								<Text mt="3vh" fontWeight="600" color="grey.0">
									Already have an account?{" "}
									<Link
										color="blue.600"
										fontWeight="extrabold"
										_hover={{
											color: "pink.100",
										}}
										href="/signin"
									>
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
							onSubmit={handleSubmit(() => handleSignUp)}
							as="form"
							h="100vh"
							w="80vw"
							flexDir="column"
							pt="35px"
							alignItems="center"
						>
							<Image w="250px" h="75px" src={LogoMobile} />
							<VStack textAlign="center">
								<Text
									color="white"
									fontWeight="600"
									fontSize="xl"
									m="15px 0 15px 0"
								>
									Create Account
								</Text>
								<Flex flexDir="column">
									<Input
										w="100%"
										label="User name"
										error={errors.name}
										{...register("name")}
									/>
									<Input
										label="Email"
										type="email"
										error={errors.email}
										{...register("email")}
									/>
									<Input
										label="Password"
										error={errors.password}
										{...register("password")}
									/>
									<Input
										label="Password Confirm"
										error={errors.confirm_password}
										{...register("confirm_password")}
									/>
									<Flex flexDir="row" gap="10px" w="100%" mt="10px">
										<Button
											w="30%"
											h="25px"
											bg="white"
											_hover={{
												filter: "opacity(90%)",
											}}
										>
											<FcGoogle />
										</Button>
										<Button
											h="25px"
											w="30%"
											bg="#155BCB"
											_hover={{
												filter: "opacity(90%)",
											}}
										>
											<FaFacebookF fill="white" />
										</Button>
										<Button
											h="25px"
											w="30%"
											bg="black"
											_hover={{
												filter: "opacity(90%)",
											}}
										>
											<FaApple fill="white" />
										</Button>
									</Flex>
								</Flex>
							</VStack>
							<Button
								w="220px"
								h="35px"
								bg="red.600"
								fontWeight="700"
								color="white"
								mt="10vh"
								_hover={{
									bg: "pink.800",
								}}
								type="submit"
							>
								Sign Up
							</Button>
							<Flex flexDir="column">
								<Text mt="3vh" fontWeight="400" color="white">
									Already have an account?{" "}
									<Link
										color="grey.0"
										fontWeight="extrabold"
										_hover={{
											color: "blue.50",
										}}
										href="/signin"
									>
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

import {
	Flex,
	Image,
	Text,
	Button,
	keyframes,
	Box,
	useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import PolygonOne from "../../assets/NotFoundSvg/Polygon-1.svg";
import PolygonTwo from "../../assets/NotFoundSvg/Polygon-2.svg";
import PolygonThree from "../../assets/NotFoundSvg/Polygon-3.svg";
import PolygonFour from "../../assets/NotFoundSvg/Polygon-4.svg";
import PolygonFive from "../../assets/NotFoundSvg/Polygon-5.svg";

export const animation = keyframes`
	100% {
    transform: translateY(10px) ;
    filter: blur(2px);
    opacity: 0.2;
    scale: 0.8;
  }
`;

export const NotFound = () => {
	const polygonArray = [
		PolygonOne,
		PolygonTwo,
		PolygonThree,
		PolygonFour,
		PolygonFive,
	];
	const navigate = useNavigate();

	const [positionXY, setPositionXY] = useState({ x: 0, y: 0 });
	const [componentPosition, setComponentPosition] = useState<any>("inherit");

	const randomPosition = () => {
		const randomX = Math.floor(Math.random() * 100);
		const randomY = Math.floor(Math.random() * 100);
		setPositionXY({ x: randomX, y: randomY });
		setComponentPosition("fixed");
	};

	const isWideVersion = useBreakpointValue({
		base: false,
		md: true,
	});

	return (
		<Box w="100vw" h="100vh">
			<Flex
				flexDir={["column", "row", "row"]}
				w="100vw"
				h="100vh"
				position="relative"
				justifyContent={["space-around", "start"]}
				alignItems="center"
			>
				{polygonArray.map((polygon, index) => {
					return (
						<Image
							src={polygon}
							top={["0vh", "20vh", "20vh", "20vh"]}
							left={["5vw", "10vw", "15vw", "25vw"]}
							position="absolute"
							animation={
								index === 0
									? `${animation} 4s infinite ease-in-out alternate`
									: index === 1
									? `${animation} 1.5s infinite ease-in-out alternate`
									: index === 2
									? `${animation} 2.5s infinite ease-in-out alternate`
									: index === 3
									? `${animation} 3s infinite ease-in-out alternate`
									: `${animation} 2s infinite ease-in-out alternate`
							}
						/>
					);
				})}
				<Box
					w="380px"
					h="500px"
					mt={["0vh", "20vh", "20vh", "20vh"]}
					ml={["5vw", "10vw", "15vw", "25vw"]}
				/>
				<Flex
					h="180px"
					w="380px"
					flexDir="column"
					fontWeight="light"
					alignItems="center"
					justifyContent={["end", "end", "center", "center"]}
				>
					<Text as="h1" fontSize="60px" lineHeight="46px" mb="40px">
						404
					</Text>
					<Text fontWeight="light">Page not found</Text>
					<Flex justifyContent="end" gap="20px">
						<Button
							w="150px"
							bg="red.600"
							mt="10px"
							_hover={{ bg: "pink.900" }}
							onClick={() => navigate("/", { replace: true })}
						>
							Go Home
						</Button>
						{isWideVersion && (
							<Button
								w="150px"
								bg="red.600"
								mt="10px"
								_hover={{ bg: "pink.900" }}
								position={componentPosition}
								onMouseOver={randomPosition}
								onTouchStart={randomPosition}
								top={[
									"0",
									"0",
									positionXY.y < 6
										? `calc(${positionXY.y}% + 50px)`
										: `calc(${positionXY.y}% - 50px)`,
									positionXY.y < 5
										? `calc(${positionXY.y}% + 50px)`
										: `calc(${positionXY.y}% - 50px)`,
								]}
								left={[
									"0",
									"0",
									positionXY.x < 20
										? `calc(${positionXY.x}% + 150px)`
										: `calc(${positionXY.x}% - 150px)`,
									positionXY.x < 13
										? `calc(${positionXY.x}% + 150px)`
										: `calc(${positionXY.x}% - 150px)`,
								]}
							>
								Refresh Page
							</Button>
						)}
					</Flex>
				</Flex>
			</Flex>
		</Box>
	);
};

import {
	Box,
	Text,
	Flex,
	Heading,
	keyframes,
	Button,
	HStack,
} from "@chakra-ui/react";
import { arrayVideo } from "./videos";
import { useState, useRef, useEffect } from "react";
import { FaStar } from "react-icons/fa";

interface videoItem {
	name: string;
	synopsis: string;
	rating: number;
	year: number;
	genres: string[];
	video: any;
	id: number;
}

interface videoData {
	arrayVideo: videoItem[];
}

const videoframe = keyframes`
from {background: white;}
to {background: black;}
`;

export const BrowseVideos = ({ arrayVideo }: videoData) => {
	const refVideo: any = useRef();

	const [randomNumber, setRandomNumber] = useState(random(arrayVideo));

	const selected = arrayVideo[randomNumber];

	function random(arrayVideo: videoItem[]) {
		let randomGenerated = Math.floor(Math.random() * arrayVideo.length);
		return randomGenerated;
	}

	const ended = () => {
		refVideo.load();
		refVideo.play();
	};

	// useEffect(() => {
	// 	ended();
	// }, []);

	return (
		<Flex position="relative" justifyContent="center" pb="0" pt="50px" w="100%">
			<Box
				p="10"
				w="800px"
				top="27.5%"
				left="15%"
				position="absolute"
				bg="rgba(0, 0, 0, 0.61)"
				borderRadius="16px"
				boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
			>
				<Heading as="h1">{selected.name}</Heading>
				<Text
					color="grey.0"
					overflowX="hidden"
					overflowY="auto"
					h="10rem"
					w="700px"
					mt="4"
					css={{
						"&::-webkit-scrollbar": {
							width: "4px",
						},
						"&::-webkit-scrollbar-track": {
							width: "6px",
						},
						"&::-webkit-scrollbar-thumb": {
							background: "blue.50",
							borderRadius: "24px",
						},
					}}
				>
					{selected.synopsis}
				</Text>
				<Button w="200px" bg="red.600" mt="6">
					Add
				</Button>
				<HStack spacing="4" mt="6" alignItems="center">
					<FaStar fill="#EFDB73" />
					<Text>{selected.rating}</Text>
					<Text>Launching Year: {selected.year}</Text>
					{selected.genres &&
						selected.genres.map((element, index) => {
							return (
								<Text key={index} color="grey.0" fontSize="sm">
									{element}
								</Text>
							);
						})}
				</HStack>
			</Box>
			<Box
				as="video"
				autoPlay
				ref={refVideo}
				muted={true}
				onEnded={() => {
					setRandomNumber(random(arrayVideo));
					ended();
				}}
				src={selected.video}
				typeof="video/mp4"
				// vjs-fluid
				w="90vw"
				h="80vh"
				objectFit="cover"
				zIndex="-1"
				animation={`${videoframe} 3s`}
				borderRadius="10px"
			/>
		</Flex>
	);
};

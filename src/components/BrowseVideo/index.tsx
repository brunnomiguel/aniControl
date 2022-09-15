import {
	Box,
	Text,
	Flex,
	Heading,
	keyframes,
	Button,
	HStack,
	useMergeRefs,
	chakra,
} from "@chakra-ui/react";
import { arrayVideo } from "./videos";
import { useState, useRef, useEffect } from "react";
import { FaBox, FaStar } from "react-icons/fa";
import React from "react";
import { buffer } from "stream/consumers";

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
  from {
		background: white;
	}
  to {
		background: black;
	}
`;

const timer = keyframes`
  to {
		--percentage: 100%;
	}
`;

interface videoData {
	arrayVideo: videoItem[];
}

CSS?.registerProperty({
	name: "--percentage",
	syntax: "<percentage>",
	initialValue: "0%",
	inherits: false,
});

export const BrowseVideos = ({ arrayVideo }: videoData) => {
	const refVideo = useRef<any>(null);

	const [duration, setDuration] = useState(0);
	const [randomArray, setRandomArray] = useState<any>([
		arrayVideo[random(arrayVideo)],
	]);
	const [videoObject, setVideoObject] = useState(randomArray[0]);
	const [indexRef, setIndexRef] = useState(0);
	const videoRandomized = arrayVideo[random(arrayVideo)];

	randomArray.map((video: object) => {
		if (
			video !== videoRandomized &&
			randomArray[1] !== videoRandomized &&
			randomArray.length <= 2
		) {
			return setRandomArray([...randomArray, videoRandomized]);
		}
	});

	function random(arrayVideo: videoItem[]) {
		let randomGenerated = Math.floor(Math.random() * arrayVideo.length);
		return randomGenerated;
	}

	const ended = (selectedVideo: object, indexRef: number) => {
		setVideoObject(selectedVideo);
		setIndexRef(indexRef);
		refVideo.current.load();
		refVideo.current.play();
		setDuration(refVideo.current.duration.toString());
		setDuration(refVideo.current.duration.toString());
	};

	const verifyAndPlay = () => {
		if (indexRef <= 1) {
			ended(randomArray[indexRef + 1], indexRef + 1);
		} else {
			ended(randomArray[0], 0);
		}
	};

	return (
		<Flex position="relative" justifyContent="center" pb="0" pt="50px" w="100%">
			<Box zIndex="3">
				{randomArray.map((item: object, index: number) => {
					return (
						<>
							{indexRef === index ? (
								<Box
									key={index}
									as="button"
									position="absolute"
									top={index === 0 ? "45%" : index === 1 ? "53%" : "61%"}
									left="12%"
									w="25px"
									h="25px"
									borderRadius="50%"
									bg="conic-gradient(rgba(105, 105, 105, 0.61) var(--percentage), rgba(0, 0, 0, 0.61) 0)"
									animation={`${timer} ${duration.toString()}s linear`}
									shadow="0.5px 0.5px rgba(0, 0, 0, 0.31),1px 1px rgba(0, 0, 0, 0.31), 1.5px 1.5px rgba(0, 0, 0, 0.31)"
									transform="translateX(-1.5px)"
									onClick={() => {
										index === 0
											? ended(randomArray[index], index)
											: index === 1
											? ended(randomArray[index], index)
											: ended(randomArray[index], index);
									}}
									transition="all 0.3s ease;"
									_hover={{
										shadow:
											"0.5px 0.5px rgba(0, 0, 0, 0.61),1px 1px rgba(0, 0, 0, 0.61), 1.5px 1.5px rgba(0, 0, 0, 0.61)",
										transform: "translateX(-1.5px)",
									}}
								/>
							) : (
								<Box
									key={index}
									as="button"
									position="absolute"
									top={index === 0 ? "45%" : index === 1 ? "53%" : "61%"}
									left="12%"
									w="25px"
									h="25px"
									borderRadius="50%"
									bg="transparent"
									border="2px solid rgba(0, 0, 0, 0.61)"
									boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
									onClick={() => {
										index === 0
											? ended(randomArray[index], index)
											: index === 1
											? ended(randomArray[index], index)
											: ended(randomArray[index], index);
									}}
									transition="all 0.3s ease;"
									_hover={{
										shadow:
											"0.5px 0.5px rgba(0, 0, 0, 0.31),1px 1px rgba(0, 0, 0, 0.31), 1.5px 1.5px rgba(0, 0, 0, 0.31)",
										transform: "translateX(-1.5px)",
									}}
								/>
							)}
						</>
					);
				})}
			</Box>
			<Box
				p="10"
				w="800px"
				top="27.5%"
				left="15%"
				position="absolute"
				bg="rgba(0, 0, 0, 0.61)"
				borderRadius="16px"
				shadow="0 4px 5px rgba(0, 0, 0, 0.9)"
				zIndex="3"
			>
				<Heading fontWeight="semibold" as="h1">
					{videoObject.name}
				</Heading>
				<Text
					fontWeight="light"
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
					{videoObject.synopsis}
				</Text>
				<Button
					fontWeight="semibold"
					w="200px"
					bg="red.600"
					mt="6"
					_hover={{ bg: "pink.800" }}
				>
					Add
				</Button>
				<HStack spacing="4" mt="6" alignItems="center">
					<FaStar fill="#EFDB73" />
					<Text fontWeight="thin">{videoObject.rating}</Text>
					<Text fontWeight="thin">Launching Year: {videoObject.year}</Text>
					{videoObject.genres &&
						videoObject.genres.map((element: string, index: number) => {
							return (
								<Text
									fontWeight="thin"
									key={index}
									color="grey.0"
									fontSize="sm"
								>
									{element}
								</Text>
							);
						})}
				</HStack>
			</Box>
			<Box
				position="absolute"
				w="90vw"
				h="80vh"
				borderRadius="10px"
				zIndex="2"
				shadow="rgba(0, 0, 0, 1) 0px -100px 36px -28px inset,rgba(0, 0, 0, 1) 0px 2px 4px, rgba(0, 0, 0, 0.9) 0px 7px 13px -3px, rgba(0, 0, 0, 0.8) 0px -3px 0px inset, rgba(0, 0, 0, 1) 0px 25px 30px -20px"
			/>
			<chakra.video
				autoPlay
				ref={refVideo}
				muted={true}
				onPlay={() => {
					setDuration(refVideo.current.duration.toString());
					setDuration(refVideo.current.duration.toString());
				}}
				src={videoObject.video}
				typeof="video/mp4"
				w="90vw"
				h="80vh"
				objectFit="cover"
				zIndex="1"
				animation={`${videoframe} 3s`}
				borderRadius="10px"
				onEnded={() => {
					verifyAndPlay();
				}}
			/>
		</Flex>
	);
};

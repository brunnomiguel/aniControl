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

CSS?.registerProperty({
	name: "--percentage",
	syntax: "<percentage>",
	initialValue: "0%",
	inherits: false,
});

export const BrowseVideos = ({ arrayVideo }: videoData) => {
	const refVideo: any = useRef();
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

	return (
		<Flex position="relative" justifyContent="center" pb="0" pt="50px" w="100%">
			<Box>
				{randomArray.map((item: object, index: number) => {
					return (
						<>
							{indexRef === index ? (
								<>
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
										boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
										onClick={() => {
											index === 0
												? ended(randomArray[index], index)
												: index === 1
												? ended(randomArray[index], index)
												: ended(randomArray[index], index);
										}}
										_hover={{
											border: "2px solid rgba(255, 255, 255, 0.61)",
										}}
									/>
								</>
							) : (
								<>
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
										_hover={{
											border: "2px solid rgba(255, 255, 255, 0.61)",
										}}
									/>
								</>
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
				boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
			>
				<Heading as="h1">{videoObject.name}</Heading>
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
					{videoObject.synopsis}
				</Text>
				<Button w="200px" bg="red.600" mt="6">
					Add
				</Button>
				<HStack spacing="4" mt="6" alignItems="center">
					<FaStar fill="#EFDB73" />
					<Text>{videoObject.rating}</Text>
					<Text>Launching Year: {videoObject.year}</Text>
					{videoObject.genres &&
						videoObject.genres.map((element: string, index: number) => {
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
				onPlay={() => {
					setDuration(refVideo.current.duration.toString());
					setDuration(refVideo.current.duration.toString());
				}}
				src={videoObject.video}
				typeof="video/mp4"
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

import {
  Box,
  Text,
  Flex,
  Heading,
  keyframes,
  Button,
  HStack,
} from "@chakra-ui/react";

import { FaStar } from "react-icons/fa";
import { useState, useRef } from "react";
import { SelectedVideo } from "./SelectedVideo";

interface videoItem {
  name: string;
  synopsis: string;
  rating: number;
  year: number;
  genres: string[];
  video: string;
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

CSS?.registerProperty({
  name: "--percentage",
  syntax: "<percentage>",
  initialValue: "0%",
  inherits: false,
});

export const BrowseVideos = ({ arrayVideo }: videoData) => {
  const refVideo: any = useRef(null);

  const [duration, setDuration] = useState(0);

  const [randomArray, setRandomArray] = useState<videoItem[]>([
    arrayVideo[random(arrayVideo)],
  ]);

  const [videoObject, setVideoObject] = useState(randomArray[0]);
  const [indexRef, setIndexRef] = useState(0);
  const videoRandomized = arrayVideo[random(arrayVideo)];

  randomArray.map((video: videoItem) => {
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

  const ended = (selectedVideo: videoItem, indexRef: number) => {
    setVideoObject(selectedVideo);
    setIndexRef(indexRef);
    refVideo.current?.load();
    refVideo.current?.play();
    setDuration(refVideo.current.duration);
    setDuration(refVideo.current.duration);
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
        {randomArray.map((_, index: number) => {
          return (
            <>
              {indexRef === index ||
                (indexRef !== index && (
                  <SelectedVideo
                    indexRef={indexRef}
                    index={index}
                    key={index}
                    duration={duration}
                    ended={ended}
                    randomArray={randomArray}
                  />
                ))}
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
        {/* Transformar em um componente */}
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
      <Box
        as="video"
        autoPlay
        ref={refVideo}
        muted={true}
        onPlay={() => {
          setDuration(refVideo.current.duration);
          setDuration(refVideo.current.duration);
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

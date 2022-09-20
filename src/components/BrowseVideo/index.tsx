import { Box, Flex, keyframes, useDisclosure } from "@chakra-ui/react";

import { useState, useRef } from "react";
import { SelectedVideo } from "./SelectedVideo";
import { VideoContent } from "./VideoContent";

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
  };

  const verifyAndPlay = () => {
    if (indexRef <= 1) {
      ended(randomArray[indexRef + 1], indexRef + 1);
    } else {
      ended(randomArray[0], 0);
    }
  };

  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Flex position="relative" justifyContent="center" pb="0" pt="50px" w="100%">
      <Box zIndex="3">
        {randomArray.map((_, index: number) => {
          return (
            <Box key={index}>
              {indexRef === index ? (
                <SelectedVideo
                  indexRef={indexRef}
                  index={index}
                  duration={duration}
                  ended={ended}
                  randomArray={randomArray}
                />
              ) : (
                <SelectedVideo
                  indexRef={indexRef}
                  index={index}
                  duration={duration}
                  ended={ended}
                  randomArray={randomArray}
                />
              )}
            </Box>
          );
        })}
      </Box>
      <VideoContent
        onOpen={onOpen}
        onClose={onClose}
        isOpen={isOpen}
        videoObject={videoObject}
      />
      <Box
        position="absolute"
        w="90vw"
        h="80vh"
        borderRadius="10px"
        zIndex="2"
        onClick={() => onClose()}
        shadow="rgba(0, 0, 0, 1) 0px -100px 36px -28px inset,rgba(0, 0, 0, 1) 0px 2px 4px, rgba(0, 0, 0, 0.9) 0px 7px 13px -3px, rgba(0, 0, 0, 0.8) 0px -3px 0px inset, rgba(0, 0, 0, 1) 0px 25px 30px -20px"
      />
      <Box
        as="video"
        autoPlay
        ref={refVideo}
        muted={true}
        onPlay={() => {
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

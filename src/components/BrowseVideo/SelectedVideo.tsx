import { Box, keyframes } from "@chakra-ui/react";

interface videoItem {
  name: string;
  synopsis: string;
  rating: number;
  year: number;
  genres: string[];
  video: string;
  id: number;
}

interface IselectedVideo {
  indexRef: number;
  index: number;
  duration: number;
  ended: (selectedVideo: videoItem, index: number) => void;
  randomArray: videoItem[];
}

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

export const SelectedVideo = ({
  indexRef,
  index,
  duration,
  ended,
  randomArray,
}: IselectedVideo) => {
  return (
    <Box
      as="button"
      position="absolute"
      top={index === 0 ? "45%" : index === 1 ? "53%" : "61%"}
      left="12%"
      w="25px"
      h="25px"
      borderRadius="50%"
      bg={
        indexRef === index
          ? "conic-gradient(rgba(105, 105, 105, 0.61) var(--percentage), rgba(0, 0, 0, 0.61) 0)"
          : "transparent"
      }
      animation={indexRef === index ? `${timer} ${duration}s linear` : ""}
      shadow={
        indexRef === index
          ? "0.5px 0.5px rgba(0, 0, 0, 0.31),1px 1px rgba(0, 0, 0, 0.31), 1.5px 1.5px rgba(0, 0, 0, 0.31)"
          : ""
      }
      border={
        indexRef === index ? "transparent" : "2px solid rgba(0, 0, 0, 0.61)"
      }
      transition="all 0.3s ease;"
      _hover={
        indexRef === index
          ? {
              shadow:
                "0.5px 0.5px rgba(0, 0, 0, 0.61),1px 1px rgba(0, 0, 0, 0.61), 1.5px 1.5px rgba(0, 0, 0, 0.61)",
              transform: "translateX(-1.5px)",
            }
          : {
              shadow:
                "0.5px 0.5px rgba(0, 0, 0, 0.31),1px 1px rgba(0, 0, 0, 0.31), 1.5px 1.5px rgba(0, 0, 0, 0.31)",
              transform: "translateX(-1.5px)",
            }
      }
      onClick={() => {
        index === 0
          ? ended(randomArray[index], index)
          : index === 1
          ? ended(randomArray[index], index)
          : ended(randomArray[index], index);
      }}
    />
  );
};

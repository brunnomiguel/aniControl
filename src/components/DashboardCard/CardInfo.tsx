import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

interface IcardInfo {
  score: number;
  year: number;
}

export const CardInfo = ({ score, year }: IcardInfo) => {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Flex
      color="grey.0"
      align="center"
      justify={isWideVersion ? "flex-start" : "center"}
      mt="5%"
      fontSize={12}
    >
      <FaStar fill="#EFDB73" />
      <Text fontWeight="bold">{score}</Text>
      <Text fontWeight="bold" ml="4%">
        Launching Year: {year}
      </Text>
    </Flex>
  );
};

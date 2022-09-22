import { FaStar } from "react-icons/fa";
import { Flex, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

interface IcardInfo {
  score: number;
  year: number;
}

export const CardInfo = ({ score, year }: IcardInfo) => {
  const location = useLocation();

  return (
    <Flex
      color="grey.0"
      align="center"
      justify={["center", "center", "flex-start"]}
      mt="2"
      fontSize={location.pathname === "/dashboard" ? "sm" : "lg"}
    >
      <FaStar fill="#EFDB73" />
      <Text fontWeight="bold">{score}</Text>
      <Text fontWeight="bold" ml="4%">
        Launching Year: {year}
      </Text>
    </Flex>
  );
};

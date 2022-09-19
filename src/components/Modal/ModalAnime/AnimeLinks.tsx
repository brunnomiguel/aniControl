import { Flex, HStack, Text } from "@chakra-ui/react";
import { FiTv } from "react-icons/fi";
import { links } from "../../../contexts/FullAnimes/fullAnimes.types";
import { Links } from "./Links";

interface IanimeLinks {
  refLinks: links[];
}

export const AnimeLinks = ({ refLinks }: IanimeLinks) => {
  return (
    <Flex
      mt="2"
      alignItems="center"
      flexDirection={["column", "column", "row"]}
    >
      <Text
        fontSize={["2xl", "2xl", "md", "xl"]}
        fontWeight={["500", "500", "bold"]}
        maxW={["120", "120", "95px", "120px"]}
        w="100%"
      >
        Watch on:
      </Text>
      <HStack spacing="2" ml="2" flexWrap="wrap" justifyContent="center">
        {refLinks &&
          refLinks.map((element, index) => {
            return (
              <Links
                key={index}
                name={element.name}
                url={element.url}
                icon={FiTv}
              />
            );
          })}
      </HStack>
    </Flex>
  );
};

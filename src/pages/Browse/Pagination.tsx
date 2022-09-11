import { Center, Flex, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { BiFirstPage, BiLastPage } from "react-icons/bi";

interface IpaginationProps {
  previusPage: () => void;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

export const Pagination = ({
  page,
  previusPage,
  setPage,
}: IpaginationProps) => {
  return (
    <Flex w="320px" alignItems="center" justifyContent="center">
      <Center
        as="button"
        onClick={previusPage}
        w="50px"
        h="50px"
        fontSize="4xl"
        bg="blue.50"
        color="white"
        borderTopLeftRadius="10"
        borderBottomLeftRadius="10"
        cursor="ponter"
        _hover={{ bg: "blue.400" }}
      >
        <BiFirstPage />
      </Center>
      <Text
        w="80px"
        h="50px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="white"
        color="grey.700"
        fontWeight="bold"
        fontSize="2xl"
      >
        {page}
      </Text>
      <Center
        as="button"
        onClick={() => setPage(page + 1)}
        w="50px"
        h="50px"
        fontSize="4xl"
        bg="blue.50"
        color="white"
        borderTopRightRadius="10"
        borderBottomRightRadius="10"
        cursor="ponter"
        _hover={{ bg: "blue.400" }}
      >
        <BiLastPage />
      </Center>
    </Flex>
  );
};

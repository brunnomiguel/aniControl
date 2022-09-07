import { Box, Center, Flex, Image } from "@chakra-ui/react";

import { Input } from "../Input";
import { FaSearch } from "react-icons/fa";

import Logo from "../../assets/logo-dash.svg";
import { useForm } from "react-hook-form";
import { useFullAnimes } from "../../contexts/FullAnimes";

interface SearchData {
  animeName: string;
}

export const Header = () => {
  const { handleSubmit, register } = useForm<SearchData>();
  const { searchAnime } = useFullAnimes();

  const handleSearchAnime = ({ animeName }: SearchData) => {
    searchAnime(animeName);
  };

  return (
    <Flex
      as="header"
      w="100vw"
      h="7vh"
      alignItems="center"
      justify="space-between"
      backgroundColor="grey.600"
      borderBottom={"0.2rem solid"}
      borderBottomColor={"blue.50"}
    >
      <Image
        h="70%"
        w={["35%", "35%", "10%", "10%"]}
        src={Logo}
        ml={["2", "4", "4"]}
      />
      <Box
        as="form"
        onSubmit={handleSubmit(handleSearchAnime)}
        position="relative"
        mr={["2", "4", "6"]}
        w={["auto", "auto", "50%", "27%"]}
      >
        <Input {...register("animeName")} />
        <Center
          as="button"
          w="40px"
          h="40px"
          bgColor="red.600"
          borderRadius="6"
          _hover={{ bg: "pink.800" }}
          _active={{ bg: "red.600" }}
          position="absolute"
          top="1"
          right="2"
          type="submit"
          zIndex="1"
        >
          <FaSearch color="grey.0" />
        </Center>
      </Box>
    </Flex>
  );
};

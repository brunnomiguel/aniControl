import { Box, Center, Flex, Image, useDisclosure } from "@chakra-ui/react";

import { Input } from "../Input";
import { FaSearch, FaTh } from "react-icons/fa";

import Logo from "../../assets/logo-dash.svg";
import { useForm } from "react-hook-form";
import { useFullAnimes } from "../../contexts/FullAnimes";
import { theme } from "../../styles/theme";
import { DrawerLogout } from "./DrawerLogout";

interface SearchData {
  animeName: string;
}

export const Header = () => {
  const { handleSubmit, register } = useForm<SearchData>();
  const { searchAnime } = useFullAnimes();

  const { isOpen, onClose, onToggle } = useDisclosure();

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
      <Flex
        as="form"
        onSubmit={handleSubmit(handleSearchAnime)}
        position="relative"
        mr={["2", "4", "4"]}
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
          right="12"
          type="submit"
          zIndex="1"
        >
          <FaSearch color="grey.0" />
        </Center>
        <Center ml="2" onClick={onToggle} as="button" fontSize="4xl">
          <FaTh color={theme.colors.grey[300]} />
        </Center>
      </Flex>
      <DrawerLogout isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

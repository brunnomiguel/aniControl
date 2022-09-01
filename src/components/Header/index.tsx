import { Box, Button, Flex, Image, Input } from "@chakra-ui/react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Logo from "../../assets/logo-dash.svg";

export const Header = () => {
  const [openSearch, setOpenSearch] = useState(true);

  const handleOpenSearch = () => {
    setOpenSearch(!openSearch);
  };

  return (
    <Flex
      as="header"
      bgColor="red"
      w="100vw"
      h="7vh"
      align="center"
      justify="space-between"
      backgroundColor="#2C2C38"
      borderBottom={"0.2rem solid"}
      borderBottomColor={"#5CC6DC"}
    >
      <Image h="70%" w={["35%", "35%", "10%", "10%"]} src={Logo} />
      <>
        {openSearch ? (
          <Flex
            align="center"
            justify="center"
            w={["50%", "35%", "25%", "25%"]}
            h="70%"
            bgColor="#D9D9D9"
            borderRadius="8px"
            border="0.1rem solid"
            borderColor="#141414"
            mr="2vw"
          >
            <Input w="85%" h="100%" outline="none" variant="unstyled" ml="1%" />
            <Button
              w="10%"
              h="90%"
              bgColor="#5A2843"
              _hover={{ bg: "#28121E" }}
              _active={{ bg: "#5A2843" }}
              onClick={handleOpenSearch}
              mr="2%"
            >
              <FaSearch color="#fff" />
            </Button>
          </Flex>
        ) : (
          <Box mr="3.5vw">
            <FaSearch color="#fff" onClick={handleOpenSearch} />
          </Box>
        )}
      </>
    </Flex>
  );
};

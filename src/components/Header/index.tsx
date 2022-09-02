import { Box, Button, Flex, Image, Input, theme } from "@chakra-ui/react";
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
      backgroundColor="grey.600"
      borderBottom={"0.2rem solid"}
      borderBottomColor={"blue.50"}
    >
      <Image h="70%" w={["35%", "35%", "10%", "10%"]} src={Logo} />
      <>
        {openSearch ? (
          <Flex
            align="center"
            justify="center"
            w={["50%", "35%", "25%", "25%"]}
            h="70%"
            bgColor="grey.0"
            borderRadius="8px"
            border="0.1rem solid"
            borderColor="grey.900"
            mr="2vw"
          >
            <Input w="85%" h="100%" outline="none" variant="unstyled" ml="1%" />
            <Button
              w="10%"
              h="90%"
              bgColor="red.600"
              _hover={{ bg: "pink.800" }}
              _active={{ bg: "red.600" }}
              onClick={handleOpenSearch}
              mr="2%"
            >
              <FaSearch color="grey.0" />
            </Button>
          </Flex>
        ) : (
          <Box mr="3.5vw">
            <FaSearch color="grey.0" onClick={handleOpenSearch} />
          </Box>
        )}
      </>
    </Flex>
  );
};

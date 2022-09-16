import { useNavigate } from "react-router-dom";
import { Button, Center, Flex, Text } from "@chakra-ui/react";

export const DashboardListEmpty = () => {
  const navigate = useNavigate();

  return (
    <Flex w="225vw">
      <Center
        w="100%"
        h="85vh"
        bg="grey.600"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        borderRadius="10px"
      >
        <Text as="h1" fontSize="3rem" align="center" fontWeight="semibold">
          Your Anime Manager is empty.
        </Text>
        <Text as="p" align="center" paddingTop="1%">
          Use our kanban to easily manage your animes.
          <br />
          Just click on the the link bellow to be redirected.
        </Text>
        <Button
          w="auto"
          bg="blue.50"
          _hover={{ bg: "blue.400" }}
          _active={{ bg: "blue.50" }}
          color="grey.0"
          fontSize="1rem"
          mt="2%"
          onClick={() => navigate("/browse")}
        >
          Go to Browse
        </Button>
      </Center>
    </Flex>
  );
};

import { Box, Flex, HStack, Progress, Text, VStack } from "@chakra-ui/react";

export const DrawerStatics = () => {
  const dayCount = 31.3;
  const meanScore = 8.07;

  return (
    <VStack bg="#21212D" borderRadius="8px">
      <Text as="h2" color="#fff" fontWeight="bold" fontSize="1.5rem">
        Anime Stats
      </Text>
      <Flex align="center" justify="space-between" w="75%">
        <Text color="#fff" fontSize="0.8rem">
          <b>Days: </b> {dayCount}
        </Text>
        <Text color="#fff" fontSize="0.8rem">
          <b>Mean Score: </b>
          {meanScore}
        </Text>
      </Flex>

      <Flex w="100%">
        <Box h="100%" width="10%" padding="2%">
          <Progress bg="#fff" value={100} h="15rem" borderRadius="50px" />
        </Box>
        <VStack w="90%" bg="#2C2C38" padding="4%" borderRadius="8px">
          <Flex align="center" w="100%" flexDir="row">
            <Box borderRadius="50%" h="1rem" w="1rem" bg="#fff" mr="5%" />
            <Text color="#fff" w="90%">
              Plan to Watch
            </Text>
          </Flex>
          <Flex align="center" w="100%" flexDir="row">
            <Box borderRadius="50%" h="1rem" w="1rem" bg="#FF4940" mr="5%" />
            <Text color="#fff"> Dropped</Text>
          </Flex>
          <Flex align="center" w="100%" flexDir="row">
            <Box borderRadius="50%" h="1rem" w="1rem" bg="#FFF37E" mr="5%" />
            <Text color="#fff"> On-Hold</Text>
          </Flex>
          <Flex align="center" w="100%" flexDir="row">
            <Box borderRadius="50%" h="1rem" w="1rem" bg="#1B83EA" mr="5%" />
            <Text color="#fff"> Completed</Text>
          </Flex>
          <Flex align="center" w="100%" flexDir="row">
            <Box borderRadius="50%" h="1rem" w="1rem" bg="#6AF06A" mr="5%" />
            <Text color="#fff" w="100%">
              Watching
            </Text>
          </Flex>
        </VStack>
      </Flex>
    </VStack>
  );
};

import { Box, Center, Flex, Progress, Text, VStack } from "@chakra-ui/react";

import { GiPlainCircle } from "react-icons/gi";

export const DrawerStatics = () => {
  const dayCount = 31.3;
  const meanScore = 8.07;
  const animeCount = 145;
  const episodesCount = 1871;

  return (
    <VStack bg="#21212D" borderRadius="8px" m="4% 4% 0% 4%">
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
      <Flex w="100%" paddingBottom="5%" paddingTop="8%">
        <Box h="100%" width="10%" padding="2%">
          <Progress bg="#fff" value={0} h="30vh" borderRadius="50px" />
        </Box>
        <VStack w="90%" bg="#2C2C38" padding="4%" borderRadius="2px">
          <Flex align="center" w="100%" flexDir="row">
            <GiPlainCircle size="1.5rem" fill="#fff" />
            <Flex flexDir="row" justify={"space-between"} w="100%" ml="2%">
              <Text color="#fff" w="90%">
                Plan to Watch
              </Text>
              <Text color={"#fff"}>23</Text>
            </Flex>
          </Flex>
          <Flex align="center" w="100%" flexDir="row" justify="center">
            <GiPlainCircle size="1.5rem" fill="#FF4940" />
            <Flex flexDir="row" justify={"space-between"} w="100%" ml="2%">
              <Text color="#fff"> Dropped</Text>
              <Text color={"#fff"}>25</Text>
            </Flex>
          </Flex>
          <Flex align="center" w="100%" flexDir="row">
            <GiPlainCircle size="1.5rem" fill="#FFF37E" />
            <Flex flexDir="row" justify={"space-between"} w="100%" ml="2%">
              <Text color="#fff"> On-Hold</Text>
              <Text color={"#fff"}>9</Text>
            </Flex>
          </Flex>
          <Flex align="center" w="100%" flexDir="row">
            <GiPlainCircle size="1.5rem" fill="#1B83EA" />
            <Flex flexDir="row" justify={"space-between"} w="100%" ml="2%">
              <Text color="#fff"> Completed</Text>
              <Text color={"#fff"}>87</Text>
            </Flex>
          </Flex>
          <Flex align="center" w="100%" flexDir="row">
            <GiPlainCircle size="1.5rem" fill="#6AF06A" />
            <Flex flexDir="row" justify={"space-between"} w="100%" ml="2%">
              <Text color="#fff" w="100%">
                Watching
              </Text>
              <Text color="#fff">1</Text>
            </Flex>
          </Flex>

          <Center paddingTop="1%">
            <Flex flexDir="column" align="center">
              <Flex flexDir="column" align="center">
                <Text color="#fff">Total Entries</Text>
                <Text color="#fff" fontWeight="bold">
                  {animeCount}
                </Text>
              </Flex>
              <Flex flexDir="column" align="center" mt="10%">
                <Text color="#fff">Episodes</Text>
                <Text color="#fff" fontWeight="bold">
                  {episodesCount}
                </Text>
              </Flex>
            </Flex>
          </Center>
        </VStack>
      </Flex>
    </VStack>
  );
};

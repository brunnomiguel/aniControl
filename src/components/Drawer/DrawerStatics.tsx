import { Box, Center, Flex, Text, VStack } from "@chakra-ui/react";

import { GiPlainCircle } from "react-icons/gi";

export const DrawerStatics = () => {
  const dayCount = 31.3;
  const meanScore = 8.07;
  const animeCount = 145;
  const episodesCount = 1871;

  const animeStats = {
    planToWatch: Math.round((23 / 145) * 100),
    dropped: Math.round((25 / 145) * 100),
    onHold: Math.round((9 / 145) * 100),
    completed: Math.round((87 / 145) * 100),
    watching: Math.round((1 / 145) * 100),
  };

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
          <Box h="37vh" bg="#fff" borderRadius="16px">
            <Box
              h={`${animeStats.planToWatch}%`}
              w="100%"
              bg="#fff"
              borderTopRadius="2px"
            />
            <Box h={`${animeStats.dropped}%`} w="100%" bg="#FF4940" />
            <Box h={`${animeStats.onHold}%`} w="100%" bg="#FFF37E" />
            <Box h={`${animeStats.completed}%`} w="100%" bg="#1B83EA" />
            <Box
              h={`${animeStats.watching}%`}
              w="100%"
              bg="#6AF06A"
              borderBottomRadius="2px"
            />
          </Box>
        </Box>
        <VStack w="95%" bg="#2C2C38" padding="4%" borderRadius="2px">
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

import { Box, Center, Flex, Text, VStack } from "@chakra-ui/react";

import { GiPlainCircle } from "react-icons/gi";
import { useAnimeList } from "../../contexts/AnimeList";

export const DrawerStatics = () => {
  const { userAnimes } = useAnimeList();

  const dayCount = () => {
    const minutes = userAnimes.map((elem) => elem.episodes * 23);
    return (minutes.reduce((a, b) => a + b, 0) / 1440).toFixed(2);
  };
  const meanScore = () => {
    const rating = userAnimes.map((elem) => elem.rating);
    return (rating.reduce((a, b) => a + b, 0) / rating.length).toFixed(2);
  };
  const episodesCount = () => {
    const episodes = userAnimes.map((elem) => elem.episodes);
    return episodes.reduce((a, b) => a + b, 0);
  };
  const animeCount = userAnimes.length;

  const planToWatchList = userAnimes.filter(
    (anime) => anime.status === "planToWatch"
  );
  const droppedList = userAnimes.filter((anime) => anime.status === "dropped");
  const onHoldList = userAnimes.filter((anime) => anime.status === "onHold");
  const completedList = userAnimes.filter(
    (anime) => anime.status === "completed"
  );
  const watchingList = userAnimes.filter(
    (anime) => anime.status === "watching"
  );

  const animeStats = {
    planToWatch: Math.round((planToWatchList.length / 145) * 100),
    dropped: Math.round((droppedList.length / 145) * 100),
    onHold: Math.round((onHoldList.length / 145) * 100),
    completed: Math.round((completedList.length / 145) * 100),
    watching: Math.round((watchingList.length / 145) * 100),
  };

  return (
    <VStack bg="#21212D" borderRadius="8px" m="4% 4% 0% 4%">
      <Text as="h2" color="#fff" fontWeight="bold" fontSize="1.5rem">
        Anime Stats
      </Text>
      <Flex align="center" justify="space-between" w="75%">
        <Text color="#fff" fontSize="0.8rem">
          <b>Days: </b> {dayCount()}
        </Text>
        <Text color="#fff" fontSize="0.8rem">
          <b>Mean Score: </b>
          {meanScore()}
        </Text>
      </Flex>
      <Flex w="100%" paddingBottom="5%" paddingTop="8%">
        <Box h="100%" width="10%" padding="2%">
          <Box h="37vh" bg="#fff">
            <Flex
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
              <Text color={"#fff"}>{planToWatchList.length}</Text>
            </Flex>
          </Flex>
          <Flex align="center" w="100%" flexDir="row" justify="center">
            <GiPlainCircle size="1.5rem" fill="#FF4940" />
            <Flex flexDir="row" justify={"space-between"} w="100%" ml="2%">
              <Text color="#fff"> Dropped</Text>
              <Text color={"#fff"}>{droppedList.length}</Text>
            </Flex>
          </Flex>
          <Flex align="center" w="100%" flexDir="row">
            <GiPlainCircle size="1.5rem" fill="#FFF37E" />
            <Flex flexDir="row" justify={"space-between"} w="100%" ml="2%">
              <Text color="#fff"> On-Hold</Text>
              <Text color={"#fff"}>{onHoldList.length}</Text>
            </Flex>
          </Flex>
          <Flex align="center" w="100%" flexDir="row">
            <GiPlainCircle size="1.5rem" fill="#1B83EA" />
            <Flex flexDir="row" justify={"space-between"} w="100%" ml="2%">
              <Text color="#fff"> Completed</Text>
              <Text color={"#fff"}>{completedList.length}</Text>
            </Flex>
          </Flex>
          <Flex align="center" w="100%" flexDir="row">
            <GiPlainCircle size="1.5rem" fill="#6AF06A" />
            <Flex flexDir="row" justify={"space-between"} w="100%" ml="2%">
              <Text color="#fff" w="100%">
                Watching
              </Text>
              <Text color="#fff">{watchingList.length}</Text>
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
                  {episodesCount()}
                </Text>
              </Flex>
            </Flex>
          </Center>
        </VStack>
      </Flex>
    </VStack>
  );
};

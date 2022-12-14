import { theme } from "../../styles/theme";
import { Box, Center, Flex, Text, VStack } from "@chakra-ui/react";

import { useEffect } from "react";
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

    return rating.length === 0
      ? "0.00"
      : (rating.reduce((a, b) => a + b, 0) / rating.length).toFixed(2);
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
    planToWatch: Math.round((planToWatchList.length / animeCount) * 100),
    dropped: Math.round((droppedList.length / animeCount) * 100),
    onHold: Math.round((onHoldList.length / animeCount) * 100),
    completed: Math.round((completedList.length / animeCount) * 100),
    watching: Math.round((watchingList.length / animeCount) * 100),
  };

  useEffect(() => {
    dayCount();
    meanScore();
    episodesCount();
  }, [userAnimes]);

  return (
    <VStack bg="grey.700" borderRadius="8px" m="4% 4% 0% 4%">
      <Text as="h2" color="grey.0" fontWeight="bold" fontSize="1.5rem">
        Anime Stats
      </Text>
      <Flex align="center" justify="space-between" w="75%">
        <Text color="grey.0" fontSize="0.8rem">
          <b>Days: </b> {dayCount()}
        </Text>
        <Text color="grey.0" fontSize="0.8rem">
          <b>Mean Score: </b>
          {meanScore()}
        </Text>
      </Flex>
      <Flex w="100%" paddingBottom="5%" paddingTop="8%">
        <Box h="100%" width="10%" padding="2%">
          <Box h="37vh" bg="tranparent" borderRadius="10px" overflow="hidden">
            <Box
              h={`${animeStats.planToWatch}%`}
              w="100%"
              bg={theme.colors.grey[0]}
            />
            <Box
              h={`${animeStats.dropped}%`}
              w="100%"
              bg={theme.colors.red[50]}
            />
            <Box
              h={`${animeStats.onHold}%`}
              w="100%"
              bg={theme.colors.yellow[50]}
            />
            <Box
              h={`${animeStats.completed}%`}
              w="100%"
              bg={theme.colors.blue[100]}
            />
            <Box
              h={`${animeStats.watching}%`}
              w="100%"
              bg={theme.colors.green[50]}
            />
          </Box>
        </Box>
        <VStack w="95%" bg="grey.600" padding="4%" borderRadius="2px">
          <Flex align="center" w="100%" flexDir="row">
            <GiPlainCircle size="1.5rem" fill={theme.colors.grey[0]} />
            <Flex flexDir="row" justify={"space-between"} w="100%" ml="2%">
              <Text color="grey.0" w="90%">
                Plan to Watch
              </Text>
              <Text color={"grey.0"}>{planToWatchList.length}</Text>
            </Flex>
          </Flex>
          <Flex align="center" w="100%" flexDir="row" justify="center">
            <GiPlainCircle size="1.5rem" fill={theme.colors.red[50]} />
            <Flex flexDir="row" justify={"space-between"} w="100%" ml="2%">
              <Text color="grey.0"> Dropped</Text>
              <Text color={"grey.0"}>{droppedList.length}</Text>
            </Flex>
          </Flex>
          <Flex align="center" w="100%" flexDir="row">
            <GiPlainCircle size="1.5rem" fill={theme.colors.yellow[50]} />
            <Flex flexDir="row" justify={"space-between"} w="100%" ml="2%">
              <Text color="grey.0"> On-Hold</Text>
              <Text color={"grey.0"}>{onHoldList.length}</Text>
            </Flex>
          </Flex>
          <Flex align="center" w="100%" flexDir="row">
            <GiPlainCircle size="1.5rem" fill={theme.colors.blue[100]} />
            <Flex flexDir="row" justify={"space-between"} w="100%" ml="2%">
              <Text color="grey.0"> Completed</Text>
              <Text color={"grey.0"}>{completedList.length}</Text>
            </Flex>
          </Flex>
          <Flex align="center" w="100%" flexDir="row">
            <GiPlainCircle size="1.5rem" fill={theme.colors.green[50]} />
            <Flex flexDir="row" justify={"space-between"} w="100%" ml="2%">
              <Text color="grey.0" w="100%">
                Watching
              </Text>
              <Text color="grey.0">{watchingList.length}</Text>
            </Flex>
          </Flex>

          <Center paddingTop="1%">
            <Flex flexDir="column" align="center">
              <Flex flexDir="column" align="center">
                <Text color="grey.0">Total Entries</Text>
                <Text color="grey.0" fontWeight="bold">
                  {animeCount}
                </Text>
              </Flex>
              <Flex flexDir="column" align="center" mt="10%">
                <Text color="grey.0">Episodes</Text>
                <Text color="grey.0" fontWeight="bold">
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

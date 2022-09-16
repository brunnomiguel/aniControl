import { useState, useEffect } from "react";
import { Center, Flex, Text, VStack } from "@chakra-ui/react";
import { DashboardCard } from "../../../components/DashboardCard";
import { IanimelistItem, useAnimeList } from "../../../contexts/AnimeList";

interface IDashboardListFavoritesProps {
  setReswitch: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DashboardListFavorites = ({
  setReswitch,
}: IDashboardListFavoritesProps) => {
  const { userAnimes } = useAnimeList();
  const [favorites, setFavorites] = useState<IanimelistItem[]>([]);

  useEffect(() => {
    const favorites = userAnimes.filter((anime) => anime.favorite === true);
    setFavorites(favorites);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userAnimes]);

  return (
    <Flex w="250vw">
      <Center
        w="100%"
        flexDir="column"
        alignItems="flex-start"
        justifyContent="center"
        borderRadius="10px"
      >
        <Flex
          flexFlow="column nowrap"
          width={["95vw", "95vw", "95vw", "35vw"]}
          height="93vh"
          align="center"
        >
          <Text
            as="h2"
            bg="#5A2843"
            marginTop="1rem"
            marginBottom="1rem"
            borderRadius="4px"
            color="#ffffff"
            textAlign="center"
            fontWeight="bold"
            padding="0.5rem"
            fontSize="1.5rem"
            width={["95vw", "95vw", "95vw", "35vw"]}
          >
            Favorites
          </Text>
          <VStack width="90%" spacing={6} height="93vh">
            {favorites.map((anime, index) => {
              return (
                <DashboardCard
                  anime={anime}
                  id={anime.id}
                  key={index}
                  favorite={anime.favorite}
                  setReswitch={setReswitch}
                />
              );
            })}
          </VStack>
        </Flex>
      </Center>
    </Flex>
  );
};

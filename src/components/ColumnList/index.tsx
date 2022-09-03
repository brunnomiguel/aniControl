import { Flex, Text, VStack } from "@chakra-ui/react";
import { DashboardCard } from "../DashboardCard";
import { IanimelistItem } from "../../contexts/AnimeList";

interface IColumnList {
  cardList?: IanimelistItem[];
  title: string;
}

export const ColumnList = ({ title, cardList }: IColumnList) => {
  return (
    <Flex
      flexFlow="column nowrap"
      width={["95vw", "95vw", "95vw", "35vw"]}
      height="93vh"
      align="center"
    >
      <Text
        as="h2"
        bg="red.600"
        marginTop="1rem"
        marginBottom="1rem"
        borderRadius="4px"
        color="grey.0"
        textAlign="center"
        fontWeight="bold"
        padding="0.5rem"
        fontSize="1.5rem"
        width={["95vw", "95vw", "95vw", "35vw"]}
      >
        {title}
      </Text>
      <VStack width="90%" spacing={6}>
        {cardList &&
          cardList.map((anime, index) => {
            return (
              <DashboardCard
                anime={anime.anime.data}
                id={anime.id}
                key={index}
              />
            );
          })}
      </VStack>
    </Flex>
  );
};

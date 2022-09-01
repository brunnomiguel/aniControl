import { Flex, Text, VStack } from "@chakra-ui/react";
import { DashboardCard } from "../DashboardCard";
import { animeProps } from "../DashboardCard/types";

interface IColumnList {
  cardList?: animeProps[];
  title: string;
}

export const ColumnList = ({ title, cardList }: IColumnList) => {
  return (
    <Flex
      flexFlow="column nowrap"
      width={["95%", "95vw", "95vw", "35vw"]}
      height="93vh"
      alignSelf="center"
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
      >
        {title}
      </Text>
      <VStack width="100%" spacing={2}>
        {cardList &&
          cardList.map((anime, index) => {
            return <DashboardCard anime={anime} key={index} />;
          })}
      </VStack>
    </Flex>
  );
};

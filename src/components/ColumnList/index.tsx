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
      width={["95vw", "95vw", "95vw", "35vw"]}
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
        padding="0.5rem"
        fontSize="1.5rem"
      >
        {title}
      </Text>
      <VStack
        width="100%"
        spacing={6}
        overflow="scroll"
        overflowX="hidden"
        css={{
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-track": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#5CC6DC",
            borderRadius: "24px",
          },
        }}
      >
        {cardList &&
          cardList.map((anime, index) => {
            return <DashboardCard anime={anime} key={index} />;
          })}
      </VStack>
    </Flex>
  );
};

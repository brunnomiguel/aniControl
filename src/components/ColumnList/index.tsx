import { Flex, Text, VStack } from '@chakra-ui/react';


interface ICard {
    img: string;
    title: string;
    sinopsis: string;
    rating: number;
    year: string;
    genres: string[];
}

interface IColumnList {
    cardList?: ICard[];
} 

export const ColumnList = ({cardList}: IColumnList) => {
  return (
    <Flex>
        <VStack>
            { cardList && cardList.map((card) => {
                return <Text>Test</Text>
            })}
        </VStack>
    </Flex>
  )
}

import {
  Button,
  Flex,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import { IanimelistItem, useAnimeList } from "../../../contexts/AnimeList";
import { theme } from "../../../styles/theme";
import { jsonApi } from "../../../services/api";
import { useState } from "react";

interface IModalDashboardFormProps {
  anime: IanimelistItem;
  id: number;
}

export const ModalDashboardForm = ({ anime, id }: IModalDashboardFormProps) => {
  const { updateAnime } = useAnimeList();

  const [data, setData] = useState({
    rating: anime.rating,
    status: anime.status,
    episodes: anime.episodes,
  });

  const onSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log(data);

    updateAnime(data, id).then((_) => console.log("Funcionou!"));
  };

  return (
    <VStack as="form" mt="5%" w="75%" spacing={4} onSubmit={(e) => onSubmit(e)}>
      <VStack align="flex-start" w="100%">
        <Text as="h2">Status</Text>
        <Select
          variant="filled"
          color="grey.0"
          bg="grey.700"
          _hover={{ bg: "grey.900" }}
          w="100%"
          onChange={(e) => setData({ ...data, status: e.target.value })}
        >
          <option
            style={{ backgroundColor: `${theme.colors.grey[700]}` }}
            value="completed"
          >
            Completed
          </option>
          <option
            style={{ backgroundColor: `${theme.colors.grey[700]}` }}
            value="planToWatch"
          >
            Plan to Watch
          </option>
          <option
            style={{ backgroundColor: `${theme.colors.grey[700]}` }}
            value="dropped"
          >
            Dropped
          </option>
          <option
            style={{ backgroundColor: `${theme.colors.grey[700]}` }}
            value="onHold"
          >
            On-Hold
          </option>
          <option
            style={{ backgroundColor: `${theme.colors.grey[700]}` }}
            value="watching"
          >
            Watching
          </option>
        </Select>
      </VStack>
      <VStack align="flex-start" w="100%">
        <Text as="h2">Episodes Watched</Text>
        <Flex align="center" gap={2} w={["50%", "35%", "25%", "25%"]}>
          <NumberInput
            variant="filled"
            bg="grey.700"
            _hover={{ bg: "grey.900" }}
            w="100%"
          >
            <NumberInputField
              bg="grey.700"
              _hover={{ bg: "grey.900" }}
              onChange={(e) =>
                setData({ ...data, episodes: Number(e.target.value) })
              }
            />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Text fontSize="2xl">
            /
            {anime.anime.data.episodes === null
              ? "Still Airing"
              : anime.anime.data.episodes}
          </Text>
        </Flex>
      </VStack>
      <VStack align="flex-start" w="100%">
        <Text as="h2">Rating</Text>
        <Select
          variant="filled"
          color="grey.0"
          bg="grey.700"
          _hover={{ bg: "grey.900" }}
          w="100%"
          onChange={(e) => setData({ ...data, rating: Number(e.target.value) })}
        >
          <option
            style={{ backgroundColor: `${theme.colors.grey[700]}` }}
            value={10}
          >
            (10) MasterPiece
          </option>
          <option
            style={{ backgroundColor: `${theme.colors.grey[700]}` }}
            value={9}
          >
            (09) Great
          </option>
          <option
            style={{ backgroundColor: `${theme.colors.grey[700]}` }}
            value={8}
          >
            (08) Very Good
          </option>
          <option
            style={{ backgroundColor: `${theme.colors.grey[700]}` }}
            value={7}
          >
            (07) Good
          </option>
          <option
            style={{ backgroundColor: `${theme.colors.grey[700]}` }}
            value={6}
          >
            (06) Fine
          </option>
          <option
            style={{ backgroundColor: `${theme.colors.grey[700]}` }}
            value={5}
          >
            (05) Average
          </option>
          <option
            style={{ backgroundColor: `${theme.colors.grey[700]}` }}
            value={4}
          >
            (04) Bad
          </option>
          <option
            style={{ backgroundColor: `${theme.colors.grey[700]}` }}
            value={3}
          >
            (03) Very Bad
          </option>
          <option
            style={{ backgroundColor: `${theme.colors.grey[700]}` }}
            value={2}
          >
            (02) Horrible
          </option>
          <option
            style={{ backgroundColor: `${theme.colors.grey[700]}` }}
            value={1}
          >
            (01) Appalling
          </option>
        </Select>
      </VStack>
      <Button
        bg="red.600"
        _hover={{ bg: "pink.800" }}
        _active={{ bg: "red.600" }}
        type="submit"
      >
        Submit
      </Button>
    </VStack>
  );
};

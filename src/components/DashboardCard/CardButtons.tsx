import { FaStar } from "react-icons/fa";
import { Button, HStack } from "@chakra-ui/react";

interface IcardButtons {
  handleFavoriteAnime: () => void;
  handleDeleteAnime: () => void;
}

export const CardButtons = ({
  handleFavoriteAnime,
  handleDeleteAnime,
}: IcardButtons) => {
  return (
    <HStack w="100%" justifyContent="center" mt="1%">
      <Button
        justifyContent="space-evenly"
        w="50%"
        mr="3%"
        bg="blue.50"
        _hover={{ bg: "blue.400" }}
        _active={{ bg: "blue.50" }}
        color="grey.0"
        fontSize="0.75rem"
        onClick={handleFavoriteAnime}
      >
        <FaStar fill="#EFDB73" />
        Favorite
      </Button>
      <Button
        w="50%"
        bg="blue.50"
        _hover={{ bg: "blue.400" }}
        _active={{ bg: "blue.50" }}
        color="grey.0"
        fontSize="0.75rem"
        onClick={handleDeleteAnime}
      >
        Remove
      </Button>
    </HStack>
  );
};

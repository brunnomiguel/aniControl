import { Button } from "@chakra-ui/react";
import { FiBarChart2 } from "react-icons/fi";

interface IHoveringButtonProps {
  onOpen: () => void;
}

export const HoveringButton = ({ onOpen }: IHoveringButtonProps) => {
  return (
    <Button
      bg="grey.0"
      onClick={onOpen}
      position="fixed"
      w="15vw"
      h="15vw"
      borderRadius="9999px"
      bottom="2vh"
      left="2vw"
      zIndex={2}
      fontSize="10rem"
      _active={{ bg: "red.600", color: "grey.0" }}
    >
      <FiBarChart2 />
    </Button>
  );
};

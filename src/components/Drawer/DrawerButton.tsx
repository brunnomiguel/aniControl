import { Button, Text } from "@chakra-ui/react";

import { IconType } from "react-icons";

interface IDrawerButtonProps {
  Icon: IconType;
  Title: string;
  bgColor: string;
  hoverColor: string;
  activeColor: string;
}

export const DrawerButton = ({
  Icon,
  Title,
  bgColor,
  hoverColor,
  activeColor,
}: IDrawerButtonProps) => {
  return (
    <Button
      w="100%"
      borderLeftRadius="0"
      fontSize="1.5rem"
      padding="1.5rem"
      color="grey.0"
      bgColor={bgColor}
      _hover={{ bg: hoverColor }}
      _active={{ bg: activeColor }}
      alignItems="center"
    >
      <Icon />
      <Text>{Title}</Text>
    </Button>
  );
};

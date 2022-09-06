import { Button, Text } from "@chakra-ui/react";
import { ButtonProps } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface IDrawerButtonProps extends ButtonProps {
  Icon: IconType;
  Title: string;
  bgColor: string;
  hoverColor: string;
  activeColor: string;
}

export const DrawerButton = ({ Icon, Title, bgColor, hoverColor, activeColor, ...rest }: IDrawerButtonProps) => {
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
      onClick={rest.onClick}
    >
      <Icon />
      <Text>{Title}</Text>
    </Button>
  );
};

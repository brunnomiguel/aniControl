import { Flex, Link, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface LinkProps {
  name: string;
  url: string;
  icon?: IconType;
}

export const Links = ({ name, url, icon: Icon }: LinkProps) => {
  return (
    <Link href={url} target="_blank" rel="noreferrer">
      {name !== "" && (
        <Flex alignItems="center">
          {Icon && <Icon />}
          <Text fontSize="sm" ml="1">
            {name}
          </Text>
        </Flex>
      )}
    </Link>
  );
};

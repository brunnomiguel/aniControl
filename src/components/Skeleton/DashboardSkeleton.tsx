import {
  Box,
  Flex,
  HStack,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/react";

export const DashboardSkeleton = () => {
  return (
    <HStack>
      {Array.from(Array(3).keys()).map((_) => {
        return (
          <Flex
            flexFlow="column nowrap"
            width={["95vw", "95vw", "95vw", "35vw"]}
            height="93vh"
            align="center"
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
              width={["95vw", "95vw", "95vw", "35vw"]}
            >
              Column
            </Text>
            {Array.from(Array(4).keys()).map((_) => {
              return (
                <Flex
                  padding="6"
                  boxShadow="lg"
                  w="32vw"
                  h="25rem"
                  flexDir="row"
                  justifyContent="space-between"
                >
                  <Skeleton h="100%" w="48%" />
                  <Box w="48%" h="100%">
                    <Skeleton noOfLines={1} h="10%" />
                    <SkeletonText
                      mt="4"
                      noOfLines={8}
                      spacing="4"
                      w="90%"
                      h="85%"
                    />
                  </Box>
                </Flex>
              );
            })}
          </Flex>
        );
      })}
    </HStack>
  );
};

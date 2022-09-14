import { Flex, Skeleton, SkeletonProps, VStack } from "@chakra-ui/react";

interface IcardAnimeSkeletonProps extends SkeletonProps {
  repeatCount: number;
}

export const CardAnimeSkeleton = ({
  repeatCount,
  ...rest
}: IcardAnimeSkeletonProps) => {
  const howMany = Array.from(Array(repeatCount).keys());

  return (
    <>
      {howMany.map((_, index) => [
        <Flex p="4" w="100%" key={index}>
          <Skeleton
            w="170px"
            h="210px"
            startColor="grey.100"
            endColor="grey.600"
            borderRadius="10"
            m="2"
          />
          <VStack w="100%" h="220px" justifyContent="center" spacing="4">
            <Skeleton
              startColor="grey.100"
              endColor="grey.600"
              alignSelf="flex-start"
              w="80%"
              h="40px"
            />
            <Skeleton
              startColor="grey.100"
              endColor="grey.600"
              w="100%"
              h="60px"
            />
            <Skeleton
              startColor="grey.100"
              endColor="grey.600"
              alignSelf="flex-start"
              w="60%"
              h="20px"
            />
            <Skeleton
              startColor="grey.100"
              endColor="grey.600"
              alignSelf="flex-start"
              w="70%"
              h="20px"
            />
          </VStack>
        </Flex>,
      ])}
    </>
  );
};

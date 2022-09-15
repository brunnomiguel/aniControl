import { Box, Skeleton, SkeletonProps } from "@chakra-ui/react";

interface IimageCardSkeletonProps extends SkeletonProps {
  repeatCount: number;
}

export const ImageCardSkeleton = ({
  repeatCount,
  ...rest
}: IimageCardSkeletonProps) => {
  const howMany = Array.from(Array(repeatCount).keys());

  return (
    <>
      {howMany.map((_, index) => [
        <Skeleton
          key={index}
          {...rest}
          startColor="grey.100"
          endColor="grey.600"
        >
          <Box w="210px" p="6" h="270px" borderRadius="12" />
        </Skeleton>,
      ])}
    </>
  );
};

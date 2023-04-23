import { Box, Skeleton, SkeletonText } from '@chakra-ui/react';
import React from 'react';

const SkeletonCardMovie = () => {
  return (
    <Box height="300px" marginTop={10}>
      <Skeleton height="250px" />
      <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
    </Box>
  );
};

export default SkeletonCardMovie;

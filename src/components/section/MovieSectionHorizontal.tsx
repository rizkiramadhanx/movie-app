import { Box, BoxProps, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import CardMain from '../card/CardMain';
import SkeletonCardMovie from '../card/SkeletonCardMovie';
import { BsArrowRight } from 'react-icons/bs';
import { BASE_URL_IMAGE_MOVIE } from '@/config';
import useSWR from 'swr';
import { Link as LinkNav } from 'react-router-dom';

interface MovieSectionHorizontalProps {
  label: string;
  slug: string;
  urlSeeMore: string;
  urlFetching: string;
}

const MovieSectionHorizontal = ({
  slug,
  urlFetching,
  label,
  urlSeeMore,
  ...rest
}: MovieSectionHorizontalProps & BoxProps) => {
  const { data } = useSWR(urlFetching);

  return (
    <Box gap={3} display="flex" flexDirection="column" {...rest}>
      <Text fontWeight={'bold'} fontSize="2xl">
        {label}
      </Text>
      <HStack overflowX="scroll" p={2}>
        {data
          ? data.results.map((e: any, i: number) => (
              <CardMain key={i} image={BASE_URL_IMAGE_MOVIE + e.poster_path} />
            ))
          : // @ts-ignore
            Array.apply(null, { length: 10 }).map((e, i) => (
              <SkeletonCardMovie key={i} />
            ))}
      </HStack>
      <HStack alignContent="center" justifyContent="space-between">
        <HStack>
          {
            //@ts-ignore
            Array.apply(null, { length: 3 }).map((_, key) => (
              <BsArrowRight className="blink" key={key} size={30} />
            ))
          }
        </HStack>
        <Text
          as={LinkNav}
          to={urlSeeMore}
          fontWeight={'bold'}
          fontSize="xl"
          display="flex"
          alignItems="center"
          gap={2}
        >
          See more <BsArrowRight size={20} />
        </Text>
      </HStack>
    </Box>
  );
};

export default MovieSectionHorizontal;

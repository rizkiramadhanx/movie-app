import ImageMovie from '@/components/card/ImageMovie';
import Layout from '@/components/layout/Layout';
import { BASE_URL_IMAGE_MOVIE } from '@/config';
import {
  Box,
  Button,
  Flex,
  SimpleGrid,
  Skeleton,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { Rating } from '@smastrom/react-rating';
import { Link as LinkNav, useParams } from 'react-router-dom';
import useSWR from 'swr';

const Movie = () => {
  let { movieId } = useParams();

  const { data, isLoading } = useSWR(`/movie/${movieId}`);

  return (
    <Layout head="Detail Movie | Pahe.in">
      <Box display="flex" justifyContent="center" marginY={10}>
        <Box
          paddingX={{
            base: '3',
            sm: '5',
            lg: '8',
          }}
          maxWidth={1280}
          width="full"
        >
          <SimpleGrid columns={[1, 1, 2, 2]} gap={6}>
            {data ? (
              <ImageMovie image={BASE_URL_IMAGE_MOVIE + data.poster_path} />
            ) : (
              <Box
                height={[100, 200, 300]}
                bg="gray.600"
                borderRadius="8px"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Spinner size="xl" color="white" />
              </Box>
            )}
            {data && (
              <Skeleton isLoaded={!isLoading}>
                <Flex flexDirection="column" gap={['4']}>
                  <Flex flexDirection="column" gap={2}>
                    <Text
                      fontSize={['2xl', '3xl', '5xl']}
                      fontWeight={['extrabold']}
                    >
                      {data.original_title}
                    </Text>
                    <Text
                      fontSize={['medium', 'xl', '3xl']}
                      fontWeight={['bold']}
                    >
                      {data.tagline}
                    </Text>
                  </Flex>
                  <Flex justifyContent="space-between">
                    <Flex columnGap={2}>
                      <Rating
                        style={{ maxWidth: '80px' }}
                        value={data.vote_average / 2}
                        readOnly
                      />
                      <Text fontSize={['2xs', 'md', 'xl']}>
                        {data.vote_count} ✅
                      </Text>
                    </Flex>
                    <Text fontSize={['md', 'md', 'xl']} fontWeight={['bold']}>
                      {data.production_countries[0].name} | {data.runtime} min |
                      {` ${data.release_date}`}
                    </Text>
                  </Flex>
                  <Flex flexDirection={'column'} gap={2}>
                    <Text
                      fontSize={['medium', 'md', 'xl']}
                      fontWeight={['bold']}
                    >
                      Genre
                    </Text>
                    <Flex gap={2} wrap="wrap">
                      {data.genres.map((genre: any, key: number) => (
                        <Button
                          key={key}
                          as={LinkNav}
                          to={'/genre/' + genre.id}
                        >
                          {genre.name}
                        </Button>
                      ))}
                    </Flex>
                  </Flex>
                  <Flex flexDirection={'column'} gap={2}>
                    <Text fontSize={['md', 'md', 'xl']} fontWeight={['medium']}>
                      Synopsis
                    </Text>
                    <Text
                      fontSize={['md', 'md', 'xl']}
                      fontWeight={['hairline']}
                    >
                      {data.overview}
                    </Text>
                  </Flex>
                </Flex>
              </Skeleton>
            )}
          </SimpleGrid>
        </Box>
      </Box>
    </Layout>
  );
};

export default Movie;

import SkeletonCardMovie from '@/components/card/SkeletonCardMovie';
import Layout from '@/components/layout/Layout';
import { BASE_URL_IMAGE_MOVIE } from '@/config';
import { Box, SimpleGrid } from '@chakra-ui/react';
import { Suspense, lazy } from 'react';
import useSWR from 'swr';

const CardMovieLazy = lazy(() => import('@/components/card/CardMovie'));

const Trending = () => {
  const { data } = useSWR('/trending/movie/day');

  return (
    <Layout>
      <Box display="flex" justifyContent="center" marginY={10}>
        <Box
          paddingX={{
            base: '3',
            sm: '5',
            lg: '8',
          }}
          maxWidth={1280}
          width="full"
          sx={{
            minHeight: 'calc(100vh - 56px)',
          }}
          alignItems="center"
        >
          <SimpleGrid columns={[2, null, 4, 5]} gap={6}>
            {data &&
              data.results.map((e: any, i: number) => (
                <Suspense fallback={<SkeletonCardMovie />} key={i}>
                  <CardMovieLazy
                    title={e.title}
                    vote_average={e.vote_average}
                    image={BASE_URL_IMAGE_MOVIE + e.poster_path}
                  />
                </Suspense>
              ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Layout>
  );
};

export default Trending;

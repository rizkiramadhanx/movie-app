import SkeletonCardMovie from '@/components/card/SkeletonCardMovie';
import Layout from '@/components/layout/Layout';
import Pagination from '@/components/pagination';
import { BASE_URL_IMAGE_MOVIE } from '@/config';
import usePagination from '@/hooks/usePagination';
import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import { Suspense, lazy, useEffect, useState } from 'react';
import useSWR from 'swr';
import { useParams, useRoutes } from 'react-router-dom';

const CardMovieLazy = lazy(() => import('@/components/card/CardMovie'));

const Genre = () => {
  const { currentPage, addPage, toPage, previousPage } = usePagination();
  const [genreName, setGenreName] = useState('ajajaj');

  const { data: dataGenres, isLoading } = useSWR('/genre/movie/list');

  let { id } = useParams();

  useEffect(() => {
    const GENRE = dataGenres?.genres.filter((e: any) => e.id == id)[0].name;
    setGenreName(GENRE);
  }, [genreName, id]);

  const { data } = useSWR(
    `/discover/movie?page=${currentPage}&with_genres=${id}`
  );

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
        >
          <Box
            display="flex"
            alignItems={['start', 'start', 'end', 'end']}
            flexDirection={['column', 'column', 'row']}
            justifyContent="space-between"
            gap={5}
            mb={10}
          >
            <Text fontWeight="extrabold" fontSize="xl">
              Movie with genres{' '}
              <span
                style={{
                  textDecoration: 'underline',
                  color: 'orange',
                }}
              >
                {genreName}
              </span>
            </Text>
          </Box>
          <SimpleGrid minHeight="500px" columns={[2, null, 4, 5]} gap={6}>
            {data
              ? data.results.map((e: any, i: number) => (
                  <Suspense fallback={<SkeletonCardMovie />} key={i}>
                    <CardMovieLazy
                      title={e.title}
                      vote_average={e.vote_average}
                      image={BASE_URL_IMAGE_MOVIE + e.poster_path}
                    />
                  </Suspense>
                ))
              : // @ts-ignore
                Array.apply(null, { length: 10 }).map((e, i) => (
                  <SkeletonCardMovie key={i} />
                ))}
          </SimpleGrid>
          {data && (
            <Pagination
              lastPage={data.total_pages}
              justifyContent="end"
              marginTop={10}
              addPage={addPage}
              previousPage={previousPage}
              toPage={toPage}
              currentPage={data.page}
            />
          )}
        </Box>
      </Box>
    </Layout>
  );
};

export default Genre;

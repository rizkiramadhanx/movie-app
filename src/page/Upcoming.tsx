import SkeletonCardMovie from '@/components/card/SkeletonCardMovie';
import SelectFilter from '@/components/form/SelectFilter';
import Layout from '@/components/layout/Layout';
import Pagination from '@/components/pagination';
import { BASE_URL_IMAGE_MOVIE } from '@/config';
import usePagination from '@/hooks/usePagination';
import { transformRegionsToSelectFormat } from '@/utils/logic';
import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import { Suspense, lazy, useEffect, useState } from 'react';
import useSWR from 'swr';

const CardMovieLazy = lazy(() => import('@/components/card/CardMovie'));

const Upcoming = () => {
  const { data: regions } = useSWR(`/watch/providers/regions`);

  const [payload, setPayload] = useState('ID');

  const { currentPage, addPage, toPage, previousPage } = usePagination();

  useEffect(() => {}, [payload]);

  const { data } = useSWR(
    `/movie/upcoming?page=${currentPage}&region=${payload}`
  );

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPayload(e.target.value);
  };

  return (
    <Layout head="Upcoming | Pahe.in">
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
              Upcoming Movie on{' '}
              <span
                style={{
                  textDecoration: 'underline',
                  color: 'orange',
                }}
              >
                {payload}
              </span>
            </Text>
            {regions && (
              <SelectFilter
                size="sm"
                dataOption={transformRegionsToSelectFormat(regions.results)}
                width="200px"
                onChange={handleChange}
                defaultValue="ID"
              />
            )}
          </Box>
          <SimpleGrid
            minHeight="500px"
            columns={data && !data.results[0] ? 1 : [2, null, 4, 5]}
            gap={6}
          >
            {data && !data.results[0] && (
              <Text
                fontWeight="extrabold"
                fontSize="xl"
                textAlign="center"
                width="full"
              >
                No movie found
              </Text>
            )}
            {data
              ? data.results.map((e: any, i: number) => (
                  <Suspense fallback={<SkeletonCardMovie />} key={i}>
                    <CardMovieLazy
                      id={e.id}
                      title={e.title}
                      vote_average={e.vote_average}
                      image={BASE_URL_IMAGE_MOVIE + e.poster_path}
                      releaseDate={e.release_date}
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

export default Upcoming;

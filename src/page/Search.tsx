import SkeletonCardMovie from '@/components/card/SkeletonCardMovie';
import Layout from '@/components/layout/Layout';
import Pagination from '@/components/pagination';
import { BASE_URL_IMAGE_MOVIE } from '@/config';
import usePagination from '@/hooks/usePagination';
import { Box, Input, SimpleGrid, Text } from '@chakra-ui/react';
import {
  ChangeEvent,
  Suspense,
  lazy,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useSearchParams } from 'react-router-dom';
import useSWR from 'swr';

const CardMovieLazy = lazy(() => import('@/components/card/CardMovie'));

const Search = () => {
  const inputReference = useRef();

  const [search, setSearch] = useState('');

  const { currentPage, addPage, toPage, previousPage } = usePagination();

  const [searchParams, setSearchParams] = useSearchParams();

  const { data } = useSWR(`/search/movie?query=${search}&page=${currentPage}`);

  useEffect(() => {
    if (searchParams.get('focus') === 'true') {
      // @ts-ignore
      inputReference.current.focus();
    }
  }, [searchParams.get('focus')]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setSearchParams({ focus: 'false' });
  };

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
            flexDirection={['column-reverse', 'column-reverse', 'row']}
            justifyContent={search === '' ? 'end' : 'space-between'}
            gap={5}
            mb={10}
          >
            {search !== '' && (
              <Text fontWeight="extrabold" fontSize="xl">
                Search movie for{' '}
                <span
                  style={{
                    color: 'orange',
                  }}
                >
                  "{search}"
                </span>{' '}
                ?
              </Text>
            )}
            <Input
              placeholder="Search a movie..."
              size="sm"
              type="text"
              width="200px"
              onChange={handleChange}
              // @ts-ignore
              ref={inputReference}
            />
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

export default Search;

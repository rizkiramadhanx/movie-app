import Layout from '@/components/layout/Layout';
import { BASE_URL_IMAGE_MOVIE } from '@/config';
import { Box, Button, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { Link as LinkNav } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import '@/css/swiper.css';
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import MovieSectionHorizontal from '@/components/section/MovieSectionHorizontal';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { EffectCards } from 'swiper';

const Main = () => {
  const [backgroundHero, setBackgroundHero] = useState(
    '/lWqjXgut48IK5f5IRbDBAoO2Epp.jpg'
  );
  const { data } = useSWR(`/discover/movie`);

  const handleTouchCard = (e: any) => {
    setBackgroundHero(data.results[e].backdrop_path);
  };

  useEffect(() => {}, [backgroundHero]);

  return (
    <Layout head="Home | Pahe.in">
      <Box position="relative">
        <Box
          position="absolute"
          width="full"
          zIndex="-1"
          backgroundImage={BASE_URL_IMAGE_MOVIE + backgroundHero}
          backgroundSize="cover"
          height={['800px', '900px', '500px']}
          style={{
            filter: 'blur(8px)',
          }}
        />
        <Box display="flex" justifyContent="center">
          <Box
            paddingX={{
              base: '3',
              sm: '5',
              lg: '8',
            }}
            maxWidth={1280}
            width="full"
            display="flex"
            flexDirection="column"
            gap={10}
          >
            <SimpleGrid
              display="grid"
              columns={[1, null, 2]}
              paddingY={5}
              gap={6}
            >
              <Flex
                flexDirection="column"
                gap={2}
                justifyContent="center"
                minHeight="400px"
              >
                <Text fontWeight={'bold'} fontSize="5xl" color="white">
                  What is <span className="neon">Pahe.in</span> ?
                </Text>
                <Text color="white">
                  Pahe.in is a popular website that provides users with a wide
                  range of free movies, TV shows, and other entertainment
                  content that can be downloaded or streamed online. It was
                  established in Indonesia and became a popular platform for
                  fans of movies and TV shows to watch and download their
                  favorite content.
                </Text>
                <Flex gap={5} marginTop={2}>
                  <Button
                    as={LinkNav}
                    to="https://pahe.li/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Original Web
                  </Button>
                  <Button
                    as={LinkNav}
                    to="https://www.imdb.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    IMDB
                  </Button>
                </Flex>
              </Flex>
              <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
                onActiveIndexChange={(e) => handleTouchCard(e.activeIndex)}
              >
                {data &&
                  // @ts-ignore
                  data.results.map((e, key) => (
                    <SwiperSlide key={key}>
                      <LazyLoadImage
                        src={BASE_URL_IMAGE_MOVIE + e.poster_path}
                        style={{
                          borderRadius: '8px 8px 0 0',
                        }}
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </SimpleGrid>
            <MovieSectionHorizontal
              label="Top Rated Movie"
              slug="/movie/"
              urlFetching="/movie/top_rated"
              urlSeeMore="/discover/top-rated"
            />
            <MovieSectionHorizontal
              label="Up Coming"
              slug="/movie/"
              urlFetching="/movie/upcoming"
              urlSeeMore="/discover/upcoming"
            />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Main;

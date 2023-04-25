import Layout from '@/components/layout/Layout';
import { BASE_URL_IMAGE_MOVIE } from '@/config';
import { Box, Button, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

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
            backgroundImage={BASE_URL_IMAGE_MOVIE + backgroundHero}
            backgroundSize="cover"
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
                Apa itu Pahe.in ?
              </Text>
              <Text color="white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nostrum exercitationem dolorum consequatur eveniet explicabo
                officiis iure quas reprehenderit possimus consectetur, unde
                cumque error, adipisci nulla autem labore voluptas facilis!
                Laborum.
              </Text>
              <Flex gap={5}>
                <Button>Original Web</Button>
                <Button>IMDB</Button>
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
    </Layout>
  );
};

export default Main;

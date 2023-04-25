import Layout from '@/components/layout/Layout';
import {
  Box,
  Button,
  Flex,
  Grid,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import useSWR from 'swr';
import { BASE_URL_IMAGE_200, BASE_URL_IMAGE_MOVIE } from '@/config';
import { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import '@/css/swiper.css';

// import required modules
import { EffectCards } from 'swiper';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Main = () => {
  const [backgroundHero, setBackgroundHero] = useState(
    '/lWqjXgut48IK5f5IRbDBAoO2Epp.jpg'
  );
  const { data } = useSWR(`/discover/movie`);

  const handleTouchCard = (e: any) => {
    setBackgroundHero(e);
  };

  useEffect(() => {}, [backgroundHero]);

  return (
    <Layout>
      <Box display="flex" justifyContent="center">
        <SimpleGrid
          paddingX={{
            base: '3',
            sm: '5',
            lg: '8',
          }}
          maxWidth={1280}
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          width="full"
          sx={{
            minHeight: 'calc(100vh - 56px)',
          }}
          display="grid"
          columns={[1, null, 2]}
          paddingY={5}
          gap={6}
          // position={'relative'}
        >
          <Flex
            flexDirection="column"
            gap={2}
            minHeight="calc(100vh - 56px)"
            justifyContent="center"
          >
            <Text fontWeight={'bold'} fontSize="5xl">
              Apa itu Pahe.in ?
            </Text>
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
              exercitationem dolorum consequatur eveniet explicabo officiis iure
              quas reprehenderit possimus consectetur, unde cumque error,
              adipisci nulla autem labore voluptas facilis! Laborum.
            </Text>
            <Flex gap={5}>
              <Button>Cuaks</Button>
              <Button>Cuaks</Button>
            </Flex>
          </Flex>
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            {data &&
              // @ts-ignore
              data.results.map((e, key) => (
                <SwiperSlide key={key}>
                  <LazyLoadImage
                    onMouseEnter={() => handleTouchCard(e.backdrop_path)}
                    src={BASE_URL_IMAGE_MOVIE + e.poster_path}
                    style={{
                      borderRadius: '8px 8px 0 0',
                    }}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </SimpleGrid>
      </Box>
    </Layout>
  );
};

export default Main;

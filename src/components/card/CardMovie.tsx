import {
  Box,
  GridItem,
  Spinner,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { CiImageOff } from 'react-icons/ci';
import { Rating } from '@smastrom/react-rating';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import useImage from '@/hooks/useImage';
import '@smastrom/react-rating/style.css';

interface CardMovieProps {
  image: string;
  title: string;
  vote_average: number;
}
const StarDrawing = (
  <path
    d="M398.799,141.794c-43.394-3.977-86.776-6.52-130.158-8.418C258.835,99.302,242.633-4.751,193.173,0.169
      c-39.659,3.944-61.012,90.515-73.08,130.306c-32.333,0.283-64.692,1.062-97.09,2.416c-14.735,0.615-27.908,17.9-18.207,31.732
      c19.157,27.316,44.198,49.389,70.487,70.103c-11.83,38.196-21.665,77.499-29.759,116.53c-3.504,16.91-5.31,32.212,3.881,44.82
      c2.411,9.987,12.018,18.494,22.429,18.029c51.805-2.313,93.872-44.738,133.991-77.119c33.156,26.317,66.309,52.64,99.475,78.951
      c12.835,10.183,37.057,5.178,35.798-14.828c-3.039-48.158-15.477-96.473-30.599-144.041c32.951-25.229,65.899-50.459,99.11-75.353
      C426.818,168.817,420.858,143.814,398.799,141.794z"
  />
);

const CardMovie = ({ image, vote_average, title }: CardMovieProps) => {
  const { loaded, error } = useImage({ src: image });
  return (
    <GridItem
      _hover={{
        backgroundColor: 'gray.700',
        boxShadow: `#cf481f 0px 0px 1px, rgba(0, 0, 0, 0.12) 0px -6px 10px, #5a00cf 0px 4px 6px, #cf481f 0px 1px 13px, #5a00cf 0px -3px 5px`,
        filter: 'grayscale(50%)',
        transform: 'scale(105%)',
        transition: '0.2s',
      }}
      rounded="8px"
      bg={useColorModeValue('gray.800', 'white')}
    >
      {error && (
        <Box
          height="330px"
          bg="gray.600"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <CiImageOff size={30} />
        </Box>
      )}
      {!loaded && !error && (
        <Box
          height="330px"
          bg="gray.600"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Spinner size="xl" color="white" />
        </Box>
      )}
      {loaded && (
        <LazyLoadImage
          src={image}
          style={{
            borderRadius: '8px 8px 0 0',
          }}
        />
      )}
      <Box p={2} display="flex" flexDirection="column">
        <Rating
          style={{ maxWidth: '80px' }}
          value={vote_average / 2}
          readOnly
        />
        <Text
          textColor={useColorModeValue('white', 'gray.800')}
          fontWeight="medium"
        >
          {title}
        </Text>
      </Box>
    </GridItem>
  );
};

export default CardMovie;

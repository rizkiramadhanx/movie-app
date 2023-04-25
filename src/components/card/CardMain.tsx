import useImage from '@/hooks/useImage';
import { Box, Spinner } from '@chakra-ui/react';
import React from 'react';
import { CiImageOff } from 'react-icons/ci';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const CardMain = ({ image }: { image: string }) => {
  const { loaded, error } = useImage({ src: image });

  return (
    <Box minWidth="200px">
      {error && (
        <Box
          height="330px"
          bg="gray.600"
          display="flex"
          borderRadius="8px"
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
          borderRadius="8px"
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
            borderRadius: '8px 8px 8px 8px',
          }}
        />
      )}
    </Box>
  );
};

export default CardMain;

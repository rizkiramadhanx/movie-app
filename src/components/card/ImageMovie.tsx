import useImage from '@/hooks/useImage';
import { Box } from '@chakra-ui/react';
import { CiImageOff } from 'react-icons/ci';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ImageMovie = ({ image }: { image: string }) => {
  const { loaded, error } = useImage({ src: image });

  return (
    <Box width="full" justifyContent={'center'} display={'flex'}>
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

export default ImageMovie;

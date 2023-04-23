import Layout from '@/components/layout/Layout';
import { Box, Flex, Grid, useColorModeValue } from '@chakra-ui/react';

const Main = () => {
  return (
    <Layout>
      <Box display="flex" justifyContent="center">
        <Box
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
          alignItems="center"
        >
          1
        </Box>
      </Box>
    </Layout>
  );
};

export default Main;

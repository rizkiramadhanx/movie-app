import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const Error = ({ code }: { code: number }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bg={useColorModeValue('white', 'gray.800')}
    >
      <Flex flexDirection="column" textAlign="center" gap={6}>
        <Text fontWeight={'bold'} fontSize="4xl" lineHeight="8">
          Oops! Something{' '}
          <span
            style={{
              color: 'red',
            }}
          >
            error
          </span>
        </Text>
        <Text fontWeight={'bold'} fontSize="xl">
          with code :{' '}
          <span
            style={{
              color: 'green',
            }}
          >
            {code}
          </span>
        </Text>
      </Flex>
    </Box>
  );
};

export default Error;

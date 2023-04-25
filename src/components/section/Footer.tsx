import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box display="flex" justifyContent="center" shadow="sm" height="14" mt="6">
      <Flex
        paddingX={{
          base: '3',
          sm: '5',
          lg: '8',
        }}
        justifyContent="end"
        maxWidth={1280}
        bg={useColorModeValue('white', 'gray.800')}
        height="50px"
        width="full"
        alignItems="center"
      >
        <Text fontWeight="bold">
          &#169; Rizki Ramadhan | {new Date().getFullYear()}
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;

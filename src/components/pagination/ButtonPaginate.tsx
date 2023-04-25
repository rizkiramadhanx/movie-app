import { Button, ButtonProps, useColorModeValue } from '@chakra-ui/react';

interface ButtonPaginationProps {
  label: string | number;
}

export const ButtonPagination = ({
  label,
  ...rest
}: ButtonPaginationProps & ButtonProps) => {
  return (
    <Button
      colorScheme="orange"
      backgroundColor="white"
      variant={useColorModeValue('outline', 'solid')}
      _hover={{ backgroundColor: 'gray.100' }}
      size={['sm', 'md', 'lg']}
      {...rest}
    >
      {label}
    </Button>
  );
};

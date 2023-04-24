import { Button, ButtonProps } from '@chakra-ui/react';

interface ButtonPaginationProps {
  label: string | number;
}

export const ButtonPagination = ({
  label,
  ...rest
}: ButtonPaginationProps & ButtonProps) => {
  return (
    <Button
      colorScheme="cyan"
      backgroundColor="white"
      _hover={{ backgroundColor: 'gray.100' }}
      size={['sm', 'md', 'lg']}
      {...rest}
    >
      {label}
    </Button>
  );
};

import { Flex, FlexProps, Text } from '@chakra-ui/react';
import { ButtonPagination } from './ButtonPaginate';

interface PaginationProps {
  addPage: () => void;
  toPage: (e: number) => void;
  previousPage: () => void;
  currentPage: number;
  lastPage: number;
}

const Pagination = ({
  addPage,
  toPage,
  previousPage,
  currentPage,
  lastPage,
  ...rest
}: PaginationProps & FlexProps) => {
  const pages = [
    currentPage - 2,
    currentPage - 1,
    currentPage,
    currentPage + 1,
    currentPage + 2,
  ];

  const filterPages = pages.filter((page) => page > 0 && page <= lastPage);

  return (
    <Flex gap={2} {...rest} alignItems="center">
      <ButtonPagination
        label="Previous"
        onClick={() => previousPage()}
        hidden={currentPage === 1}
      />
      {filterPages.map((page, i) => (
        <ButtonPagination
          key={i}
          label={page}
          backgroundColor={page === currentPage ? 'orange.300' : 'white'}
          onClick={() => toPage(page)}
        />
      ))}
      {lastPage === currentPage ? (
        <ButtonPagination
          label="Last Page"
          disabled
          cursor="default"
          _hover={{
            backgroundColor: 'white',
          }}
        />
      ) : (
        <ButtonPagination
          label="Next"
          onClick={() => addPage()}
          hidden={currentPage === lastPage}
        />
      )}
    </Flex>
  );
};

export default Pagination;

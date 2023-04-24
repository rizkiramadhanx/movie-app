import React, { useState } from 'react';

const usePagination = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const addPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const toPage = (e: number) => {
    setCurrentPage(e);
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return { currentPage, previousPage, addPage, toPage };
};

export default usePagination;

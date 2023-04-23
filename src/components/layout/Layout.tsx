import React from 'react';
import { Navbar } from '../section';
import { Box } from '@chakra-ui/react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;

import React from 'react';
import { Navbar } from '../section';
import { Helmet } from 'react-helmet';

const Layout = ({
  children,
  head,
}: {
  children: React.ReactNode;
  head: string;
}) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{head}</title>
        <link rel="canonical" href="https://pahein.rizkiramadhanx.dev/" />
      </Helmet>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;

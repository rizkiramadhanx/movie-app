import React from 'react';
import { Footer, Navbar } from '../section';
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
      <Footer />
    </>
  );
};

export default Layout;

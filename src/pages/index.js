import React from 'react';

import AboutBlurb from '../components/aboutBlurb';
import Banner from '../components/banner';
import Header from '../components/header';

export default function IndexPage() {
  return (
    <>
      <Header />
      <Banner />
      <AboutBlurb />
    </>
  );
}

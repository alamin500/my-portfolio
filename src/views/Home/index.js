import React from 'react';
import About from 'src/components/About';
import Blog from 'src/components/Blog';
import Contact from 'src/components/Contact';
import Footer from 'src/components/Footer';
import Photos from 'src/components/Photos';
import Service from 'src/components/Service';
// import Testimonial from 'src/components/Testimonial';
import Work from 'src/components/work';
import HeroBanner from './HeroBanner';

const Home = () => {
  return (
    <>
      <HeroBanner />
      <Work />
      <About />

      <Service />
      <Blog />
      {/* <Testimonial /> */}
      <Photos />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;

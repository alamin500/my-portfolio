import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import SocialLink from 'src/components/SocialLink';

const HeroBanner = () => {
  return (
    <div className="banner">
      <img
        src="https://images.ctfassets.net/4bwt4pzmqo4p/3jZ2ne8tOyoN7s3Yem2Hqm/dad2acfc09d418a350ec0a1b02fe429a/simon-abrams-k_T9Zj3SE8k-unsplash.jpg?w=750&h=500&q=50&fm=webp"
        alt=""
      />
      <div className="container">
        <div className="banner-details">
          <span>Hello...</span>
          <h1>I'm Front-end Developer.</h1>
          <ul className="sub-data">
            <li>Designer</li>
            <li>Designer</li>
            <li>Designer</li>
          </ul>
          <SocialLink />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

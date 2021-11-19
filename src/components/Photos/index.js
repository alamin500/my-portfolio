import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

var settings = {
  dots: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: true,
  autoplaySpeed: 6000,
  infinite: true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
};

const Photos = () => {
  return (
    <div className="photos section" id="Photos">
      <div className="container">
        <div className="section-head">
          <h2>Photos</h2>
        </div>
        <div className="slider-section photos-list">
          <Slider {...settings}>
            <div className="photos-item overflow-hidden">
              <img
                src="https://images.ctfassets.net/4bwt4pzmqo4p/18ZNTGLiqsZUOadteGwojO/19df9ba6c1a86b45b7215807167027e5/ross-findon-mG28olYFgHI-unsplash.jpg?w=300&h=169&q=50"
                alt=""
              />
            </div>
            <div className="photos-item overflow-hidden">
              <img
                src="https://images.ctfassets.net/4bwt4pzmqo4p/18ZNTGLiqsZUOadteGwojO/19df9ba6c1a86b45b7215807167027e5/ross-findon-mG28olYFgHI-unsplash.jpg?w=300&h=169&q=50"
                alt=""
              />
            </div>
            <div className="photos-item overflow-hidden">
              <img
                src="https://images.ctfassets.net/4bwt4pzmqo4p/18ZNTGLiqsZUOadteGwojO/19df9ba6c1a86b45b7215807167027e5/ross-findon-mG28olYFgHI-unsplash.jpg?w=300&h=169&q=50"
                alt=""
              />
            </div>
          </Slider>
        </div>
        <div className="see-more">
          <Link to="#">
            <span>More Photo</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Photos;

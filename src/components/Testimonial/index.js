import React from 'react';
import Slider from 'react-slick';

var settings = {
  dots: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: true,
  autoplaySpeed: 6000,
  infinite: true,
};
const Testimonial = () => {
  return (
    <div className="slider-section section testimonials" id="Testimonials">
      <div className="container">
        <div className="section-head text-center">
          <h2>Testimonials</h2>
          <p>People I've worked with have said some nice things...</p>
        </div>
        <Slider {...settings}>
          <div className="testimonials-item">
            <div className="testi-inner">
              <img
                src="https://scontent.fdac27-1.fna.fbcdn.net/v/t1.0-9/48412585_2361975744033009_925246696995160064_o.jpg?_nc_cat=108&ccb=2&_nc_sid=174925&_nc_eui2=AeEIYRVGPqelxijzX7j-Apb-UeMEh6jp6bFR4wSHqOnpsSqZbBgYOq0p-B1gHjHkAjKSk2MBcchj53xXw-N57wNH&_nc_ohc=SktgaOcTeFQAX_Npr9C&_nc_ht=scontent.fdac27-1.fna&oh=392813d9a303bf8a84661d8a7db24fdd&oe=5FE7041D"
                alt=""
                className="avatar"
              />
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
              <h3 className="name">Ahmed Sunny</h3>
              <span className="sub-name">City University</span>
            </div>
          </div>
          <div className="testimonials-item">
            <div className="testi-inner">
              <img
                src="https://scontent.fdac27-1.fna.fbcdn.net/v/t1.0-9/48412585_2361975744033009_925246696995160064_o.jpg?_nc_cat=108&ccb=2&_nc_sid=174925&_nc_eui2=AeEIYRVGPqelxijzX7j-Apb-UeMEh6jp6bFR4wSHqOnpsSqZbBgYOq0p-B1gHjHkAjKSk2MBcchj53xXw-N57wNH&_nc_ohc=SktgaOcTeFQAX_Npr9C&_nc_ht=scontent.fdac27-1.fna&oh=392813d9a303bf8a84661d8a7db24fdd&oe=5FE7041D"
                alt=""
                className="avatar"
              />
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
              <h3 className="name">Ahmed Sunny</h3>
              <span className="sub-name">City University</span>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
